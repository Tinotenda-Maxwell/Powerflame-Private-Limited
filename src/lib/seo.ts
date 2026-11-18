import 'server-only';
import type { Metadata } from 'next';
import { absoluteUrl, fullAddress, isPlaceholder, site } from '@/config/site';
import type { Article, Crumb, Faq, Service } from '@/types';
import { publicFileExists } from './files';

/* -----------------------------------------------------------------------------
   PAGE METADATA
   -------------------------------------------------------------------------- */

interface PageSeo {
  /** Page name, e.g. 'Gas Safety Guide'. Becomes "Gas Safety Guide | Powerflame Energy" */
  title: string;
  /** 150–160 characters, unique for every page */
  description: string;
  /** Route path, e.g. '/gas-safety' */
  path: string;
  /** Use the title as-is, without the " | Powerflame Energy" suffix */
  absoluteTitle?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

/** /services/lpg-gas-refills → /og/services-lpg-gas-refills.png (falls back to default) */
export function ogImageFor(path: string): string {
  const name = path === '/' ? 'home' : path.replace(/^\//, '').replace(/\//g, '-');
  const file = `/og/${name}.png`;
  return publicFileExists(file) ? file : '/og/default.png';
}

export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
}: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const image = {
    url: ogImageFor(path),
    width: 1200,
    height: 630,
    alt: `${title}: ${site.name}`,
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type,
      locale: 'en_ZW',
      url: absoluteUrl(path),
      siteName: site.name,
      title: fullTitle,
      description,
      images: [image],
      ...(type === 'article' ? { publishedTime, modifiedTime, authors: [site.name] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image.url],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}

/* -----------------------------------------------------------------------------
   STRUCTURED DATA (JSON-LD) for Google
   https://developers.google.com/search/docs/appearance/structured-data
   -------------------------------------------------------------------------- */

type JsonLd = Record<string, unknown>;

const ORG_ID = `${site.siteUrl}/#organization`;
const BUSINESS_ID = `${site.siteUrl}/#localbusiness`;
const WEBSITE_ID = `${site.siteUrl}/#website`;

/** Placeholder phone numbers are left out of structured data until they are real */
const realValue = (value: string): string | undefined => (isPlaceholder(value) ? undefined : value);

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: `${site.address.suburb}, ${site.address.city}`,
  addressRegion: site.address.region,
  addressCountry: site.address.countryCode,
};

const sameAs = site.social.map((s) => s.href).filter((href) => href.startsWith('http'));

export function organizationJsonLd(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/logo.svg'),
    description: site.description,
    foundingDate: site.registration.incorporatedOn,
    address: postalAddress,
    email: site.contact.email,
    telephone: realValue(site.contact.phone),
    sameAs: sameAs.length ? sameAs : undefined,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'Zimbabwe company registration number',
      value: site.registration.companyNumber,
    },
  };
}

export function localBusinessJsonLd(): JsonLd {
  return {
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/logo.svg'),
    image: absoluteUrl('/og/default.png'),
    email: site.contact.email,
    telephone: realValue(site.contact.phone),
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
    openingHoursSpecification: site.hours.schedule
      .filter((slot) => slot.days.length > 0)
      .map((slot) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: slot.days,
        opens: slot.opens,
        closes: slot.closes,
      })),
    areaServed: [
      { '@type': 'City', name: 'Harare' },
      ...site.areaServed
        .filter((area) => area !== 'Harare')
        .map((name) => ({ '@type': 'Place', name })),
    ],
    parentOrganization: { '@id': ORG_ID },
    sameAs: sameAs.length ? sameAs : undefined,
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: absoluteUrl('/'),
    name: site.name,
    description: site.description,
    inLanguage: 'en-ZW',
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbJsonLd(crumbs: Crumb[]): JsonLd {
  const all = [{ label: 'Home', href: '/' }, ...crumbs];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: all.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.href),
    })),
  };
}

export function faqJsonLd(faqs: Faq[]): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function serviceJsonLd(service: Service): JsonLd {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.seo.description,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: 'Harare' },
  };
}

export function articleJsonLd(article: Article): JsonLd {
  const url = absoluteUrl(`/articles/${article.slug}`);
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    inLanguage: 'en-ZW',
    mainEntityOfPage: url,
    image: absoluteUrl(ogImageFor(`/articles/${article.slug}`)),
    author: { '@type': 'Organization', name: site.name, url: absoluteUrl('/') },
    publisher: { '@id': ORG_ID },
  };
}

export function itemListJsonLd(items: { name: string; url: string }[]): JsonLd {
  return {
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.url),
    })),
  };
}

/** Wrap several schema objects into one @graph document */
export function graph(...nodes: JsonLd[]): JsonLd {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
