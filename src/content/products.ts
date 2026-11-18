import type { IconName } from '@/types';

export interface Product {
  name: string;
  /** One short line under the name */
  detail: string;
  /**
   * Product photo inside /public. Best as a transparent cut-out (.webp or .png),
   * square, about 800×800 px. Until the file exists, a branded tile with `icon` shows.
   */
  image: string;
  icon: IconName;
}

/** PRODUCT SHOWCASE (home page, under the hero). Order here = order on screen. */
export const productShowcase = {
  eyebrow: 'Our products',
  title: 'Cylinders, appliances',
  highlight: '& safety gear',
  intro: 'Ask about stock and prices on WhatsApp: tap Enquire on any product.',
  items: [
    {
      name: '9kg gas cylinder',
      detail: 'Everyday cooking for smaller households',
      image: '/images/products/gas-cylinder-9kg.webp',
      icon: 'cylinder',
    },
    {
      name: '14kg gas cylinder',
      detail: 'Longer-lasting supply for family kitchens',
      image: '/images/products/gas-cylinder-14kg.webp',
      icon: 'cylinder',
    },
    {
      name: '19kg gas cylinder',
      detail: 'For larger homes and small businesses',
      image: '/images/products/gas-cylinder-19kg.webp',
      icon: 'cylinder',
    },
    {
      name: '48kg gas cylinder',
      detail: 'For restaurants, schools and lodges',
      image: '/images/products/gas-cylinder-48kg.webp',
      icon: 'cylinder',
    },
    {
      name: 'Gas regulator',
      detail: 'Keeps the gas flowing at a steady, safe pressure',
      image: '/images/products/gas-regulator.webp',
      icon: 'gauge',
    },
    {
      name: 'Gas hose & clamps',
      detail: 'LPG hose to connect your cylinder safely',
      image: '/images/products/gas-hose.webp',
      icon: 'cable',
    },
    {
      name: 'Gas burner',
      detail: 'Portable cooking wherever you need it',
      image: '/images/products/gas-burner.webp',
      icon: 'flame',
    },
    {
      name: 'Gas stove',
      detail: 'Two- and four-plate stoves for the home',
      image: '/images/products/gas-stove.webp',
      icon: 'cooking-pot',
    },
    {
      name: 'Gas leak detector',
      detail: 'Early warning if gas escapes',
      image: '/images/products/gas-leak-detector.webp',
      icon: 'radar',
    },
    {
      name: 'Fire extinguisher',
      detail: 'Kitchen fire safety you can rely on',
      image: '/images/products/fire-extinguisher.webp',
      icon: 'fire-extinguisher',
    },
  ] satisfies Product[],
};
