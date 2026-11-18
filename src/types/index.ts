import type { IconName } from '@/components/ui/Icon';

export type { IconName };

/** A named image slot. See public/images/README.md for sizes and search terms. */
export interface ImageSlotData {
  /** Path inside /public, e.g. '/images/hero/family-cooking.webp' */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Shown on the branded placeholder until a real photo is added */
  placeholderLabel?: string;
}

export interface Faq {
  id: string;
  question: string;
  /** Plain-text answer (also used for FAQPage structured data) */
  answer: string;
  category: 'Safety' | 'Refills & cylinders' | 'Installation & appliances' | 'About us';
  /** Optional internal link shown under the answer */
  link?: { label: string; href: string };
}

export interface Benefit {
  icon: IconName;
  title: string;
  text: string;
}

export interface Step {
  title: string;
  text: string;
}

export interface Service {
  slug: string;
  title: string;
  /** Short name for cards and menus */
  shortTitle: string;
  icon: IconName;
  /** One-line summary for cards */
  summary: string;
  /** Monospace caption on cards, e.g. '9kg · 14kg · 19kg · 48kg' */
  caption: string;
  /** Tag in the card corner, e.g. 'Most popular' */
  tag: string;
  seo: { title: string; description: string };
  hero: { eyebrow: string; headline: string; highlight: string; intro: string };
  overview: string[];
  /** What is included */
  includes: { title: string; text: string }[];
  benefits: Benefit[];
  whoFor: { label: string; text: string; href?: string }[];
  steps: Step[];
  faqIds: string[];
  image: ImageSlotData;
  relatedArticles: string[];
}

export interface Industry {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  howLpgHelps: string[];
  recommended: string;
  image: ImageSlotData;
}

export interface ArticleFrontmatter {
  title: string;
  /** Optional shorter title for search results (aim for under 60 characters) */
  seoTitle?: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  readingTime?: string;
  image: ImageSlotData;
  relatedServices?: string[];
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  readingTime: string;
  content: string;
}

export interface Crumb {
  label: string;
  href: string;
}
