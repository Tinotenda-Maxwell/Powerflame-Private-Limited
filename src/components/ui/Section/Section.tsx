import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '../Container';
import styles from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  id?: string;
  /** Background style */
  tone?: 'default' | 'surface' | 'warm';
  /** Faint grid-line pattern in the background */
  grid?: boolean;
  spacing?: 'default' | 'sm' | 'none';
  container?: 'default' | 'wide' | 'narrow';
  labelledBy?: string;
  className?: string;
}

/** Standard page section with vertical spacing and an optional grid background */
export function Section({
  children,
  id,
  tone = 'default',
  grid = false,
  spacing = 'default',
  container = 'default',
  labelledBy,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(styles.section, styles[tone], styles[`space-${spacing}`], className)}
    >
      {grid && <span className={styles.grid} aria-hidden="true" />}
      <Container size={container}>{children}</Container>
    </section>
  );
}
