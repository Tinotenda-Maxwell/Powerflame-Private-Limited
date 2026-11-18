import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'outline' | 'dark' | 'light' | 'ghost';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  /** Show the small circular arrow icon (default true) */
  arrow?: boolean;
  /** Optional leading icon */
  icon?: ReactNode;
  /** Opens in a new tab (used for WhatsApp and map links) */
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

/**
 * Link styled as a button. Internal links use next/link for instant
 * client-side navigation; tel:, mailto: and external links use <a>.
 */
export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  arrow = true,
  icon,
  external = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(styles.button, styles[variant], styles[size], className);
  const content = (
    <>
      {icon && <span className={styles.leading}>{icon}</span>}
      <span className={styles.label}>{children}</span>
      {arrow && (
        <span className={styles.arrow} aria-hidden="true">
          <ArrowUpRight size={14} strokeWidth={2.25} className={styles.arrowIcon} />
          <ArrowUpRight size={14} strokeWidth={2.25} className={styles.arrowIconNext} />
        </span>
      )}
    </>
  );

  const isInternal = href.startsWith('/') && !external;
  if (isInternal) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </a>
  );
}
