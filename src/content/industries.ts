import type { Industry } from '@/types';
import { images } from './images';

/** INDUSTRIES / CUSTOMERS WE SERVE (used on Home and /industries) */
export const industries: Industry[] = [
  {
    slug: 'homes',
    name: 'Homes',
    icon: 'home',
    summary:
      'Clean, reliable cooking gas for families across Harare, from studio flats to large family homes.',
    howLpgHelps: [
      'Cook during power cuts: your stove works whether ZESA is on or off.',
      'Less smoke and soot than firewood, charcoal or paraffin, which means healthier air for children and older family members.',
      'Instant heat that you can turn up or down, so meals cook faster and more evenly.',
      'A 9kg or 14kg cylinder with a two- or four-plate stove covers most family cooking.',
    ],
    recommended: '9kg or 14kg cylinder · two- or four-plate stove · leak detector',
    image: images.industryHomes,
  },
  {
    slug: 'restaurants-and-takeaways',
    name: 'Restaurants & takeaways',
    icon: 'utensils',
    summary:
      'High-heat, dependable gas for busy kitchens where every minute counts during the lunch and dinner rush.',
    howLpgHelps: [
      'Strong, steady flames for frying, grilling and wok cooking, with immediate control.',
      'No downtime when the power goes off, so you can keep serving customers.',
      'Multi-cylinder setups with changeover valves mean you never run out mid-service.',
      'Professional installation and regular safety checks protect your staff and your premises.',
    ],
    recommended: '48kg cylinders · manifold and changeover valve · commercial burners',
    image: images.industryRestaurants,
  },
  {
    slug: 'hotels-and-lodges',
    name: 'Hotels & lodges',
    icon: 'hotel',
    summary:
      'Gas for kitchens, hot water and outdoor cooking, helping you deliver a comfortable stay for every guest.',
    howLpgHelps: [
      'Reliable cooking for breakfast service, restaurants and functions.',
      'Gas water heating gives guests hot showers, even during load-shedding.',
      'Clean-burning fuel for outdoor braais, patio heaters and fire features.',
      'Planned refills and maintenance keep operations running smoothly.',
    ],
    recommended: '48kg cylinders · gas water heaters · scheduled maintenance',
    image: images.industryHotels,
  },
  {
    slug: 'schools-and-institutions',
    name: 'Schools & institutions',
    icon: 'school',
    summary:
      'Safe, large-scale cooking for boarding schools, colleges, hospitals, churches and other institutions.',
    howLpgHelps: [
      'Large boiling rings heat big pots of sadza, rice and relish quickly and evenly.',
      'Cleaner kitchens than wood-fired cooking, with less smoke for kitchen staff.',
      'Properly designed installations with outdoor cylinder cages keep students and staff safe.',
      'Predictable usage makes it easier to plan refills and budgets each term.',
    ],
    recommended: '48kg cylinders · boiling rings · outdoor cylinder cage · fire safety kit',
    image: images.industrySchools,
  },
  {
    slug: 'businesses',
    name: 'Businesses',
    icon: 'store',
    summary:
      'Gas for food vendors, bakeries, salons, offices and workshops that need dependable energy every day.',
    howLpgHelps: [
      'Keep your business running when the electricity supply is unreliable.',
      'Portable cylinders work well for mobile food vendors and market stalls.',
      'Staff-room stoves and kettles with proper safety equipment.',
      'Advice on the right cylinder size so you are not refilling more often than you need to.',
    ],
    recommended: '9kg to 48kg cylinders · regulators matched to your equipment',
    image: images.industryBusinesses,
  },
  {
    slug: 'farms',
    name: 'Farms',
    icon: 'tractor',
    summary:
      'Practical gas solutions for poultry, water heating and farm kitchens in and around Harare.',
    howLpgHelps: [
      'Gas brooders keep day-old chicks warm with steady, adjustable heat.',
      'Hot water for cleaning, dairy and farmhouse use without relying on the grid.',
      'Cooking for farm workers without cutting down trees for firewood.',
      'Durable regulators and hoses suited to outdoor and farm conditions.',
    ],
    recommended: '19kg or 48kg cylinders · brooder regulators · outdoor-rated hoses',
    image: images.industryFarms,
  },
];
