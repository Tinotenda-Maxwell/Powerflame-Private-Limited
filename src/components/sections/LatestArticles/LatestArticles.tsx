import { Reveal } from '@/components/animation/Reveal';
import { ArticleCard } from '@/components/ui/ArticleCard';
import type { Article } from '@/types';
import styles from './LatestArticles.module.css';

export function ArticleGrid({
  articles,
  headingLevel = 'h3',
}: {
  articles: Article[];
  headingLevel?: 'h2' | 'h3';
}) {
  return (
    <ul className={styles.grid} role="list">
      {articles.map((article, index) => (
        <Reveal as="li" key={article.slug} delay={index * 100}>
          <ArticleCard
            headingLevel={headingLevel}
            article={{
              slug: article.slug,
              title: article.title,
              description: article.description,
              date: article.date,
              category: article.category,
              readingTime: article.readingTime,
              image: article.image,
            }}
          />
        </Reveal>
      ))}
    </ul>
  );
}
