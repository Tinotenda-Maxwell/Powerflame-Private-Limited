import { Flame } from 'lucide-react';
import styles from './Marquee.module.css';

/** Infinite horizontal list of products. Pauses on hover; static for reduced motion. */
export function Marquee({ items, label }: { items: string[]; label: string }) {
  const list = (hidden: boolean) => (
    <ul className={styles.list} aria-hidden={hidden || undefined} role="list">
      {items.map((item) => (
        <li key={item} className={styles.item}>
          <Flame size={18} aria-hidden="true" className={styles.icon} />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <section className={styles.marquee} aria-label={label}>
      <div className={styles.track}>
        {list(false)}
        {list(true)}
      </div>
    </section>
  );
}
