'use client';

import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealProps {
  children: ReactNode;
  /** Delay in milliseconds, for staggering items in a grid */
  delay?: number;
  as?: ElementType;
  className?: string;
}

/**
 * Fades and lifts its children into view on scroll.
 * Uses IntersectionObserver + CSS transitions (transform/opacity only).
 * Styles live in globals.css under [data-reveal]. Content is only hidden when
 * JavaScript is running, so it is always readable by search engines.
 */
export function Reveal({ children, delay = 0, as: Tag = 'div', className }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>({ rootMargin: '0px 0px -8% 0px', once: true });
  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal=""
      data-visible={inView ? 'true' : 'false'}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
