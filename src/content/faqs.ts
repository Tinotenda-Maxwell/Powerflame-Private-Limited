import type { Faq } from '@/types';
import { site } from '@/config/site';

/**
 * FREQUENTLY ASKED QUESTIONS
 * Answers are plain text so they can also be used in Google's FAQ structured data.
 * Service pages pick questions by `id` (see `faqIds` in services.ts).
 */
export const faqs: Faq[] = [
  {
    id: 'indoor-safe',
    category: 'Safety',
    question: 'Is LPG safe for indoor cooking?',
    answer:
      'Yes. LPG is one of the cleanest and safest cooking fuels when it is installed and used correctly. It burns with a clean blue flame and produces far less smoke than firewood, charcoal or paraffin, which is better for your lungs and your walls. Keep the kitchen ventilated, use a certified regulator and hose, keep the cylinder upright, and close the cylinder valve when you finish cooking.',
    link: { label: 'Read our full gas safety guide', href: '/gas-safety' },
  },
  {
    id: 'smell-gas',
    category: 'Safety',
    question: 'What should I do if I smell gas?',
    answer:
      'Stay calm. Do not switch any lights or electrical appliances on or off, and do not light a match or a cigarette. Turn off the cylinder valve if it is safe to reach it, open doors and windows, and get everyone outside. Once you are outside, call us or the fire brigade. Do not go back inside until the smell has cleared and the leak has been found and fixed.',
    link: { label: 'What to do if you smell gas', href: '/gas-safety#smell-gas' },
  },
  {
    id: 'smell-rotten-eggs',
    category: 'Safety',
    question: 'Why does cooking gas smell like rotten eggs?',
    answer:
      'LPG has no smell of its own. Suppliers add a strong-smelling chemical called an odorant, usually ethyl mercaptan, so that even a small leak can be noticed quickly. If you notice that smell when your stove is off, treat it as a leak and follow our safety steps straight away.',
    link: {
      label: 'How to check for gas leaks',
      href: '/articles/how-to-check-your-gas-cylinder-for-leaks',
    },
  },
  {
    id: 'cylinder-indoors',
    category: 'Safety',
    question: 'Can I keep my gas cylinder inside the house?',
    answer:
      'The safest place for a cylinder is outside in a ventilated, shaded spot or a purpose-made cylinder cage, with the hose passing through the wall to the stove. Many homes do keep a small cylinder in the kitchen. If you do, keep it upright, in a well-ventilated area, away from heat and drains, and never in a basement or below ground level. LPG is heavier than air, so leaked gas collects low down.',
    link: { label: 'Cylinder storage tips', href: '/gas-safety#storage' },
  },
  {
    id: 'cylinder-full',
    category: 'Refills & cylinders',
    question: 'How do I know my cylinder is really full?',
    answer:
      'Weigh it. Every cylinder has a tare weight (its empty weight) stamped on the collar. A full cylinder should weigh the tare weight plus the gas weight, so a 9kg cylinder with a tare of 10kg should weigh about 19kg when full. At Powerflame Energy we weigh every refill on a calibrated scale, and you are welcome to watch.',
  },
  {
    id: 'which-size',
    category: 'Refills & cylinders',
    question: 'Which cylinder size is right for my home?',
    answer:
      'For most families, a 9kg cylinder is a good balance between weight and how long it lasts. Larger households that cook every meal on gas, or homes that also use a gas heater or geyser, often prefer a 14kg or 19kg cylinder so they refill less often. Restaurants, schools and lodges usually use 48kg cylinders. Tell us how you cook and we will recommend the right size.',
    link: {
      label: 'Our guide to choosing a cylinder size',
      href: '/articles/choosing-the-right-gas-cylinder-size',
    },
  },
  {
    id: 'cylinder-last',
    category: 'Refills & cylinders',
    question: 'How long does a 9kg gas cylinder last?',
    answer:
      'It depends on how much you cook, the size of your burners and whether you use gas for anything else. As a rough guide, a family cooking two meals a day on a two- or four-plate stove often gets three to six weeks from a 9kg cylinder. Slow-cooked foods like beans and bones use more gas. Using lids on pots and turning the flame down once food boils helps your gas last longer.',
  },
  {
    id: 'refill-other-brand',
    category: 'Refills & cylinders',
    question: 'Can you refill a cylinder that I bought somewhere else?',
    answer:
      'In most cases, yes. We refill standard LPG cylinders as long as they pass our safety inspection. We will not fill a cylinder that is rusted, dented, leaking, has a damaged valve or is past its test date. If your cylinder fails the check, we will explain why and help you find a safe replacement.',
  },
  {
    id: 'replace-hose-regulator',
    category: 'Installation & appliances',
    question: 'How often should I replace my gas hose and regulator?',
    answer:
      'Check your hose every month for cracks, stiffness or soft spots, and replace it straight away if you find any damage. Even if it looks fine, most manufacturers recommend replacing LPG hoses every two to five years; many hoses have a date printed on them. Regulators generally last longer but should be replaced if they are damaged, leak, or your flame becomes weak or uneven. We can inspect yours for you.',
    link: { label: 'Hose and regulator care', href: '/gas-safety#hose-regulator' },
  },
  {
    id: 'install-stoves',
    category: 'Installation & appliances',
    question: 'Do you install gas stoves?',
    answer:
      'Yes. Our trained technicians install gas stoves, cookers and ovens for homes and businesses in Harare. We fit the correct regulator and hose, position the cylinder safely, leak-test every connection and show you how to use the stove safely. We also install piping and multi-cylinder systems for commercial kitchens.',
    link: { label: 'Gas installation and repairs', href: '/services/gas-installation-and-repairs' },
  },
  {
    id: 'gas-geyser',
    category: 'Installation & appliances',
    question: 'Can I use LPG for water heating?',
    answer:
      'Yes. Gas water heaters (gas geysers) heat water quickly and keep working during power cuts. They must be installed with proper ventilation and a flue where required, so this is a job for a trained technician, not a DIY project. Talk to us about the right setup for your home, lodge or business.',
  },
  {
    id: 'accessories-certified',
    category: 'Installation & appliances',
    question: 'Are your regulators, hoses and accessories certified?',
    answer:
      'We source our regulators, hoses, valves and fittings from reputable suppliers, and every item we sell is made for LPG use. We will always tell you what a product is designed for and will not sell you a part that is not right for your appliance or cylinder.',
  },
  {
    id: 'businesses',
    category: 'About us',
    question: 'Do you supply restaurants, schools and other businesses?',
    answer:
      'Yes. We work with restaurants and takeaways, hotels and lodges, schools and institutions, farms and other businesses. We can help you choose cylinder sizes, plan a safe multi-cylinder setup and arrange regular refills. Contact us to discuss what your business needs.',
    link: { label: 'Industries we serve', href: '/industries' },
  },
  {
    id: 'switch-from-firewood',
    category: 'About us',
    question: 'Is LPG better than firewood and paraffin?',
    answer:
      'For most kitchens, yes. LPG lights instantly, gives you precise heat control, and burns far more cleanly than firewood, charcoal or paraffin, so there is less smoke in your home and less soot on your pots. It also works during power cuts. The upfront cost of a cylinder and stove is quickly balanced by faster, more efficient cooking.',
    link: { label: 'LPG vs firewood and paraffin', href: '/articles/lpg-vs-firewood-and-paraffin' },
  },
  {
    id: 'location-hours',
    category: 'About us',
    question: 'Where are you located and when are you open?',
    answer: `We are at ${site.address.street}, ${site.address.suburb}, ${site.address.city}. Our hours are ${site.hours.display}. You can also reach us by phone, WhatsApp or email during these hours.`,
    link: { label: 'Contact details and map', href: '/contact' },
  },
];

export const getFaqs = (ids: string[]): Faq[] =>
  ids.map((id) => faqs.find((faq) => faq.id === id)).filter((faq): faq is Faq => Boolean(faq));

export const faqCategories: Faq['category'][] = [
  'Safety',
  'Refills & cylinders',
  'Installation & appliances',
  'About us',
];
