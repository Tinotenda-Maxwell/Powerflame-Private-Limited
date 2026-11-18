import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Info, TriangleExclamationPoint } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './Prose.module.css';

/** Typography wrapper for long-form text (articles, privacy policy) */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn(styles.prose, className)}>{children}</div>;
}

interface CalloutProps {
  title?: string;
  tone?: 'info' | 'warning';
  children: ReactNode;
}

/** <Callout title="Good to know">…</Callout> inside MDX articles */
export function Callout({ title, tone = 'info', children }: CalloutProps) {
  const IconComponent = tone === 'warning' ? TriangleExclamationPoint : Info;
  return (
    <aside className={cn(styles.callout, styles[tone])}>
      <span className={styles.calloutIcon} aria-hidden="true">
        <IconComponent size={20} />
      </span>
      <div>
        {title && <p className={styles.calloutTitle}>{title}</p>}
        <div className={styles.calloutBody}>{children}</div>
      </div>
    </aside>
  );
}

/** Internal links use next/link; external links open in a new tab */
function MdxLink({ href = '', children, ...rest }: ComponentPropsWithoutRef<'a'>) {
  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

function MdxTable(props: ComponentPropsWithoutRef<'table'>) {
  return (
    <div className={styles.tableWrap} role="region" aria-label="Comparison table" tabIndex={0}>
      <table {...props} />
    </div>
  );
}

/** Components available inside MDX files */
export const mdxComponents = {
  a: MdxLink,
  table: MdxTable,
  Callout,
};
