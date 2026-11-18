import type { Benefit, MarqueeItem, Step } from '@/types';

/** HOME PAGE COPY */
export const homeContent = {
  hero: {
    eyebrow: 'LPG gas Harare · Hatfield',
    /** The headline is split into words for the reveal animation.
        `highlight` and the typed word are shown in the primary colour. */
    before: 'Clean Energy For',
    highlight: 'Every',
    /** Typed one character at a time after `highlight`, in this order (the first shows on load) */
    rotating: ['Kitchen', 'Home', 'Restaurant', 'Business', 'School'],
    intro:
      'Powerflame Energy is a proudly Zimbabwean LPG company in Hatfield, Harare. We supply accurately weighed gas refills, cylinders and accessories, and our trained technicians install and repair gas systems for homes and businesses.',
    badges: ['Accurately weighed refills', 'Safety-checked cylinders', 'Local Harare team'],
  },

  /** Scrolling strip under the hero: each item gets its own icon (names from components/ui/Icon) */
  marquee: [
    { label: '9kg cylinders', icon: 'cylinder' },
    { label: '14kg cylinders', icon: 'cylinder' },
    { label: '19kg cylinders', icon: 'cylinder' },
    { label: '48kg cylinders', icon: 'cylinder' },
    { label: 'Regulators', icon: 'gauge' },
    { label: 'Hoses', icon: 'cable' },
    { label: 'Burners', icon: 'flame' },
    { label: 'Gas stoves', icon: 'cooking-pot' },
    { label: 'Leak detectors', icon: 'radar' },
    { label: 'Fire extinguishers', icon: 'fire-extinguisher' },
    { label: 'Installation', icon: 'drill' },
    { label: 'Repairs', icon: 'wrench' },
  ] satisfies MarqueeItem[],

  about: {
    eyebrow: 'Who we are',
    title: 'A new Harare gas company,',
    highlight: 'built on doing things properly',
    paragraphs: [
      'Powerflame Energy (Private) Limited was registered in Zimbabwe in October 2026 with a simple aim: to make cooking gas easier, safer and more honest for Harare families and businesses.',
      'We buy, fill, refill and supply LPG; we sell cylinders, regulators, appliances and safety equipment; and we install, maintain and repair gas systems. Everything we do starts with safety and ends with a customer who knows exactly what they are getting.',
    ],
  },

  services: {
    eyebrow: 'What we do',
    title: 'Everything you need to',
    highlight: 'cook with gas',
    intro:
      'From your first cylinder to a full commercial kitchen installation, Powerflame Energy is your cooking gas supplier in Harare.',
  },

  industries: {
    eyebrow: 'Who we serve',
    title: 'Gas for homes,',
    highlight: 'kitchens and businesses',
    intro:
      'LPG works for almost anyone who cooks or heats water. Here is how we help different customers across Harare.',
  },

  whyChoose: {
    eyebrow: 'Why Powerflame',
    title: 'Why people trust us',
    highlight: 'with their gas',
    intro:
      'We are a new company, so we will not make big claims. Instead, here is what we promise to do for every customer, every time.',
    points: [
      {
        icon: 'scale',
        title: 'Accurately weighed refills',
        text: 'Every refill is weighed on a calibrated scale. You get the full amount of LPG you pay for, and you are welcome to watch.',
      },
      {
        icon: 'shield-check',
        title: 'Safety-checked cylinders',
        text: 'We inspect every cylinder before filling and leak-test it afterwards. Unsafe cylinders are never filled.',
      },
      {
        icon: 'badge-check',
        title: 'Certified accessories',
        text: 'Regulators, hoses and fittings made for LPG, from reputable suppliers and matched to your appliance.',
      },
      {
        icon: 'hard-hat',
        title: 'Trained technicians',
        text: 'Installations and repairs are carried out by people trained in safe LPG work, and every connection is tested.',
      },
      {
        icon: 'map-pin',
        title: 'Local Harare team',
        text: 'We are based in Hatfield and we understand the needs of Harare homes and businesses.',
      },
      {
        icon: 'handshake',
        title: 'Honest advice',
        text: 'We recommend what you actually need, explain things clearly and tell you if something is not safe.',
      },
    ] satisfies Benefit[],
  },

  safety: {
    eyebrow: 'Safety first',
    title: 'Gas safety is',
    highlight: 'not optional',
    intro:
      'LPG is safe when it is handled properly. These five habits prevent most gas accidents at home and at work. Read our full guide for the details.',
  },

  articles: {
    eyebrow: 'Guides & articles',
    title: 'Learn more about',
    highlight: 'cooking gas',
    intro: 'Practical, plain-English guides to help you choose, use and look after LPG safely.',
  },

  refill: {
    eyebrow: 'How a safe refill works',
    title: 'Four steps,',
    highlight: 'no shortcuts',
    intro:
      'Every cylinder that comes through our doors follows the same simple process, so you can be confident about what you take home.',
    steps: [
      {
        title: 'Inspect',
        text: 'We check the valve, seal, collar markings and cylinder body before anything else.',
      },
      {
        title: 'Weigh empty',
        text: 'The cylinder is weighed and compared with the tare weight stamped on the collar.',
      },
      {
        title: 'Fill & weigh',
        text: 'We fill with LPG and weigh again on a calibrated scale to confirm the correct amount.',
      },
      {
        title: 'Leak test',
        text: 'The valve is leak-tested before your cylinder is handed back to you.',
      },
    ] satisfies Step[],
  },

  cta: {
    title: 'Ready to switch to clean, reliable gas?',
    text: 'Talk to our Hatfield team about refills, cylinders, appliances or installation. We are happy to answer your questions.',
  },
};
