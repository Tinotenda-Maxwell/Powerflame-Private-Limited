import { Icon } from '@/components/ui/Icon';
import type { MarqueeItem } from '@/types';
import styles from './Marquee.module.css';

/**
 * Navy band with an endless strip of products and services, each with its own
 * icon. Pauses on hover; static for reduced motion.
 */
export function Marquee({ items, label }: { items: MarqueeItem[]; label: string }) {
  const list = (hidden: boolean) => (
    <ul className={styles.list} aria-hidden={hidden || undefined} role="list">
      {items.map((item) => (
        <li key={item.label} className={styles.item}>
          <span className={styles.chip}>
            <Icon name={item.icon} size={18} />
          </span>
          {item.label}
        </li>
      ))}
    </ul>
  );

  return (
    <section className={styles.marquee} aria-label={label}>
      <span className={styles.grid} aria-hidden="true" />
      <div className={styles.viewport}>
        <div className={styles.track}>
          {list(false)}
          {list(true)}
        </div>
      </div>
    </section>
  );
}
