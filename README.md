# Powerflame Energy website

Marketing website for **Powerflame Energy (Private) Limited**, an LPG (cooking gas) company at
7 Masotsha Ndlovu Way, Hatfield, Harare, Zimbabwe.

- **Next.js (App Router) + React + TypeScript**, exported as plain static HTML (`out/`)
- **Pure CSS**: CSS Modules per component, plus a few global files. No CSS framework.
- **One theme file** (`src/styles/theme.css`) controls every colour, font size, space and shadow
- **Framer Motion** for interactive animation, plain CSS keyframes for everything else
- **MDX** articles, **lucide-react** icons, **DM Sans + JetBrains Mono** via `next/font`
- Every page is pre-rendered with unique metadata, Open Graph images and structured data

This phase is an information / brand site. There is no ordering, cart, delivery booking, prices,
accounts, backend or database.

---

## Quick start

You need [Node.js](https://nodejs.org) 20.9 or newer.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000. Pages reload as you edit.

| Command                | What it does                                                                    |
| ---------------------- | ------------------------------------------------------------------------------- |
| `npm run dev`          | Development server with live reload                                             |
| `npm run build`        | Builds the static site into `out/`                                              |
| `npm start`            | Previews the built `out/` folder at http://localhost:4321 (gzip, clean URLs)    |
| `npm run check:colors` | Fails if a colour value appears anywhere in `src/` outside `theme.css`          |
| `npm run typecheck`    | TypeScript strict type check                                                    |
| `npm run lint`         | ESLint (Next.js Core Web Vitals + TypeScript rules, no `any`, no `console.log`) |
| `npm run format`       | Formats everything with Prettier                                                |
| `npm run brand`        | Regenerates logo, favicons, app icons and social images from the brand colours  |
| `npm run verify`       | Colour check + typecheck + lint + build: **run before every deploy**            |

---

## Folder structure

```
powerflame-website/
├─ public/                     Files served as-is
│  ├─ images/                  Photos, in subfolders (hero/, services/, about/, articles/, industries/)
│  │  └─ README.md             ← every image slot, its size and stock-photo search terms
│  ├─ videos/                  Optional hero.mp4 / hero.webm / posters
│  ├─ icons/                   Favicons and app icons (generated)
│  ├─ og/                      Social share images, one per page (generated)
│  ├─ logo.svg                 Temporary logo (generated; replace with your designer's file)
│  ├─ favicon.ico
│  └─ _headers                 Cache headers for Netlify / Cloudflare Pages
├─ scripts/
│  ├─ check-colors.mjs         npm run check:colors
│  ├─ generate-brand-assets.mjs npm run brand
│  └─ serve.mjs                npm start (preview the built site)
├─ src/
│  ├─ app/                     One folder per page (Next.js routes)
│  │  ├─ layout.tsx            Shell: fonts, header, footer, WhatsApp button, company JSON-LD
│  │  ├─ template.tsx          Page transition between pages
│  │  ├─ page.tsx              Home  /
│  │  ├─ about/                /about
│  │  ├─ services/             /services and services/[slug] (one page per service)
│  │  ├─ industries/           /industries
│  │  ├─ gas-safety/           /gas-safety
│  │  ├─ faq/                  /faq
│  │  ├─ articles/             /articles and articles/[slug] (MDX blog)
│  │  ├─ contact/              /contact
│  │  ├─ privacy-policy/       /privacy-policy
│  │  ├─ not-found.tsx         Branded 404 page
│  │  ├─ sitemap.ts            → /sitemap.xml (built from all routes and articles)
│  │  ├─ robots.ts             → /robots.txt
│  │  ├─ manifest.ts           → /manifest.webmanifest
│  │  └─ _styles/              Small shared layout styles for pages
│  ├─ components/
│  │  ├─ layout/               Header, MobileMenu, Footer, WhatsAppButton, SkipLink
│  │  ├─ sections/             Hero, Marquee, ServicesGrid, SafetyTeaser, CtaBand, PageHero, FaqList…
│  │  ├─ ui/                   Button, Pill, SectionHeader, ServiceCard, Accordion, ImageSlot, VideoPlayer…
│  │  └─ animation/            FlameCanvas, Reveal, MagneticButton, DrawnChecklist, PageTransition
│  ├─ config/site.ts           ← company details, contact info, hours, map pin, socials, navigation
│  ├─ content/                 ← all wording: services, industries, FAQs, safety guide, page copy
│  │  └─ articles/             ← MDX blog articles
│  ├─ lib/                     seo.ts (metadata + JSON-LD), articles.ts, theme.ts, utils
│  ├─ hooks/                   useReducedMotion, useInView, useMediaQuery, useSaveData
│  ├─ styles/
│  │  ├─ theme.css             ← ALL design tokens. The only place colours live.
│  │  ├─ reset.css
│  │  ├─ globals.css           Base element styles (imports theme + reset + animations)
│  │  └─ animations.css        Shared @keyframes
│  └─ types/                   Shared TypeScript types
└─ README.md
```

Every component lives in its own folder: `Component.tsx`, `Component.module.css` and `index.ts`.

---

## Everyday editing

### Change contact details, hours, licence number or social links

Edit **`src/config/site.ts`**. Everything (header, footer, contact page, WhatsApp links, Google
structured data) reads from it. Values marked `PLACEHOLDER` must be replaced before launch:

- `contact.phone` and `contact.whatsapp`: currently `+263 XX XXX XXXX`. While they contain
  `XX`, they are left out of Google's structured data automatically.
- `registration.zeraLicence`: currently `ZERA licence no. pending`
- `social`: replace each `#` with the real profile URL
- `geo`: **TODO.** Approximate coordinates for Hatfield. Drop a pin on 7 Masotsha Ndlovu Way in
  Google Maps and copy the exact latitude/longitude.

Also confirm the emergency numbers in `src/content/safety.ts` (`emergencyNumbers`).

> Never add directors' ID numbers, shareholdings or other personal details to the site.

### Change wording

All text lives in **`src/content/`** as typed data, separate from layout code:

| File            | Controls                                                            |
| --------------- | ------------------------------------------------------------------- |
| `home.ts`       | Home page hero, marquee items, section headings, "why us", CTA band |
| `about.ts`      | Story, mission, vision, values, safety commitment                   |
| `services.ts`   | Each service page: summary, benefits, steps, who it's for, SEO text |
| `industries.ts` | Homes, restaurants, hotels, schools, businesses, farms              |
| `faqs.ts`       | All FAQ questions and answers (used on /faq and service pages)      |
| `safety.ts`     | The gas safety guide and emergency steps                            |
| `privacy.ts`    | Privacy policy                                                      |
| `images.ts`     | Image and video slots (paths, sizes, alt text)                      |

### Add a blog article

Create a new file in `src/content/articles/`, e.g. `gas-heaters-in-winter.mdx`. The file name
becomes the URL (`/articles/gas-heaters-in-winter`). Start it with:

```mdx
---
title: 'Using gas heaters safely in winter'
seoTitle: 'Gas Heater Safety in Winter' # optional, shorter title for Google (under 60 characters)
description: 'Write 150 to 160 characters here. This is what Google shows under your title in search results.'
date: '2026-12-01'
author: 'Powerflame Energy team'
category: 'Gas safety'
image: articleLeaks # an image slot name from src/content/images.ts
relatedServices:
  - gas-appliances-and-safety-equipment
---

Your article in Markdown. Use ## for headings, **bold**, lists, tables and links like
[our safety guide](/gas-safety).

<Callout title="Good to know">A highlighted tip box.</Callout>
<Callout title="Warning" tone="warning">
  A red warning box.
</Callout>
```

It is added to /articles, the home page, the sitemap and gets its own structured data
automatically. Run `npm run brand` to create its social share image.

### Add photos and videos

See **[`public/images/README.md`](public/images/README.md)** for every slot, the exact size and
aspect ratio, and suggested search terms. Missing images show a branded placeholder, and missing
videos fall back to the poster or the animated flame, so the site always looks complete.

---

## The theme system: one file controls every colour

`src/styles/theme.css` declares every design token as a CSS custom property on `:root`:

- **Brand palette ("African sunrise")**: `--color-primary` (flame red), `--color-secondary`
  (amber), `--color-dark` (deep brown), `--color-cream`, `--color-white`
- **Semantic tokens** built from those with `color-mix()`: `--color-bg`, `--color-surface`,
  `--color-text`, `--color-text-muted`, `--color-border`, `--color-accent`, `--color-on-primary`,
  `--color-focus`, hover/active shades, tints
- **Gradients**: `--gradient-flame`, `--gradient-glow`, `--gradient-cta`, …
- **Typography** (fluid `clamp()` scale), **spacing**, **radius** (`--radius-sm` … `--radius-xl`,
  `--radius-pill`), **shadows**, **z-index**, **motion** timings, and **breakpoints** (documented)

**To re-brand:** change the five brand colours, save, and the whole site updates. Then run
`npm run brand` so the logo, favicons, app icons and share images match. The browser
`theme-color` and web manifest colours are read from `theme.css` at build time.

**The rule:** component CSS uses only `var(--token)`. `npm run check:colors` scans `src/` and
fails if it finds a hex, `rgb()`, `hsl()`, `oklch()` or named colour anywhere else. `npm run
verify` runs it automatically.

**Contrast (WCAG AA):** text on cream 13.8:1 · muted text 6.3:1 · red on cream 5.5:1 · white on
red 5.9:1 · brown on amber 7.0:1. Amber is used for decoration and dark-background accents only;
never put white text on amber. The CTA band's moving gradient runs deep red → red → burnt orange,
so its white text stays above 4.5:1 everywhere.

---

## Animation & performance notes

- The hero flame is a lightweight `<canvas>` particle system (`FlameCanvas`). It reads its colours
  from the theme, leans towards the mouse on desktop, starts only after the page has loaded, pauses
  when off-screen or in a background tab, and draws a still frame for reduced motion.
- The hero headline reveal, marquee, CTA gradient, glows and page transitions are pure CSS
  keyframes. Scroll reveals use IntersectionObserver + CSS. Framer Motion (loaded lazily) handles
  the mobile menu, the FAQ accordion and the self-drawing safety checklist.
- Only `transform` and `opacity` are animated (plus a one-off blur on the hero words), and
  `prefers-reduced-motion` turns animation off everywhere.
- Content is never hidden from search engines: scroll-reveal styles only apply once JavaScript
  has started, and FAQ answers are always in the HTML.
- Lenis smooth scrolling was deliberately left out: native CSS smooth scrolling is lighter and
  keeps keyboard, skip-link and anchor behaviour fully accessible.
- Fonts are self-hosted by `next/font` with metric-matched fallbacks (no layout shift). CSS is
  inlined into each page so nothing blocks the first paint.

---

## Deploying (free hosting)

Run `npm run verify`, then upload the **`out/`** folder.

- **Netlify:** build command `npm run build`, publish directory `out`. `public/_headers` sets
  cache headers.
- **Cloudflare Pages:** framework preset "Next.js (Static HTML Export)", build command
  `npm run build`, output directory `out`.
- **Vercel:** import the repository; it detects Next.js and serves the static export.

Point `www.powerflame.co.zw` at the host and redirect the bare domain to `www`, because
`siteUrl` in `src/config/site.ts` uses `www`.

---

## After launch: SEO checklist

1. **Google Search Console**: add `https://www.powerflame.co.zw` as a property and verify it
   (DNS TXT record is easiest).
2. **Submit the sitemap**: in Search Console → Sitemaps, submit `sitemap.xml`.
3. **Google Business Profile**: create it at **7 Masotsha Ndlovu Way, Hatfield, Harare**, choose
   a category such as "Propane supplier" / "Gas company", add hours, photos and the website link.
   This is the most important step for "gas refill Hatfield" and "LPG gas Harare" map searches.
4. **Keep NAP identical everywhere**: name ("Powerflame Energy"), address and phone must be
   written exactly the same on the website, Google Business Profile, Facebook, directories and
   signage.
5. Replace all placeholders in `src/config/site.ts` (phone, WhatsApp, ZERA licence, socials, map
   pin) and rebuild. The phone number then appears in structured data automatically.
6. Test a few pages in Google's [Rich Results Test](https://search.google.com/test/rich-results)
   and [PageSpeed Insights](https://pagespeed.web.dev).
7. Add real photos (see `public/images/README.md`). Real local photos build trust and help
   image search.
8. Publish a new helpful article every month or two, and ask happy customers to leave Google
   reviews once you are trading. Never write reviews yourself.

---

## Honesty rules for content

Powerflame Energy is a new company. Do not add invented testimonials, reviews, client logos,
awards, years in business or statistics. Use real, verifiable value points (accurately weighed
refills, safety-checked cylinders, certified accessories, trained technicians, local Harare team).
# Powerflame-Private-Limited
