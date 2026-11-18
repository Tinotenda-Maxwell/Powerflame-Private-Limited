import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { IconName } from '@/types';
import { IconBox } from '../IconBox';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  icon: IconName;
  title: string;
  description: string;
  /** Monospace caption, bottom-left */
  caption: string;
  /** Small tag, bottom-right */
  tag: string;
  href?: string;
  index?: number;
  headingLevel?: 'h2' | 'h3';
  className?: string;
}

/**
 * Card with an icon, title, description, monospace caption and tag.
 * When `href` is set the whole card is clickable (stretched link pattern),
 * while the link text itself stays descriptive for screen readers.
 */
export function ServiceCard({
  icon,
  title,
  description,
  caption,
  tag,
  href,
  index,
  headingLevel: Heading = 'h3',
  className,
}: ServiceCardProps) {
  return (
    <article className={cn(styles.card, href && styles.interactive, className)}>
      <div className={styles.top}>
        <IconBox icon={icon} className={styles.icon} />
        {typeof index === 'number' && (
          <span className={styles.index} aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>
      <Heading className={styles.title}>
        {href ? (
          <Link href={href} className={styles.link}>
            {title}
          </Link>
        ) : (
          title
        )}
      </Heading>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <span className={styles.caption}>{caption}</span>
        <span className={styles.tag}>{tag}</span>
      </div>
      {href && (
        <span className={styles.arrow} aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      )}
    </article>
  );
}
