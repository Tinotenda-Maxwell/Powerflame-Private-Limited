import { cn } from '@/lib/utils';
import styles from './Logo.module.css';

/** SVG paths for the flame mark (also used by scripts/generate-brand-assets.mjs) */
export const FLAME_OUTER =
  'M20 1.5c1.2 7.4 6.8 11.4 10.3 16.6 3.1 4.6 4.2 9.3 3.2 14.1C32 40.6 26.6 46.5 20 46.5S7.6 41.4 6.6 33.6c-.8-6.2 1.8-11.4 6-15.4.4 3.6 1.9 6.3 4.3 7.9-.8-7.6.6-16.4 3.1-24.6Z';
export const FLAME_INNER =
  'M20.6 24.5c.6 4.2 3.9 6.4 5.1 9.8 1.4 4.1-1.4 8.7-5.7 8.7-4.4 0-7.2-3.8-6.2-8 .5-2.1 1.8-3.6 3.2-4.6.2 1.7.9 2.9 2 3.6-.3-3.3.4-6.4 1.6-9.5Z';

interface LogoProps {
  /** 'full' = flame + wordmark, 'mark' = flame only */
  variant?: 'full' | 'mark';
  tone?: 'dark' | 'light';
  /** Unique id so several logos on one page have separate gradients */
  id?: string;
  className?: string;
}

export function Logo({ variant = 'full', tone = 'dark', id = 'logo', className }: LogoProps) {
  const gradientId = `flame-gradient-${id}`;
  return (
    <span className={cn(styles.logo, styles[tone], className)}>
      <svg
        className={styles.mark}
        viewBox="0 0 40 48"
        width="40"
        height="48"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="1" x2="0.35" y2="0">
            <stop offset="0%" className={styles.stopStart} />
            <stop offset="55%" className={styles.stopMid} />
            <stop offset="100%" className={styles.stopEnd} />
          </linearGradient>
        </defs>
        <path d={FLAME_OUTER} fill={`url(#${gradientId})`} />
        <path d={FLAME_INNER} className={styles.inner} />
      </svg>
      {variant === 'full' && (
        <span className={styles.wordmark}>
          <span className={styles.name}>Powerflame</span> <span className={styles.sub}>Energy</span>
        </span>
      )}
    </span>
  );
}
