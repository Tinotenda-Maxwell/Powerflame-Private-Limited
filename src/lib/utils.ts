/** Join class names, skipping falsy values: cn('a', isOn && 'b') */
export const cn = (...classes: (string | false | null | undefined)[]): string =>
  classes.filter(Boolean).join(' ');

/** Format an ISO date (YYYY-MM-DD) as e.g. "12 November 2026" */
export const formatDate = (iso: string): string =>
  new Intl.DateTimeFormat('en-ZW', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Africa/Harare',
  }).format(new Date(`${iso}T12:00:00+02:00`));

/** Split a sentence into words (used by the hero word-reveal) */
export const splitWords = (text: string): string[] => text.trim().split(/\s+/);
