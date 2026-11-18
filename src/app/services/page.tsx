import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/content/services';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { PageHero } from '@/components/sections/PageHero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Steps } from '@/components/sections/Steps';
import { Button } from '@/components/ui/Button';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { JsonLd } from '@/components/ui/JsonLd';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/animation/Reveal';
import { homeContent } from '@/content/home';
import { buildMetadata, graph, itemListJsonLd } from '@/lib/seo';
import styles from '../_styles/page.module.css';

export const metadata = buildMetadata({
  title: 'Services: LPG Refills, Cylinders & Installation',
  description:
    'Powerflame Energy services in Harare: LPG gas refills, gas cylinders and accessories, gas stoves and safety equipment, and gas installation and repairs.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          itemListJsonLd(services.map((s) => ({ name: s.title, url: `/services/${s.slug}` }))),
        )}
      />
      <PageHero
        eyebrow="Our services"
        title="Cooking gas, equipment and installation,"
        highlight="all in one place"
        intro="Whether you need a quick refill, your first gas setup or a full commercial kitchen installation, Powerflame Energy is your cooking gas supplier in Harare. Here is everything we do."
        breadcrumbs={[{ label: 'Services', href: '/services' }]}
        actions={<Button href="/contact">Ask about a service</Button>}
      />

      <Section tone="surface" grid labelledBy="services-list-title" spacing="sm">
        <h2 id="services-list-title" className="sr-only">
          All services
        </h2>
        <ServicesGrid />
      </Section>

      {services.map((service, index) => (
        <Section key={service.slug} labelledBy={`${service.slug}-title`} spacing="sm">
          <div className={`${styles.split} ${styles.splitCenter}`}>
            <Reveal delay={index === 0 ? 0 : 60}>
              <ImageSlot image={service.image} sizes="(min-width: 1024px) 45vw, 100vw" />
            </Reveal>
            <div className={styles.stack}>
              <SectionHeader
                id={`${service.slug}-title`}
                eyebrow={service.hero.eyebrow}
                title={service.title}
                intro={service.summary}
              />
              <ul className={styles.linkList} role="list">
                {service.includes.map((item) => (
                  <li key={item.title} className={styles.lead}>
                    <strong>{item.title}:</strong> {item.text}
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`} className={styles.linkCard}>
                Learn more about {service.shortTitle.toLowerCase()}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="warm" grid labelledBy="promise-title">
        <SectionHeader
          id="promise-title"
          eyebrow={homeContent.whyChoose.eyebrow}
          title={homeContent.whyChoose.title}
          highlight={homeContent.whyChoose.highlight}
          intro={homeContent.whyChoose.intro}
        />
        <FeatureGrid items={homeContent.whyChoose.points} />
      </Section>

      <Section labelledBy="process-title">
        <SectionHeader
          id="process-title"
          eyebrow={homeContent.refill.eyebrow}
          title={homeContent.refill.title}
          highlight={homeContent.refill.highlight}
          intro={homeContent.refill.intro}
        />
        <Steps steps={homeContent.refill.steps} />
      </Section>

      <CtaBand />
    </>
  );
}
