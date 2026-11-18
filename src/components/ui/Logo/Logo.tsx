import { cn } from '@/lib/utils';
import {
  MARK_FLAME,
  MARK_P,
  MARK_VIEWBOX,
  NAME_HEIGHT,
  NAME_NAVY,
  NAME_ORANGE,
  NAME_WIDTH,
} from './paths';
import styles from './Logo.module.css';

interface LogoProps {
  /** 'full' = mark + name, 'mark' = the flame-P mark only */
  variant?: 'full' | 'mark';
  /** 'dark' for light backgrounds, 'light' for dark backgrounds */
  tone?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'full', tone = 'dark', className }: LogoProps) {
  return (
    <span className={cn(styles.logo, styles[tone], className)}>
      <svg className={styles.mark} viewBox={MARK_VIEWBOX} aria-hidden="true" focusable="false">
        <path d={MARK_FLAME} fillRule="evenodd" className={styles.orange} />
        <path d={MARK_P} fillRule="evenodd" className={styles.navy} />
      </svg>
      {variant === 'full' && (
        <svg
          className={styles.name}
          viewBox={`0 0 ${NAME_WIDTH} ${NAME_HEIGHT}`}
          aria-hidden="true"
          focusable="false"
        >
          <path d={NAME_NAVY} fillRule="evenodd" className={styles.navy} />
          <path d={NAME_ORANGE} fillRule="evenodd" className={styles.orange} />
        </svg>
      )}
      <span className="sr-only">Powerflame: Eternal flame. Endless power.</span>
    </span>
  );
}
