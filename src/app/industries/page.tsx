import { CircleCheck } from 'lucide-react';
import { industries } from '@/content/industries';
import { Reveal } from '@/components/animation/Reveal';
import { CtaBand } from '@/components/sections/CtaBand';
import { PageHero } from '@/components/sections/PageHero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Button } from '@/components/ui/Button';
import { IconBox } from '@/components/ui/IconBox';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/lib/seo';
import styles from './industries.module.css';

export const metadata = buildMetadata({
  title: 'Industries We Serve: LPG for Homes & Businesses',
  description:
    'How LPG helps homes, restaurants, hotels, lodges, schools, businesses and farms in Harare, and the gas cylinders and setups Powerflame Energy recommends.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we serve"
        title="Clean gas for every kind of"
        highlight="kitchen in Harare"
        intro="From a family cooking supper in Hatfield to a boarding school feeding hundreds of students, LPG is a fast, clean and reliable energy source. Here is how it helps each of our customers, and what we recommend."
        breadcrumbs={[{ label: 'Industries', href: '/industries' }]}
        actions={<Button href="/contact">Discuss your needs</Button>}
      >
        <nav aria-label="Jump to an industry" className={styles.jump}>
          {industries.map((industry) => (
            <a key={industry.slug} href={`#${industry.slug}`} className={styles.jumpLink}>
              {industry.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {industries.map((industry, index) => (
        <Section
          key={industry.slug}
          id={industry.slug}
          labelledBy={`${industry.slug}-title`}
          spacing="sm"
          tone={index % 2 === 0 ? 'default' : 'surface'}
        >
          <div className={`${styles.row} ${index % 2 === 1 ? styles.reverse : ''}`}>
            <Reveal className={styles.media}>
              <ImageSlot image={industry.image} sizes="(min-width: 1024px) 40vw, 100vw" />
            </Reveal>
            <div className={styles.copy}>
              <div className={styles.titleRow}>
                <IconBox icon={industry.icon} size="lg" />
                <h2 id={`${industry.slug}-title`} className={styles.title}>
                  LPG for {industry.name.toLowerCase()}
                </h2>
              </div>
              <p className={styles.summary}>{industry.summary}</p>
              <h3 className={styles.small}>How LPG helps</h3>
              <ul className={styles.list} role="list">
                {industry.howLpgHelps.map((point) => (
                  <li key={point.slice(0, 24)}>
                    <CircleCheck size={20} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.recommended}>
                <span className={styles.recommendedLabel}>Typical setup</span>
                {industry.recommended}
              </p>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="warm" grid labelledBy="industry-services-title">
        <SectionHeader
          id="industry-services-title"
          eyebrow="What we offer"
          title="Services for"
          highlight="every customer"
          intro="Whatever kind of kitchen you run, these are the services we provide."
        />
        <ServicesGrid />
      </Section>

      <CtaBand
        title="Not sure what setup you need?"
        text="Tell us about your home or business and our team will recommend the right cylinder size, equipment and installation."
      />
    </>
  );
}
