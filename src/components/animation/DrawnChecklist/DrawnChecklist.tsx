'use client';

import type { CSSProperties } from 'react';
import { m } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import styles from './DrawnChecklist.module.css';

const ease = [0.22, 1, 0.36, 1] as const;

/** A checklist whose tick icons draw themselves in when scrolled into view */
export function DrawnChecklist({ items }: { items: string[] }) {
  const [ref, inView] = useInView<HTMLUListElement>({ rootMargin: '0px 0px -15% 0px', once: true });

  return (
    <ul ref={ref} className={styles.list} role="list">
      {items.map((item, index) => {
        const delay = 0.15 + index * 0.18;
        return (
          <li
            key={item}
            className={styles.item}
            data-reveal=""
            data-visible={inView ? 'true' : 'false'}
            style={{ '--reveal-delay': `${Math.round(delay * 1000)}ms` } as CSSProperties}
          >
            <svg className={styles.icon} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <m.circle
                cx="16"
                cy="16"
                r="14"
                className={styles.circle}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
                transition={{ duration: 0.6, delay, ease }}
              />
              <m.path
                d="M10 16.5l4 4 8-9"
                className={styles.tick}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
                transition={{ duration: 0.4, delay: delay + 0.45, ease }}
              />
            </svg>
            <span className={styles.text}>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}
