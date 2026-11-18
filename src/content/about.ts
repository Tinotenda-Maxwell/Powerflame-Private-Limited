import type { Benefit } from '@/types';
import { site } from '@/config/site';

/** ABOUT PAGE COPY */
export const aboutContent = {
  hero: {
    eyebrow: 'About Powerflame Energy',
    headline: 'Proudly Zimbabwean,',
    highlight: 'powered by trust',
    intro: `${site.legalName} is a new LPG company based in ${site.address.suburb}, ${site.address.city}. We exist to make cooking gas safer, simpler and more honest for the families and businesses we serve.`,
  },

  story: {
    eyebrow: 'Our story',
    title: 'Why we started',
    highlight: 'Powerflame',
    paragraphs: [
      'More and more Harare households are moving away from firewood, charcoal and paraffin, and many businesses rely on gas to keep cooking through power cuts. LPG is a cleaner, faster and more convenient way to cook. But too many people still worry about short-filled cylinders, worn-out hoses and installations nobody ever tested.',
      `We founded Powerflame Energy to do things differently. The company was registered in Zimbabwe on ${site.registration.incorporatedOnDisplay}, and from day one we have built our business around three simple ideas: weigh every refill properly, check every cylinder before it is filled, and give customers honest advice they can rely on.`,
      'We are a young company and we are proud of it. We do not have decades of history to point to, so we will earn your trust the only way that counts: by doing the job right, every time you visit us.',
    ],
  },

  whatWeDo: {
    eyebrow: 'What we do',
    title: 'Three things,',
    highlight: 'done well',
    items: [
      {
        icon: 'flame',
        title: 'Supply LPG',
        text: 'We buy, fill, refill, distribute, supply and sell liquefied petroleum gas for homes, institutions and businesses.',
      },
      {
        icon: 'cylinder',
        title: 'Sell equipment',
        text: 'We sell gas cylinders, regulators, burners, pipes, fittings, gas appliances and safety equipment.',
      },
      {
        icon: 'wrench',
        title: 'Install & repair',
        text: 'We install, maintain and repair gas systems and equipment, from a single stove to a commercial kitchen.',
      },
    ] satisfies Benefit[],
  },

  mission: {
    title: 'Our mission',
    text: 'To give every Harare kitchen access to clean, safe and fairly measured cooking gas, backed by equipment and installations people can trust.',
  },
  vision: {
    title: 'Our vision',
    text: 'To become Zimbabwe’s most trusted name in LPG, known for honest service, high safety standards and helping more families move to cleaner energy.',
  },

  values: {
    eyebrow: 'Our values',
    title: 'What we',
    highlight: 'stand for',
    items: [
      {
        icon: 'shield-check',
        title: 'Safety',
        text: 'Safety comes before speed and before profit. We inspect, test and explain, and we will turn down a job rather than do it unsafely.',
      },
      {
        icon: 'clock',
        title: 'Reliability',
        text: 'We keep our promises, keep our hours and keep our customers informed. You should be able to count on us.',
      },
      {
        icon: 'scale',
        title: 'Honesty',
        text: 'Accurately weighed refills, clear advice and no false claims. If something is not right, we will tell you.',
      },
    ] satisfies Benefit[],
  },

  commitment: {
    eyebrow: 'Our safety commitment',
    title: 'Standards we',
    highlight: 'hold ourselves to',
    intro:
      'LPG is safe when it is handled with care and knowledge. These are the standards our team works to every day:',
    points: [
      'Every cylinder is inspected before filling. Damaged, corroded or out-of-date cylinders are not filled.',
      'Refills are weighed on calibrated scales and checked against the tare weight on the cylinder collar.',
      'Valves and connections are leak-tested before cylinders and installations are handed over.',
      'Our technicians are trained in safe LPG handling, installation and leak-testing procedures.',
      'We sell regulators, hoses and fittings that are made for LPG use and suitable for the appliance.',
      `We operate in line with the requirements of the Zimbabwe Energy Regulatory Authority (ZERA). ${site.registration.zeraLicence}.`,
    ],
  },
};
