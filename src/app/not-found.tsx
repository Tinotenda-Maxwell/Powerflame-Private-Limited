import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FlameCanvas } from '@/components/animation/FlameCanvas';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import styles from './_styles/not-found.module.css';

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'Sorry, we could not find that page. Explore Powerflame Energy’s LPG gas refills, cylinders, installation services, gas safety guide and FAQs in Harare.',
  robots: { index: false, follow: true },
};

const links = [
  { label: 'Our services', href: '/services' },
  { label: 'Gas safety guide', href: '/gas-safety' },
  { label: 'Frequently asked questions', href: '/faq' },
  { label: 'Contact us', href: '/contact' },
];

export default function NotFound() {
  return (
    <section className={styles.section} aria-labelledby="not-found-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <Pill>Error 404</Pill>
            <h1 id="not-found-title" className={styles.title}>
              This page has <span className={styles.highlight}>run out of gas</span>
            </h1>
            <p className={styles.intro}>
              The page you are looking for may have moved or no longer exists. Here are some helpful
              places to go instead.
            </p>
            <div className={styles.actions}>
              <Button href="/">Back to home</Button>
              <Button href="/contact" variant="outline">
                Get in touch
              </Button>
            </div>
            <ul className={styles.links} role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.stage} aria-hidden="true">
            <FlameCanvas originY={0.85} intensity={0.45} />
            <span className={styles.code}>404</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
