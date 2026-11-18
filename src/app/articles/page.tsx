import { ArticleGrid } from '@/components/sections/LatestArticles';
import { CtaBand } from '@/components/sections/CtaBand';
import { PageHero } from '@/components/sections/PageHero';
import { JsonLd } from '@/components/ui/JsonLd';
import { Section } from '@/components/ui/Section';
import { getAllArticles } from '@/lib/articles';
import { buildMetadata, graph, itemListJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Articles & Guides on LPG Cooking Gas',
  description:
    'Plain-English guides from Powerflame Energy on LPG cooking gas in Zimbabwe: switching from firewood, checking for gas leaks and choosing a cylinder size.',
  path: '/articles',
});

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <>
      <JsonLd
        data={graph(
          itemListJsonLd(articles.map((a) => ({ name: a.title, url: `/articles/${a.slug}` }))),
        )}
      />
      <PageHero
        eyebrow="Articles & guides"
        title="Practical guides to"
        highlight="cooking with gas"
        intro="Helpful, honest advice on choosing, using and looking after LPG at home and at work, written by the Powerflame Energy team in Harare."
        breadcrumbs={[{ label: 'Articles', href: '/articles' }]}
      />
      <Section tone="surface" grid spacing="sm" labelledBy="articles-list-title">
        <h2 id="articles-list-title" className="sr-only">
          All articles
        </h2>
        <ArticleGrid articles={articles} headingLevel="h3" />
      </Section>
      <CtaBand />
    </>
  );
}
