import type { ImageSlotData } from '@/types';

/**
 * IMAGE SLOTS: every photo on the site is listed here.
 *
 * To add a real photo: export it as a compressed .webp at the size shown,
 * save it at the `src` path inside /public, and rebuild. Until the file exists,
 * the site shows a branded placeholder (never a broken image).
 * Full list with search terms: public/images/README.md
 */
export const images = {
  heroMain: {
    src: '/images/hero/powerflame-team-member-cutout.webp',
    alt: 'A smiling Powerflame team member in a navy branded polo shirt with his arms crossed',
    width: 1312,
    height: 1199,
    placeholderLabel: 'Powerflame team',
  },
  aboutStory: {
    src: '/images/about/powerflame-team-harare.webp',
    alt: 'The Powerflame Energy team at our Hatfield, Harare premises',
    width: 1200,
    height: 900,
    placeholderLabel: 'Our Harare team',
  },
  aboutSafety: {
    src: '/images/about/cylinder-safety-inspection.webp',
    alt: 'A technician inspecting an LPG cylinder valve before refilling',
    width: 1200,
    height: 900,
    placeholderLabel: 'Cylinder inspection',
  },
  safetyGuide: {
    src: '/images/services/gas-safety-leak-test.webp',
    alt: 'Soapy water being brushed onto a gas regulator connection to check for leaks',
    width: 1200,
    height: 900,
    placeholderLabel: 'Leak test',
  },
  serviceRefills: {
    src: '/images/services/lpg-gas-refills.webp',
    alt: 'LPG cylinders being weighed and refilled at a filling station',
    width: 1200,
    height: 800,
    placeholderLabel: 'Gas refills',
  },
  serviceCylinders: {
    src: '/images/services/gas-cylinders-and-accessories.webp',
    alt: 'A row of LPG gas cylinders in different sizes with regulators and hoses',
    width: 1200,
    height: 800,
    placeholderLabel: 'Cylinders & accessories',
  },
  serviceAppliances: {
    src: '/images/services/gas-appliances-and-safety-equipment.webp',
    alt: 'A modern gas stove with a gas leak detector and fire extinguisher nearby',
    width: 1200,
    height: 800,
    placeholderLabel: 'Appliances & safety',
  },
  serviceInstallation: {
    src: '/images/services/gas-installation-and-repairs.webp',
    alt: 'A trained gas technician installing a gas stove connection',
    width: 1200,
    height: 800,
    placeholderLabel: 'Installation & repairs',
  },
  industryHomes: {
    src: '/images/industries/homes.webp',
    alt: 'A family cooking together on a gas stove at home',
    width: 800,
    height: 600,
    placeholderLabel: 'Homes',
  },
  industryRestaurants: {
    src: '/images/industries/restaurants-and-takeaways.webp',
    alt: 'A chef cooking over high gas flames in a busy restaurant kitchen',
    width: 800,
    height: 600,
    placeholderLabel: 'Restaurants',
  },
  industryHotels: {
    src: '/images/industries/hotels-and-lodges.webp',
    alt: 'A lodge kitchen preparing breakfast for guests',
    width: 800,
    height: 600,
    placeholderLabel: 'Hotels & lodges',
  },
  industrySchools: {
    src: '/images/industries/schools-and-institutions.webp',
    alt: 'Large cooking pots on gas burners in an institutional kitchen',
    width: 800,
    height: 600,
    placeholderLabel: 'Schools',
  },
  industryBusinesses: {
    src: '/images/industries/businesses.webp',
    alt: 'A small food business serving customers using gas-powered equipment',
    width: 800,
    height: 600,
    placeholderLabel: 'Businesses',
  },
  industryFarms: {
    src: '/images/industries/farms.webp',
    alt: 'Young chicks kept warm under a gas brooder on a poultry farm',
    width: 800,
    height: 600,
    placeholderLabel: 'Farms',
  },
  articleSwitching: {
    src: '/images/articles/lpg-vs-firewood-and-paraffin.webp',
    alt: 'A pot cooking on a clean gas flame compared with a smoky wood fire',
    width: 1200,
    height: 630,
    placeholderLabel: 'LPG vs firewood',
  },
  articleLeaks: {
    src: '/images/articles/check-gas-cylinder-for-leaks.webp',
    alt: 'Soapy water bubbles forming on a gas cylinder valve during a leak test',
    width: 1200,
    height: 630,
    placeholderLabel: 'Leak check',
  },
  articleSizes: {
    src: '/images/articles/choosing-gas-cylinder-size.webp',
    alt: 'Gas cylinders of different sizes standing side by side',
    width: 1200,
    height: 630,
    placeholderLabel: 'Cylinder sizes',
  },
} satisfies Record<string, ImageSlotData>;

export type ImageKey = keyof typeof images;

/**
 * VIDEO SLOTS: optional. If the files are missing the site falls back to the
 * poster image, then to the animated canvas flame, so it always looks complete.
 */
export const videos = {
  hero: {
    mp4: '/videos/hero.mp4',
    webm: '/videos/hero.webm',
    poster: '/videos/hero-poster.webp',
    label: 'Slow-motion blue gas flame being lit on a stove',
  },
  safeRefill: {
    mp4: '/videos/safe-refill.mp4',
    webm: '/videos/safe-refill.webm',
    poster: '/videos/safe-refill-poster.webp',
    label: 'A gas cylinder being inspected, weighed and refilled safely',
  },
} as const;

export type VideoKey = keyof typeof videos;
