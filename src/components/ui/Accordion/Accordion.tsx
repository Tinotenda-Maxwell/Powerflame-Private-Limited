'use client';

import { useId, useState, type ReactNode } from 'react';
import { m } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './Accordion.module.css';

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Open the first item by default */
  defaultOpen?: string;
  headingLevel?: 'h2' | 'h3';
}

/**
 * Accessible accordion. Answers always stay in the HTML (good for SEO);
 * closed panels are collapsed and made `inert` so they cannot be tabbed into.
 */
export function Accordion({ items, defaultOpen, headingLevel: Heading = 'h3' }: AccordionProps) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? null);
  const baseId = useId();

  return (
    <div className={styles.accordion}>
      {items.map((item) => {
        const isOpen = open === item.id;
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div key={item.id} className={cn(styles.item, isOpen && styles.open)} id={item.id}>
            <Heading className={styles.heading}>
              <button
                type="button"
                id={buttonId}
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.id)}
              >
                <span>{item.title}</span>
                <span className={styles.icon} aria-hidden="true">
                  <Plus size={18} strokeWidth={2} />
                </span>
              </button>
            </Heading>
            <m.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={styles.panel}
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              inert={!isOpen}
            >
              <div className={styles.content}>{item.content}</div>
            </m.div>
          </div>
        );
      })}
    </div>
  );
}
