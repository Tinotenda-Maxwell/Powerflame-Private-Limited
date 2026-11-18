import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CircleCheck } from 'lucide-react';
import { getFaqs } from '@/content/faqs';
import { getService, services } from '@/content/services';
import { Reveal } from '@/components/animation/Reveal';
import { CtaBand } from '@/components/sections/CtaBand';
import { FaqList } from '@/components/sections/FaqList';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { ArticleGrid } from '@/components/sections/LatestArticles';
import { PageHero } from '@/components/sections/PageHero';
import { RefillProcess } from '@/components/sections/RefillProcess';
import { Steps } from '@/components/sections/Steps';
import { Button } from '@/components/ui/Button';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { JsonLd } from '@/components/ui/JsonLd';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getArticle } from '@/lib/articles';
import { buildMetadata, graph, serviceJsonLd } from '@/lib/seo';
import type { Article } from '@/types';
import styles from '../../_styles/page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const faqs = getFaqs(service.faqIds);
  const related = service.relatedArticles
    .map((s) => getArticle(s))
    .filter((a): a is Article => Boolean(a));
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd data={graph(serviceJsonLd(service))} />
      <PageHero
        eyebrow={service.hero.eyebrow}
        title={service.hero.headline}
        highlight={service.hero.highlight}
        intro={service.hero.intro}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
        actions={
          <>
            <Button href="/contact">Get in touch</Button>
            <Button href="#faqs" variant="outline">
              Common questions
            </Button>
          </>
        }
        aside={<ImageSlot image={service.image} priority sizes="(min-width: 1024px) 45vw, 100vw" />}
      />

      <Section labelledBy="overview-title">
        <div className={`${styles.split} ${styles.splitWide}`}>
          <div>
            <h2 id="overview-title" className={styles.subheading}>
              About our {service.shortTitle.toLowerCase()} service
            </h2>
            {service.overview.map((p) => (
              <p key={p.slice(0, 24)} className={styles.body}>
                {p}
              </p>
            ))}
          </div>
          <Reveal className={`${styles.card} ${styles.sticky}`}>
            <h3 className={styles.cardTitle}>What&apos;s included</h3>
            <ul className={styles.checkList} role="list">
              {service.includes.map((item) => (
                <li key={item.title}>
                  <CircleCheck size={20} aria-hidden="true" />
                  <span>
                    <strong>{item.title}.</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" grid labelledBy="benefits-title">
        <SectionHeader
          id="benefits-title"
          eyebrow="Why choose us"
          title={`The Powerflame difference for ${service.shortTitle.toLowerCase()}`}
        />
        <FeatureGrid items={service.benefits} columns={4} />
      </Section>

      <Section labelledBy="who-title">
        <SectionHeader
          id="who-title"
          eyebrow="Who it's for"
          title="Made for homes"
          highlight="and businesses"
        />
        <ul className={`${styles.linkList} ${styles.twoCol}`} role="list">
          {service.whoFor.map((item) =>
            item.href ? (
              <li key={item.label}>
                <Link href={item.href} className={styles.linkCard}>
                  <span>
                    {item.label}
                    <span className={styles.linkSub}>{item.text}</span>
                  </span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </li>
            ) : (
              <li key={item.label} className={styles.card}>
                <strong>{item.label}</strong> {item.text}
              </li>
            ),
          )}
        </ul>
      </Section>

      {service.slug === 'lpg-gas-refills' ? (
        <RefillProcess />
      ) : (
        <Section tone="warm" grid labelledBy="steps-title">
          <SectionHeader
            id="steps-title"
            eyebrow="How it works"
            title="Simple, safe,"
            highlight="step by step"
          />
          <Steps steps={service.steps} />
        </Section>
      )}

      <Section labelledBy="faqs-title" id="faqs">
        <div className={styles.split}>
          <SectionHeader
            id="faqs-title"
            eyebrow="FAQs"
            title="Questions about"
            highlight={service.shortTitle.toLowerCase()}
            intro={
              <>
                Quick answers to what people ask us most. See all our{' '}
                <Link href="/faq">frequently asked questions</Link> or read the{' '}
                <Link href="/gas-safety">gas safety guide</Link>.
              </>
            }
          />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="surface" labelledBy="related-title" spacing="sm">
          <SectionHeader
            id="related-title"
            eyebrow="Helpful reading"
            title="Related"
            highlight="guides"
          />
          <ArticleGrid articles={related} />
        </Section>
      )}

      <Section labelledBy="more-services-title" spacing="sm">
        <h2 id="more-services-title" className={styles.subheading}>
          More services from Powerflame Energy
        </h2>
        <ul className={`${styles.linkList} ${styles.twoCol}`} role="list">
          {otherServices.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className={styles.linkCard}>
                {s.title}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand title={`Talk to us about ${service.shortTitle.toLowerCase()}`} />
    </>
  );
}
