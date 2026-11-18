import { CircleCheck } from 'lucide-react';
import { aboutContent } from '@/content/about';
import { images } from '@/content/images';
import { Reveal } from '@/components/animation/Reveal';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { PageHero } from '@/components/sections/PageHero';
import { RefillProcess } from '@/components/sections/RefillProcess';
import { Button } from '@/components/ui/Button';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/lib/seo';
import styles from '../_styles/page.module.css';

export const metadata = buildMetadata({
  title: 'About Us: A Proudly Zimbabwean LPG Company',
  description:
    'Meet Powerflame Energy, a new, proudly Zimbabwean LPG gas company in Hatfield, Harare. Our story, mission, values and commitment to safe, honest cooking gas.',
  path: '/about',
});

export default function AboutPage() {
  const { hero, story, whatWeDo, mission, vision, values, commitment } = aboutContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.headline}
        highlight={hero.highlight}
        intro={hero.intro}
        breadcrumbs={[{ label: 'About', href: '/about' }]}
        actions={
          <>
            <Button href="/services">Our services</Button>
            <Button href="/contact" variant="outline">
              Visit us in Hatfield
            </Button>
          </>
        }
        aside={
          <ImageSlot image={images.aboutStory} priority sizes="(min-width: 1024px) 45vw, 100vw" />
        }
      />

      <Section labelledBy="story-title">
        <div className={styles.split}>
          <SectionHeader
            id="story-title"
            eyebrow={story.eyebrow}
            title={story.title}
            highlight={story.highlight}
          />
          <Reveal>
            {story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className={styles.body}>
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" grid labelledBy="what-title">
        <SectionHeader
          id="what-title"
          eyebrow={whatWeDo.eyebrow}
          title={whatWeDo.title}
          highlight={whatWeDo.highlight}
        />
        <FeatureGrid items={whatWeDo.items} />
      </Section>

      <Section labelledBy="mission-title">
        <h2 id="mission-title" className="sr-only">
          Mission and vision
        </h2>
        <div className={styles.twoCol}>
          <Reveal className={styles.cardDark}>
            <h3 className={styles.cardTitle}>{mission.title}</h3>
            <p>{mission.text}</p>
          </Reveal>
          <Reveal delay={120} className={styles.cardDark}>
            <h3 className={styles.cardTitle}>{vision.title}</h3>
            <p>{vision.text}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="warm" grid labelledBy="values-title">
        <SectionHeader
          id="values-title"
          eyebrow={values.eyebrow}
          title={values.title}
          highlight={values.highlight}
          align="center"
        />
        <FeatureGrid items={values.items} numbered />
      </Section>

      <Section labelledBy="commitment-title">
        <div className={`${styles.split} ${styles.splitCenter}`}>
          <Reveal>
            <ImageSlot image={images.aboutSafety} sizes="(min-width: 1024px) 45vw, 100vw" />
          </Reveal>
          <div>
            <SectionHeader
              id="commitment-title"
              eyebrow={commitment.eyebrow}
              title={commitment.title}
              highlight={commitment.highlight}
              intro={commitment.intro}
            />
            <ul className={styles.checkList} role="list">
              {commitment.points.map((point) => (
                <li key={point.slice(0, 24)}>
                  <CircleCheck size={20} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className={styles.spaced}>
              <Button href="/gas-safety" variant="dark">
                Read our gas safety guide
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <RefillProcess />
      <CtaBand />
    </>
  );
}
