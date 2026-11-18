import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { Article } from '@/types';
import { ImageSlot } from '../ImageSlot';
import styles from './ArticleCard.module.css';

type ArticleSummary = Pick<
  Article,
  'slug' | 'title' | 'description' | 'date' | 'category' | 'readingTime' | 'image'
>;

export function ArticleCard({
  article,
  headingLevel: Heading = 'h3',
}: {
  article: ArticleSummary;
  headingLevel?: 'h2' | 'h3';
}) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <ImageSlot
          image={article.image}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          rounded={false}
        />
        <span className={styles.category}>{article.category}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime}</span>
        </p>
        <Heading className={styles.title}>
          <Link href={`/articles/${article.slug}`} className={styles.link}>
            {article.title}
          </Link>
        </Heading>
        <p className={styles.description}>{article.description}</p>
        <span className={styles.more} aria-hidden="true">
          Read article →
        </span>
      </div>
    </article>
  );
}
