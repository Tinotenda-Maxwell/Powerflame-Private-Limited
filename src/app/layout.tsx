import type { Metadata, Viewport } from 'next';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import { absoluteUrl, site } from '@/config/site';
import { MotionProvider } from '@/components/animation/MotionProvider';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { SkipLink } from '@/components/layout/SkipLink';
import { JsonLd } from '@/components/ui/JsonLd';
import { graph, localBusinessJsonLd, organizationJsonLd } from '@/lib/seo';
import { getThemeToken } from '@/lib/theme';
import '@/styles/globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-jetbrains',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name}: LPG Gas Supplier in Harare`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: absoluteUrl('/') }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icons/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
  other: {
    'geo.region': site.address.regionCode,
    'geo.placename': `${site.address.suburb}, ${site.address.city}`,
    'geo.position': `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  // Read from src/styles/theme.css so the browser bar always matches the brand
  themeColor: getThemeToken('--color-primary'),
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-ZW"
      className={`${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks that JavaScript is running, so scroll-reveal styles only apply when they can finish */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.setAttribute('data-js','')",
          }}
        />
      </head>
      <body>
        <JsonLd data={graph(organizationJsonLd(), localBusinessJsonLd())} />
        <SkipLink />
        <MotionProvider>
          <AnnouncementBar />
          <Header />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
