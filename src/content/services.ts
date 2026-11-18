import type { Service } from '@/types';
import { images } from './images';

/**
 * SERVICES: one entry per service page (/services/<slug>).
 * Edit the wording here; the layout lives in src/app/services/[slug]/page.tsx.
 */
export const services: Service[] = [
  {
    slug: 'lpg-gas-refills',
    title: 'LPG Gas Refills',
    shortTitle: 'Gas refills',
    icon: 'flame',
    summary:
      'Accurately weighed LPG refills for 9kg, 14kg, 19kg and 48kg cylinders, with a safety check on every cylinder before it is filled.',
    caption: '9kg · 14kg · 19kg · 48kg',
    tag: 'Core service',
    seo: {
      title: 'LPG Gas Refills in Harare',
      description:
        'Accurately weighed LPG gas refills in Hatfield, Harare. Every cylinder is safety-checked before filling. 9kg, 14kg, 19kg and 48kg refills for every kitchen.',
    },
    hero: {
      eyebrow: 'Gas refills Harare',
      headline: 'Full, honest gas refills',
      highlight: 'every single time',
      intro:
        'Bring your cylinder to Powerflame Energy in Hatfield and leave with a refill that is weighed, checked and sealed properly. No guesswork, no short measures, and no shortcuts on safety.',
    },
    overview: [
      'A gas refill should be simple: you pay for a certain amount of LPG and you get exactly that amount. Sadly, many people in Harare have had the experience of a "full" cylinder that runs out far too soon. At Powerflame Energy we weigh every refill on a calibrated scale, so the gas you pay for is the gas you take home.',
      'Before any cylinder is filled, our team checks it. We look at the valve, the seal, the collar markings and the body of the cylinder for rust, dents or damage. If a cylinder is not safe to fill, we will tell you why and explain your options. We would rather lose a sale than fill a cylinder that could put your family at risk.',
      'We refill the common household and commercial sizes (9kg, 14kg, 19kg and 48kg) for homes, restaurants, schools, lodges, farms and businesses across Harare. If you are not sure which size you have or need, our team is happy to help.',
    ],
    includes: [
      {
        title: 'Pre-fill safety inspection',
        text: 'We check the valve, O-ring seal, collar markings and cylinder body before filling. Damaged or expired cylinders are not filled.',
      },
      {
        title: 'Calibrated weighing',
        text: 'Each cylinder is weighed empty and full, so the amount of LPG matches the size you paid for.',
      },
      {
        title: 'Post-fill leak test',
        text: 'After filling, the valve and fittings are leak-tested before the cylinder is handed back to you.',
      },
      {
        title: 'Friendly safety advice',
        text: 'Ask us anything about connecting, storing or using your cylinder. We explain things clearly, without jargon.',
      },
    ],
    benefits: [
      {
        icon: 'scale',
        title: 'Accurately weighed',
        text: 'Every refill is weighed on a calibrated scale. You get the full amount of gas you pay for.',
      },
      {
        icon: 'shield-check',
        title: 'Safety-checked cylinders',
        text: 'Each cylinder is inspected before filling and leak-tested afterwards.',
      },
      {
        icon: 'timer',
        title: 'Quick turnaround',
        text: 'Our process is simple and organised, so you are not left waiting longer than necessary.',
      },
      {
        icon: 'map-pin',
        title: 'Local to Hatfield',
        text: 'Conveniently located on Masotsha Ndlovu Way in Hatfield, Harare.',
      },
    ],
    whoFor: [
      {
        label: 'Households',
        text: 'Regular 9kg and 14kg refills for everyday family cooking.',
        href: '/industries#homes',
      },
      {
        label: 'Restaurants & takeaways',
        text: '19kg and 48kg refills for busy commercial kitchens.',
        href: '/industries#restaurants-and-takeaways',
      },
      {
        label: 'Schools & institutions',
        text: 'Reliable refills for large-scale catering kitchens.',
        href: '/industries#schools-and-institutions',
      },
      {
        label: 'Farms',
        text: 'Gas for brooders, water heating and staff kitchens.',
        href: '/industries#farms',
      },
    ],
    steps: [
      {
        title: 'Bring your cylinder',
        text: 'Visit us in Hatfield with your empty cylinder. Let us know the size and whether you have any concerns about it.',
      },
      {
        title: 'We inspect it',
        text: 'Our team checks the valve, seal and body of the cylinder to make sure it is safe to fill.',
      },
      {
        title: 'We fill and weigh it',
        text: 'The cylinder is filled and weighed on a calibrated scale to confirm the correct amount of LPG.',
      },
      {
        title: 'Leak test and hand-over',
        text: 'We leak-test the valve and hand your cylinder back, ready to connect safely at home or at work.',
      },
    ],
    faqIds: ['cylinder-full', 'cylinder-last', 'refill-other-brand', 'smell-rotten-eggs'],
    image: images.serviceRefills,
    relatedArticles: [
      'choosing-the-right-gas-cylinder-size',
      'how-to-check-your-gas-cylinder-for-leaks',
    ],
  },
  {
    slug: 'gas-cylinders-and-accessories',
    title: 'Gas Cylinders & Accessories',
    shortTitle: 'Cylinders & accessories',
    icon: 'cylinder',
    summary:
      'New LPG cylinders in popular sizes, plus regulators, hoses, burners, pipes and fittings that are right for your appliance.',
    caption: 'Cylinders · Regulators · Hoses',
    tag: 'Starter kits',
    seo: {
      title: 'Gas Cylinders & Accessories in Zimbabwe',
      description:
        'Buy LPG gas cylinders, regulators, hoses, burners and fittings from Powerflame Energy in Hatfield, Harare. Certified accessories and honest sizing advice.',
    },
    hero: {
      eyebrow: 'Gas cylinders Zimbabwe',
      headline: 'The right cylinder and parts,',
      highlight: 'set up properly',
      intro:
        'Whether you are switching to gas for the first time or replacing a worn regulator, we supply the cylinders and accessories you need, and we take the time to make sure they match your appliance.',
    },
    overview: [
      'A safe gas setup is only as good as its weakest part. A brand-new stove connected with a cracked hose or the wrong regulator is a risk. That is why Powerflame Energy supplies complete, matching setups: the cylinder, the regulator, the hose, the clamps and the fittings, all chosen to work together.',
      'We stock LPG cylinders in the sizes most people in Zimbabwe use: 9kg for most homes, 14kg and 19kg for larger families and small businesses, and 48kg for restaurants, schools and other high-use kitchens. We will help you choose a size based on how much you cook, how often you want to refill and where the cylinder will be kept.',
      'Our accessories come from reputable suppliers and are sold for the purpose they were designed for. If you are not sure whether your existing regulator or hose is still safe, bring it in and we will take a look for you.',
    ],
    includes: [
      {
        title: 'LPG cylinders',
        text: '9kg, 14kg, 19kg and 48kg cylinders for household and commercial use.',
      },
      {
        title: 'Regulators',
        text: 'Low-pressure and high-pressure regulators matched to your appliance and cylinder valve type.',
      },
      {
        title: 'Hoses, pipes & clamps',
        text: 'LPG-rated hoses of the correct length and diameter, with proper clamps and fittings.',
      },
      {
        title: 'Burners & fittings',
        text: 'Single and multi-burner tops, cooker rings, adaptors, connectors and valves.',
      },
    ],
    benefits: [
      {
        icon: 'badge-check',
        title: 'Certified accessories',
        text: 'Regulators, hoses and fittings from reputable suppliers, made for LPG use.',
      },
      {
        icon: 'settings',
        title: 'Matched to your appliance',
        text: 'We check that every part fits and works together before you leave.',
      },
      {
        icon: 'lightbulb',
        title: 'Honest sizing advice',
        text: 'We recommend the size that suits your cooking, not the most expensive one.',
      },
      {
        icon: 'wrench',
        title: 'Installation available',
        text: 'Prefer not to connect it yourself? Our trained technicians can set it up for you.',
      },
    ],
    whoFor: [
      {
        label: 'First-time gas users',
        text: 'Complete starter setups for families switching from firewood or paraffin.',
        href: '/articles/lpg-vs-firewood-and-paraffin',
      },
      {
        label: 'Homes upgrading their setup',
        text: 'Replacement regulators, hoses and larger cylinders.',
        href: '/industries#homes',
      },
      {
        label: 'Food businesses',
        text: '48kg cylinders, high-pressure regulators and commercial burners.',
        href: '/industries#restaurants-and-takeaways',
      },
      {
        label: 'Lodges & institutions',
        text: 'Multi-cylinder setups for kitchens and water heating.',
        href: '/industries#hotels-and-lodges',
      },
    ],
    steps: [
      {
        title: 'Tell us how you cook',
        text: 'How many people, how often, and which appliances. This helps us recommend the right cylinder and parts.',
      },
      {
        title: 'Choose your setup',
        text: 'We explain the options clearly and help you choose a cylinder size and accessories that work together.',
      },
      {
        title: 'We check the fit',
        text: 'Regulator, hose and fittings are matched and checked so everything connects securely.',
      },
      {
        title: 'Connect safely',
        text: 'Connect it yourself with our guidance, or book our technicians to install it for you.',
      },
    ],
    faqIds: ['which-size', 'replace-hose-regulator', 'accessories-certified', 'cylinder-indoors'],
    image: images.serviceCylinders,
    relatedArticles: ['choosing-the-right-gas-cylinder-size', 'lpg-vs-firewood-and-paraffin'],
  },
  {
    slug: 'gas-appliances-and-safety-equipment',
    title: 'Gas Appliances & Safety Equipment',
    shortTitle: 'Appliances & safety',
    icon: 'shield-check',
    summary:
      'Gas stoves, cookers and burners, plus leak detectors, fire extinguishers and fire blankets to keep your kitchen safe.',
    caption: 'Stoves · Detectors · Extinguishers',
    tag: 'Safety first',
    seo: {
      title: 'Gas Stoves, Appliances & Safety Equipment',
      description:
        'Gas stoves, cookers, burners, gas leak detectors and fire safety equipment from Powerflame Energy in Harare, with honest advice on the right appliance.',
    },
    hero: {
      eyebrow: 'Gas appliances & safety',
      headline: 'Cook with confidence,',
      highlight: 'protect what matters',
      intro:
        'From a two-plate table-top stove to a full commercial range, we supply gas appliances that suit the way you cook, along with the safety equipment every gas kitchen should have.',
    },
    overview: [
      'Choosing a gas appliance is about more than looks. The right stove depends on how many people you cook for, the space you have, and how you will connect it to your cylinder. Our team will talk you through the practical details, such as burner sizes, ignition type and whether a model has a flame-failure safety device, so you can make a confident choice.',
      'Every kitchen that uses gas should also have basic safety equipment. A gas leak detector gives an early warning if LPG collects near the floor. A dry powder fire extinguisher and a fire blanket mean a small kitchen fire can be dealt with quickly. These items are not expensive, and they can make all the difference in an emergency.',
      'We only recommend equipment we would be comfortable using in our own homes, and we are always happy to explain how each item works before you buy it.',
    ],
    includes: [
      {
        title: 'Gas stoves & cookers',
        text: 'Table-top stoves, freestanding cookers and combination gas-electric models for homes.',
      },
      {
        title: 'Commercial burners',
        text: 'High-output burners and boiling rings for restaurants, schools and catering.',
      },
      {
        title: 'Gas leak detectors',
        text: 'Detectors that sound an alarm if LPG builds up near the floor of your kitchen.',
      },
      {
        title: 'Fire safety equipment',
        text: 'Dry powder fire extinguishers and fire blankets suitable for kitchens.',
      },
    ],
    benefits: [
      {
        icon: 'shield-check',
        title: 'Safety built in',
        text: 'We point out safety features like flame-failure devices and auto-ignition.',
      },
      {
        icon: 'fire-extinguisher',
        title: 'Be ready for emergencies',
        text: 'Leak detectors, extinguishers and fire blankets in one place.',
      },
      {
        icon: 'lightbulb',
        title: 'Clear, practical advice',
        text: 'We explain what each appliance does and help you avoid buying the wrong one.',
      },
      {
        icon: 'wrench',
        title: 'Professional installation',
        text: 'Have your new stove connected and tested by a trained technician.',
      },
    ],
    whoFor: [
      {
        label: 'Homes',
        text: 'Two-plate to four-plate stoves and full cookers for family kitchens.',
        href: '/industries#homes',
      },
      {
        label: 'Restaurants & takeaways',
        text: 'High-output burners plus the safety gear commercial kitchens need.',
        href: '/industries#restaurants-and-takeaways',
      },
      {
        label: 'Schools & institutions',
        text: 'Boiling rings for large pots, with fire safety equipment for staff kitchens.',
        href: '/industries#schools-and-institutions',
      },
      {
        label: 'Offices & small businesses',
        text: 'Staff-room stoves, leak detectors and extinguishers.',
        href: '/industries#businesses',
      },
    ],
    steps: [
      {
        title: 'Share your needs',
        text: 'Tell us what you cook, for how many people and how much space you have.',
      },
      {
        title: 'Compare options',
        text: 'We show you suitable appliances and explain their safety features clearly.',
      },
      {
        title: 'Add safety equipment',
        text: 'We recommend the right leak detector and fire safety items for your kitchen.',
      },
      {
        title: 'Install and test',
        text: 'Our technicians can connect the appliance, test for leaks and show you how to use it safely.',
      },
    ],
    faqIds: ['install-stoves', 'indoor-safe', 'smell-gas', 'accessories-certified'],
    image: images.serviceAppliances,
    relatedArticles: ['how-to-check-your-gas-cylinder-for-leaks', 'lpg-vs-firewood-and-paraffin'],
  },
  {
    slug: 'gas-installation-and-repairs',
    title: 'Gas Installation & Repairs',
    shortTitle: 'Installation & repairs',
    icon: 'wrench',
    summary:
      'Trained technicians who install, maintain and repair gas stoves, piping and systems for homes and businesses in Harare.',
    caption: 'Install · Maintain · Repair',
    tag: 'Trained technicians',
    seo: {
      title: 'Gas Installation & Gas Stove Repairs Harare',
      description:
        'Gas installation in Harare by trained technicians: stove installation, piping, cylinder cages, leak testing, maintenance and repairs for homes and businesses.',
    },
    hero: {
      eyebrow: 'Gas installation Harare',
      headline: 'Gas installation done',
      highlight: 'right the first time',
      intro:
        'A gas system is only safe if it is installed correctly. Our trained technicians install, maintain and repair gas stoves, cylinders, piping and appliances for homes and businesses across Harare.',
    },
    overview: [
      'Many gas problems start with a rushed or improvised installation: a hose that is too long, a cylinder squeezed into a cupboard with no ventilation, or a connection that was never leak-tested. Our technicians take the time to do it properly, and they explain what they are doing as they go.',
      'For homes, we install gas stoves and cookers, position cylinders safely, fit regulators and hoses, and test every connection. For restaurants, schools, lodges and other businesses we can plan and install multi-cylinder setups, fixed piping, changeover valves and outdoor cylinder cages.',
      'We also maintain and repair existing systems. If your burner flame is yellow and sooty, the stove is hard to light, or you think you smell gas, get in touch. We will find the cause and fix it safely. If you smell gas right now, follow the steps in our gas safety guide first.',
    ],
    includes: [
      {
        title: 'Gas stove installation',
        text: 'Connecting stoves, cookers and ovens to the cylinder with the correct regulator and hose, then testing.',
      },
      {
        title: 'Piping & multi-cylinder systems',
        text: 'Fixed piping, manifolds and changeover valves for commercial and institutional kitchens.',
      },
      {
        title: 'Maintenance & safety checks',
        text: 'Inspecting hoses, regulators and connections, cleaning burners and leak-testing the whole system.',
      },
      {
        title: 'Repairs',
        text: 'Fixing ignition problems, poor flames, faulty valves and leaking connections.',
      },
    ],
    benefits: [
      {
        icon: 'hard-hat',
        title: 'Trained technicians',
        text: 'Our team is trained in safe LPG installation and leak-testing procedures.',
      },
      {
        icon: 'clipboard-check',
        title: 'Every connection tested',
        text: 'We leak-test the full system before we leave, and show you the result.',
      },
      {
        icon: 'eye',
        title: 'Clear explanations',
        text: 'We explain what we found, what we fixed and how to keep it safe.',
      },
      {
        icon: 'building',
        title: 'Homes and businesses',
        text: 'From a single stove to a commercial kitchen with several cylinders.',
      },
    ],
    whoFor: [
      {
        label: 'Homeowners & tenants',
        text: 'Safe stove installation and regular check-ups for your home setup.',
        href: '/industries#homes',
      },
      {
        label: 'Restaurants & takeaways',
        text: 'Commercial piping, manifolds and high-pressure burner installations.',
        href: '/industries#restaurants-and-takeaways',
      },
      {
        label: 'Hotels & lodges',
        text: 'Kitchen and water-heating systems with planned maintenance.',
        href: '/industries#hotels-and-lodges',
      },
      {
        label: 'Schools & institutions',
        text: 'Large kitchen installations designed around safety and easy refilling.',
        href: '/industries#schools-and-institutions',
      },
    ],
    steps: [
      {
        title: 'Get in touch',
        text: 'Call or WhatsApp us and tell us what needs to be installed or what is not working.',
      },
      {
        title: 'Site assessment',
        text: 'We look at your space, ventilation and appliances and recommend a safe setup.',
      },
      {
        title: 'Installation or repair',
        text: 'Our technicians carry out the work neatly, using the correct LPG-rated parts.',
      },
      {
        title: 'Test and hand-over',
        text: 'We leak-test everything, show you how to use it safely and answer your questions.',
      },
    ],
    faqIds: ['install-stoves', 'gas-geyser', 'replace-hose-regulator', 'smell-gas'],
    image: images.serviceInstallation,
    relatedArticles: [
      'how-to-check-your-gas-cylinder-for-leaks',
      'choosing-the-right-gas-cylinder-size',
    ],
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);
