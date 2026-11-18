import type { ReactNode } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/ui/JsonLd';
import { Pill } from '@/components/ui/Pill';
import { breadcrumbJsonLd, graph } from '@/lib/seo';
import { cn } from '@/lib/utils';
import type { Crumb } from '@/types';
import styles from './PageHero.module.css';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro?: ReactNode;
  breadcrumbs: Crumb[];
  actions?: ReactNode;
  /** Optional media or panel shown beside the text on large screens */
  aside?: ReactNode;
  children?: ReactNode;
}

/** Heading block for inner pages: breadcrumbs (+ JSON-LD), label, H1 and intro */
export function PageHero({
  eyebrow,
  title,
  highlight,
  intro,
  breadcrumbs,
  actions,
  aside,
  children,
}: PageHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="page-title">
      <JsonLd data={graph(breadcrumbJsonLd(breadcrumbs))} />
      <span className={styles.grid} aria-hidden="true" />
      <span className={styles.glow} aria-hidden="true" />
      <Container size="wide">
        <Breadcrumbs items={breadcrumbs} />
        <div className={cn(styles.layout, aside ? styles.withAside : undefined)}>
          <div className={styles.copy}>
            <Pill>{eyebrow}</Pill>
            <h1 id="page-title" className={styles.title}>
              {title}
              {highlight && (
                <>
                  {' '}
                  <span className={styles.highlight}>{highlight}</span>
                </>
              )}
            </h1>
            {intro && <p className={styles.intro}>{intro}</p>}
            {actions && <div className={styles.actions}>{actions}</div>}
            {children}
          </div>
          {aside && <div className={styles.aside}>{aside}</div>}
        </div>
      </Container>
    </section>
  );
}
