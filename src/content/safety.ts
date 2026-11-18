import type { IconName } from '@/types';

/**
 * GAS SAFETY GUIDE (/gas-safety)
 * Practical, genuinely useful guidance. Keep wording plain and direct.
 */

/** TODO: confirm local emergency numbers before launch. */
export const emergencyNumbers = [
  { label: 'Fire brigade', number: '993' },
  { label: 'National emergency', number: '999' },
  { label: 'Ambulance', number: '994' },
];

export interface SafetySection {
  id: string;
  icon: IconName;
  title: string;
  intro: string;
  points: string[];
  note?: string;
}

/** The emergency procedure, shown prominently at the top of the safety page */
export const smellGasSteps: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'ban',
    title: 'No flames, no switches',
    text: 'Do not light matches, lighters or cigarettes. Do not switch lights or appliances on or off, as a spark can ignite gas.',
  },
  {
    icon: 'hand',
    title: 'Close the valve',
    text: 'If it is safe to reach, turn the cylinder valve off (clockwise) and turn off all stove knobs.',
  },
  {
    icon: 'wind',
    title: 'Open up and ventilate',
    text: 'Open doors and windows wide. LPG is heavier than air, so also open low doors to let gas flow out.',
  },
  {
    icon: 'door',
    title: 'Get everyone out',
    text: 'Move everyone, including pets, outside and away from the building. Do not use your phone inside.',
  },
  {
    icon: 'phone',
    title: 'Call for help outside',
    text: 'Once you are safely outside, call us or the fire brigade. Do not go back in until it is declared safe.',
  },
];

export const safetySections: SafetySection[] = [
  {
    id: 'understand-lpg',
    icon: 'lightbulb',
    title: 'Understand how LPG behaves',
    intro:
      'Knowing a few basic facts about liquefied petroleum gas (LPG) makes it much easier to use safely.',
    points: [
      'LPG is stored as a liquid under pressure. When you open the valve, it turns into gas.',
      'LPG is heavier than air. Leaked gas sinks and collects at floor level, in drains, pits and low corners, rather than rising and escaping.',
      'Pure LPG has no smell. A strong-smelling odorant is added so that you can notice a leak. It smells like rotten eggs or cabbage.',
      'A healthy LPG flame is blue. A lazy yellow or orange flame means the burner is not burning cleanly and may need cleaning or adjustment.',
    ],
  },
  {
    id: 'storage',
    icon: 'cylinder',
    title: 'Store cylinders safely',
    intro:
      'Where and how you keep your cylinder is the single biggest factor in gas safety at home.',
    points: [
      'Always keep cylinders upright, both in use and in storage, so only gas (not liquid) reaches the regulator.',
      'The best place is outdoors in a shaded, ventilated spot or a lockable cylinder cage, with the hose passing through the wall to the stove.',
      'If a cylinder is kept indoors, choose a well-ventilated area away from the stove, heaters, direct sunlight and electrical sockets.',
      'Never store cylinders in basements, cellars, below ground level, or near drains, where leaked gas can collect.',
      'Keep spare cylinders outside, not in bedrooms, cupboards or car boots.',
      'Keep the area around the cylinder clear of rubbish, paper and anything that can burn.',
    ],
  },
  {
    id: 'leak-checks',
    icon: 'eye',
    title: 'Check for leaks the safe way',
    intro:
      'A quick leak check takes two minutes. Do it every time you connect a new cylinder and once a month as a routine.',
    points: [
      'Mix washing-up liquid with a little water to make a soapy solution.',
      'With the cylinder valve open and the stove knobs closed, brush or spray the solution onto the valve, regulator, hose ends and clamps.',
      'Watch closely. Growing bubbles mean gas is escaping at that point.',
      'If you find a leak, close the cylinder valve, ventilate the area and do not use the stove until the faulty part is replaced.',
      'Never use a match, lighter or any flame to look for a leak.',
    ],
    note: 'Step-by-step guide with photos: see our article on checking your cylinder for leaks.',
  },
  {
    id: 'hose-regulator',
    icon: 'settings',
    title: 'Look after your hose and regulator',
    intro:
      'The hose and regulator connect your cylinder to your appliance. They wear out over time and need regular checks.',
    points: [
      'Use only LPG-rated hoses and the correct regulator for your cylinder valve and appliance.',
      'Check the hose monthly. Bend it gently and look for cracks, brittleness, swelling or soft spots. Replace it straight away if you see damage.',
      'Replace hoses every two to five years even if they look fine, or by the date printed on them.',
      'Keep hoses as short as practical, secured with proper clamps, and away from hot surfaces, sharp edges and the back of the oven.',
      'Never run a hose under carpets, through doorways or where it can be stepped on or pinched.',
      'Do not force or adjust a regulator. If it hisses, leaks or your flame is weak and uneven, have it checked.',
    ],
  },
  {
    id: 'cylinder-handling',
    icon: 'package',
    title: 'Handle and transport cylinders carefully',
    intro: 'Cylinders are strong, but valves can be damaged by knocks and drops.',
    points: [
      'Never drop, throw or roll a cylinder. To move a heavy cylinder short distances, tilt it slightly and roll it on its base rim.',
      'Make sure the valve is fully closed and, where provided, the protective cap or seal is in place before moving it.',
      'Transport cylinders upright and secured so they cannot fall over. Keep vehicle windows open for ventilation.',
      'Do not leave cylinders in a closed car in the sun, and never smoke near them.',
      'Do not try to repair, paint over or alter a cylinder or valve yourself. Bring damaged cylinders to us.',
    ],
  },
  {
    id: 'cooking-safely',
    icon: 'flame',
    title: 'Cook safely every day',
    intro: 'Good habits in the kitchen prevent most gas accidents.',
    points: [
      'Light the match or igniter first, then turn on the burner knob, so gas is never released without a flame.',
      'Never leave cooking unattended, especially when frying with oil.',
      'Keep curtains, tea towels and plastic away from burners.',
      'Keep the kitchen ventilated while cooking. Gas appliances need air to burn cleanly.',
      'When you finish, turn off the burner knobs and then close the cylinder valve, especially overnight or when you go out.',
      'Keep children away from the stove and cylinder, and teach older children what gas smells like.',
      'Never use outdoor gas heaters or braai equipment inside a closed room. They can produce dangerous carbon monoxide.',
    ],
  },
];

/** Short checklist used on the home page "Safety first" section */
export const safetyChecklist = [
  'Keep cylinders upright and ventilated',
  'Test for leaks with soapy water, never a flame',
  'Check hoses monthly and replace when worn',
  'Close the cylinder valve after cooking',
  'Know what to do if you smell gas',
];
