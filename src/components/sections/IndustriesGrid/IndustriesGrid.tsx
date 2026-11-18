import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/animation/Reveal';
import { IconBox } from '@/components/ui/IconBox';
import { industries } from '@/content/industries';
import styles from './IndustriesGrid.module.css';

/** Compact cards for each customer group, linking to /industries */
export function IndustriesGrid() {
  return (
    <ul className={styles.grid} role="list">
      {industries.map((industry, index) => (
        <Reveal as="li" key={industry.slug} delay={index * 70}>
          <Link href={`/industries#${industry.slug}`} className={styles.card}>
            <IconBox icon={industry.icon} tone="amber" />
            <span className={styles.body}>
              <span className={styles.name}>{industry.name}</span>
              <span className={styles.summary}>{industry.summary}</span>
            </span>
            <ArrowUpRight size={18} className={styles.arrow} aria-hidden="true" />
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
