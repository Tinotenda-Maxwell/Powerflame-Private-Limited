import { Reveal } from '@/components/animation/Reveal';
import { IconBox } from '@/components/ui/IconBox';
import { cn } from '@/lib/utils';
import type { Benefit } from '@/types';
import styles from './FeatureGrid.module.css';

interface FeatureGridProps {
  items: Benefit[];
  columns?: 2 | 3 | 4;
  numbered?: boolean;
  tone?: 'light' | 'dark';
}

/** Grid of icon + title + text items (benefits, values, why choose us) */
export function FeatureGrid({
  items,
  columns = 3,
  numbered = false,
  tone = 'light',
}: FeatureGridProps) {
  return (
    <ul className={cn(styles.grid, styles[`cols${columns}`], styles[tone])} role="list">
      {items.map((item, index) => (
        <Reveal as="li" key={item.title} delay={index * 80} className={styles.item}>
          <div className={styles.head}>
            <IconBox icon={item.icon} tone={tone === 'dark' ? 'glass' : 'primary'} />
            {numbered && (
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
            )}
          </div>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text}>{item.text}</p>
        </Reveal>
      ))}
    </ul>
  );
}
