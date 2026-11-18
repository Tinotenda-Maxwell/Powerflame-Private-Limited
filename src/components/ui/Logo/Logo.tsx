import { cn } from '@/lib/utils';
import {
  MARK_FLAME,
  MARK_P,
  MARK_VIEWBOX,
  TAGLINE_RULES,
  TAGLINE_TEXT,
  WORD_FLAME,
  WORD_POWER,
  WORDMARK_HEIGHT,
  WORDMARK_WIDTH,
} from './paths';
import styles from './Logo.module.css';

/* Lockup geometry, matching public/logo.svg: mark | wordmark over tagline */
const LOCKUP_HEIGHT = 72;
const TEXT_X = 84;
const WORD_Y = 18;
const TAGLINE_Y = WORD_Y + WORDMARK_HEIGHT + 7;
const LOCKUP_WIDTH = Math.ceil(TEXT_X + WORDMARK_WIDTH + 4);

interface LogoProps {
  /** 'full' = the complete lockup, 'mark' = the flame-P mark only */
  variant?: 'full' | 'mark';
  /** 'dark' for light backgrounds, 'light' for dark backgrounds */
  tone?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'full', tone = 'dark', className }: LogoProps) {
  const mark = (
    <>
      <path d={MARK_FLAME} fillRule="evenodd" className={styles.orange} />
      <path d={MARK_P} fillRule="evenodd" className={styles.navy} />
    </>
  );

  return (
    <span className={cn(styles.logo, styles[tone], className)}>
      {variant === 'mark' ? (
        <svg className={styles.mark} viewBox={MARK_VIEWBOX} aria-hidden="true" focusable="false">
          {mark}
        </svg>
      ) : (
        <svg
          className={styles.lockup}
          viewBox={`0 0 ${LOCKUP_WIDTH} ${LOCKUP_HEIGHT}`}
          aria-hidden="true"
          focusable="false"
        >
          <g transform="translate(4 4) scale(1.333)">{mark}</g>
          <rect x="66" y="14" width="2" height="44" className={styles.navy} />
          <g transform={`translate(${TEXT_X} ${WORD_Y})`}>
            <path d={WORD_POWER} fillRule="evenodd" className={styles.navy} />
            <path d={WORD_FLAME} fillRule="evenodd" className={styles.orange} />
          </g>
          <g transform={`translate(${TEXT_X} ${TAGLINE_Y})`}>
            <path d={TAGLINE_RULES} fillRule="evenodd" className={styles.orange} />
            <path d={TAGLINE_TEXT} fillRule="evenodd" className={styles.navy} />
          </g>
        </svg>
      )}
      <span className="sr-only">Powerflame: Eternal flame. Endless power.</span>
    </span>
  );
}
