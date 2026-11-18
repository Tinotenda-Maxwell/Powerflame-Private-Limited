import Link from 'next/link';
import { Accordion } from '@/components/ui/Accordion';
import { JsonLd } from '@/components/ui/JsonLd';
import { faqJsonLd, graph } from '@/lib/seo';
import type { Faq } from '@/types';
import styles from './FaqList.module.css';

interface FaqListProps {
  faqs: Faq[];
  /** Add FAQPage structured data (only once per page) */
  structuredData?: boolean;
  headingLevel?: 'h2' | 'h3';
  defaultOpenFirst?: boolean;
}

export function FaqList({
  faqs,
  structuredData = true,
  headingLevel = 'h3',
  defaultOpenFirst = true,
}: FaqListProps) {
  return (
    <>
      {structuredData && <JsonLd data={graph(faqJsonLd(faqs))} />}
      <Accordion
        headingLevel={headingLevel}
        defaultOpen={defaultOpenFirst ? faqs[0]?.id : undefined}
        items={faqs.map((faq) => ({
          id: faq.id,
          title: faq.question,
          content: (
            <>
              <p>{faq.answer}</p>
              {faq.link && (
                <p>
                  <Link href={faq.link.href} className={styles.link}>
                    {faq.link.label} →
                  </Link>
                </p>
              )}
            </>
          ),
        }))}
      />
    </>
  );
}
