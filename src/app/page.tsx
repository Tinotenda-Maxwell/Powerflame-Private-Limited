import { homeContent } from '@/content/home';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Hero } from '@/components/sections/Hero';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { ArticleGrid } from '@/components/sections/LatestArticles';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { SafetyTeaser } from '@/components/sections/SafetyTeaser';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/ui/JsonLd';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getAllArticles } from '@/lib/articles';
import { buildMetadata, graph, websiteJsonLd } from '@/lib/seo';
import styles from './_styles/page.module.css';

export const metadata = buildMetadata({
  title: 'LPG Gas Refills & Cylinders in Harare | Powerflame Energy',
  absoluteTitle: true,
  description:
    'LPG gas Harare: accurately weighed gas refills, cylinders, stoves and safety equipment, plus gas installation and repairs from Powerflame Energy in Hatfield.',
  path: '/',
});

export default function HomePage() {
  const { services, industries, whyChoose, articles } = homeContent;
  const latest = getAllArticles().slice(0, 3);

  return (
    <>
      <JsonLd data={graph(websiteJsonLd())} />
      <Hero />
      <ProductShowcase />
      <AboutTeaser />

      <Section tone="surface" grid labelledBy="services-title">
        <div className={styles.headerRow}>
          <SectionHeader
            id="services-title"
            eyebrow={services.eyebrow}
            title={services.title}
            highlight={services.highlight}
            intro={services.intro}
          />
          <Button href="/services" variant="outline" className={styles.headerButton}>
            All services
          </Button>
        </div>
        <ServicesGrid />
      </Section>

      <Section labelledBy="industries-title">
        <SectionHeader
          id="industries-title"
          eyebrow={industries.eyebrow}
          title={industries.title}
          highlight={industries.highlight}
          intro={industries.intro}
          align="center"
        />
        <IndustriesGrid />
      </Section>

      <Section tone="warm" grid labelledBy="why-title">
        <SectionHeader
          id="why-title"
          eyebrow={whyChoose.eyebrow}
          title={whyChoose.title}
          highlight={whyChoose.highlight}
          intro={whyChoose.intro}
        />
        <FeatureGrid items={whyChoose.points} numbered />
      </Section>

      <SafetyTeaser />

      <Section labelledBy="articles-title">
        <div className={styles.headerRow}>
          <SectionHeader
            id="articles-title"
            eyebrow={articles.eyebrow}
            title={articles.title}
            highlight={articles.highlight}
            intro={articles.intro}
          />
          <Button href="/articles" variant="outline" className={styles.headerButton}>
            All articles
          </Button>
        </div>
        <ArticleGrid articles={latest} />
      </Section>

      <CtaBand />
    </>
  );
}
