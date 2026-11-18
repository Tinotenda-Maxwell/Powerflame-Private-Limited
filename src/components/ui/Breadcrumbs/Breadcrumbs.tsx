import Link from 'next/link';
import { ChevronRight, House } from 'lucide-react';
import type { Crumb } from '@/types';
import styles from './Breadcrumbs.module.css';

/** Visible breadcrumb trail. The matching JSON-LD is added by PageHero. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href="/" className={styles.link}>
            <House size={14} aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className={styles.item}>
              <ChevronRight size={14} aria-hidden="true" className={styles.separator} />
              {isLast ? (
                <span aria-current="page" className={styles.current}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
