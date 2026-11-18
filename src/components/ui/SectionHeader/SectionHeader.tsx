import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Pill } from '../Pill';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  /** Part of the title shown in the brand colour */
  highlight?: string;
  intro?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  /** Heading level. Use 'h1' only for page heroes. */
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
  className?: string;
  children?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  intro,
  align = 'left',
  tone = 'light',
  as: Heading = 'h2',
  id,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <header className={cn(styles.header, styles[align], styles[tone], className)}>
      <Pill tone={tone === 'dark' ? 'dark' : 'light'}>{eyebrow}</Pill>
      <Heading id={id} className={cn(styles.title, Heading === 'h1' && styles.h1)}>
        {title}
        {highlight && (
          <>
            {' '}
            <span className={styles.highlight}>{highlight}</span>
          </>
        )}
      </Heading>
      {intro && <p className={styles.intro}>{intro}</p>}
      {children}
    </header>
  );
}
