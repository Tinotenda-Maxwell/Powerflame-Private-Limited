import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { getService } from '@/content/services';
import { CtaBand } from '@/components/sections/CtaBand';
import { ArticleGrid } from '@/components/sections/LatestArticles';
import { PageHero } from '@/components/sections/PageHero';
import { Container } from '@/components/ui/Container';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { JsonLd } from '@/components/ui/JsonLd';
import { Prose, mdxComponents } from '@/components/ui/Prose';
import { Section } from '@/components/ui/Section';
import { getAllArticles, getArticle } from '@/lib/articles';
import { articleJsonLd, buildMetadata, graph } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import type { Service } from '@/types';
import styles from './article.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.seoTitle ?? article.title,
    description: article.description,
    path: `/articles/${article.slug}`,
    type: 'article',
    publishedTime: article.date,
    modifiedTime: article.updated ?? article.date,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { content } = await compileMDX({
    source: article.content,
    components: mdxComponents,
    options: {
      mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] },
    },
  });

  const relatedServices = (article.relatedServices ?? [])
    .map((s) => getService(s))
    .filter((s): s is Service => Boolean(s));
  const more = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={graph(articleJsonLd(article))} />
      <PageHero
        eyebrow={article.category}
        title={article.title}
        intro={article.description}
        breadcrumbs={[
          { label: 'Articles', href: '/articles' },
          { label: article.title, href: `/articles/${article.slug}` },
        ]}
      >
        <p className={styles.meta}>
          <span>By {article.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime}</span>
        </p>
      </PageHero>

      <Container size="wide">
        <div className={styles.cover}>
          <ImageSlot image={article.image} priority sizes="(min-width: 1400px) 1400px, 100vw" />
        </div>
      </Container>

      <Section spacing="sm" container="wide">
        <div className={styles.layout}>
          <article className={styles.article}>
            <Prose>{content}</Prose>
          </article>
          {relatedServices.length > 0 && (
            <aside className={styles.aside} aria-labelledby="related-services-title">
              <p id="related-services-title" className={styles.asideTitle}>
                Related services
              </p>
              <ul className={styles.asideList} role="list">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className={styles.asideLink}>
                      {service.title}
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/gas-safety" className={styles.asideLink}>
                    Gas safety guide
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </aside>
          )}
        </div>
        <Link href="/articles" className={styles.back}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to all articles
        </Link>
      </Section>

      {more.length > 0 && (
        <Section tone="surface" spacing="sm" labelledBy="more-articles-title">
          <h2 id="more-articles-title" className={styles.moreTitle}>
            More guides
          </h2>
          <ArticleGrid articles={more} />
        </Section>
      )}

      <CtaBand />
    </>
  );
}
