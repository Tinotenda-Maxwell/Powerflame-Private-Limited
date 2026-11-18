import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import styles from './Pill.module.css';

interface PillProps {
  children: ReactNode;
  /** Optional icon instead of the dot */
  icon?: ReactNode;
  tone?: 'light' | 'dark' | 'primary';
  className?: string;
}

/** Small uppercase monospace label used above section headings, e.g. ● WHAT WE DO */
export function Pill({ children, icon, tone = 'light', className }: PillProps) {
  return (
    <span className={cn(styles.pill, styles[tone], className)}>
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : (
        <span className={styles.dot} aria-hidden="true" />
      )}
      {children}
    </span>
  );
}
