import { faqCategories, faqs } from '@/content/faqs';
import { CtaBand } from '@/components/sections/CtaBand';
import { FaqList } from '@/components/sections/FaqList';
import { PageHero } from '@/components/sections/PageHero';
import { JsonLd } from '@/components/ui/JsonLd';
import { Section } from '@/components/ui/Section';
import { faqJsonLd, graph, buildMetadata } from '@/lib/seo';
import styles from './faq.module.css';

export const metadata = buildMetadata({
  title: 'Frequently Asked Questions about LPG Gas',
  description:
    'Answers to common LPG questions: is gas safe indoors, how to tell if a cylinder is full, which size to choose, installation and what to do if you smell gas.',
  path: '/faq',
});

const slug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export default function FaqPage() {
  return (
    <>
      <JsonLd data={graph(faqJsonLd(faqs))} />
      <PageHero
        eyebrow="FAQ"
        title="Your questions about gas,"
        highlight="answered honestly"
        intro="Clear answers to the questions we hear most often about LPG safety, refills, cylinders, installation and our company. If your question is not here, just ask us."
        breadcrumbs={[{ label: 'FAQ', href: '/faq' }]}
      >
        <nav aria-label="FAQ topics" className={styles.topics}>
          {faqCategories.map((category) => (
            <a key={category} href={`#${slug(category)}`} className={styles.topic}>
              {category}
            </a>
          ))}
        </nav>
      </PageHero>

      {faqCategories.map((category, index) => (
        <Section
          key={category}
          id={slug(category)}
          labelledBy={`${slug(category)}-title`}
          spacing="sm"
          tone={index % 2 === 0 ? 'surface' : 'default'}
          container="narrow"
        >
          <h2 id={`${slug(category)}-title`} className={styles.heading}>
            {category}
          </h2>
          <FaqList
            faqs={faqs.filter((faq) => faq.category === category)}
            structuredData={false}
            defaultOpenFirst={index === 0}
          />
        </Section>
      ))}

      <CtaBand
        title="Still have a question?"
        text="Call, WhatsApp or email our Hatfield team. We are happy to help, even if you are not a customer yet."
      />
    </>
  );
}
