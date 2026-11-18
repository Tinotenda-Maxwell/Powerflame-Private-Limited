/**
 * SITE CONFIGURATION: the single place for company details, contact info,
 * navigation and social links. Every component imports from here, so update
 * a value once and it changes across the whole site (header, footer, contact
 * page, structured data for Google, WhatsApp links, etc.).
 *
 * Values marked PLACEHOLDER must be replaced before launch.
 * Never add directors' ID numbers, shareholdings or other personal details.
 */

export const site = {
  /** Live domain, no trailing slash. Used for canonical URLs, sitemap and Open Graph. */
  siteUrl: 'https://www.powerflame.co.zw',

  name: 'Powerflame Energy',
  legalName: 'Powerflame Energy (Private) Limited',
  shortName: 'Powerflame',
  tagline: 'Clean, safe cooking gas for Harare homes and businesses.',
  description:
    'Powerflame Energy supplies LPG gas refills, cylinders, gas appliances and safety equipment, and installs and repairs gas systems for homes and businesses in Harare.',

  registration: {
    country: 'Zimbabwe',
    companyNumber: '145022A02102026',
    /** ISO date for structured data */
    incorporatedOn: '2026-10-20',
    incorporatedOnDisplay: '20 October 2026',
    /** PLACEHOLDER: replace with the real ZERA licence number once issued */
    zeraLicence: 'ZERA licence no. pending',
  },

  address: {
    street: '7 Masotsha Ndlovu Way',
    suburb: 'Hatfield',
    city: 'Harare',
    region: 'Harare Province',
    regionCode: 'ZW-HA',
    country: 'Zimbabwe',
    countryCode: 'ZW',
  },

  /**
   * TODO: approximate coordinates for Hatfield, Harare. Confirm the exact pin
   * for 7 Masotsha Ndlovu Way on Google Maps before launch.
   */
  geo: {
    latitude: -17.8735,
    longitude: 31.0858,
  },

  contact: {
    /** PLACEHOLDER: display format, e.g. '+263 77 123 4567' */
    phone: '+263 XX XXX XXXX',
    /** PLACEHOLDER: WhatsApp number in international format */
    whatsapp: '+263 XX XXX XXXX',
    email: 'info@powerflame.co.zw',
  },

  hours: {
    display: 'Mon–Fri 08:00–17:00, Sat 08:00–13:00',
    /** Structured opening hours for Google (schema.org format) */
    schedule: [
      {
        label: 'Monday – Friday',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      { label: 'Saturday', days: ['Saturday'], opens: '08:00', closes: '13:00' },
      { label: 'Sunday & public holidays', days: [], opens: '', closes: '' },
    ],
  },

  /** PLACEHOLDER: replace '#' with your real profile URLs */
  social: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'TikTok', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ],

  areaServed: ['Harare', 'Hatfield', 'Chitungwiza', 'Ruwa', 'Epworth'],

  /** Default WhatsApp greeting used by the floating button */
  whatsappGreeting: 'Hello Powerflame Energy, I would like to ask about',
} as const;

export type SocialName = (typeof site.social)[number]['name'];

/* -----------------------------------------------------------------------------
   NAVIGATION
   -------------------------------------------------------------------------- */

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Gas safety', href: '/gas-safety' },
  { label: 'Articles', href: '/articles' },
  { label: 'FAQ', href: '/faq' },
];

export const headerCtas = {
  secondary: { label: 'Our services', href: '/services' },
  primary: { label: 'Get in touch', href: '/contact' },
} as const;

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Powerflame', href: '/about' },
      { label: 'Industries we serve', href: '/industries' },
      { label: 'Articles & guides', href: '/articles' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Privacy policy', href: '/privacy-policy' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Gas safety guide', href: '/gas-safety' },
      { label: 'Frequently asked questions', href: '/faq' },
      {
        label: 'How to check for leaks',
        href: '/articles/how-to-check-your-gas-cylinder-for-leaks',
      },
      { label: 'Choosing a cylinder size', href: '/articles/choosing-the-right-gas-cylinder-size' },
    ],
  },
];

/* -----------------------------------------------------------------------------
   HELPERS: build links from the values above
   -------------------------------------------------------------------------- */

/** Digits only, for tel: and wa.me links */
export const digitsOnly = (value: string): string => value.replace(/\D/g, '');

/** True while a value still contains the 'XX' placeholder */
export const isPlaceholder = (value: string): boolean => /X{2,}/.test(value);

export const phoneHref = `tel:+${digitsOnly(site.contact.phone)}`;
export const emailHref = `mailto:${site.contact.email}`;

/** https://wa.me/<number>?text=<message> */
export const whatsappHref = (message: string = site.whatsappGreeting): string =>
  `https://wa.me/${digitsOnly(site.contact.whatsapp)}?text=${encodeURIComponent(message)}`;

export const fullAddress = `${site.address.street}, ${site.address.suburb}, ${site.address.city}, ${site.address.country}`;

export const mapsQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.suburb}, ${site.address.city}`,
);
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&ll=${site.geo.latitude},${site.geo.longitude}&z=15&output=embed`;
export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export const absoluteUrl = (path = '/'): string =>
  `${site.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
