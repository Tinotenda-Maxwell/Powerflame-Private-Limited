import { CalendarDays, MapPin } from 'lucide-react';
import { site } from '@/config/site';
import { homeContent } from '@/content/home';
import { images } from '@/content/images';
import { Reveal } from '@/components/animation/Reveal';
import { Button } from '@/components/ui/Button';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './AboutTeaser.module.css';

export function AboutTeaser() {
  const { about } = homeContent;
  return (
    <Section labelledBy="about-teaser-title">
      <div className={styles.layout}>
        <Reveal className={styles.media}>
          <ImageSlot image={images.aboutStory} sizes="(min-width: 1024px) 45vw, 100vw" />
          <div className={styles.card}>
            <p className={styles.cardRow}>
              <CalendarDays size={16} aria-hidden="true" />
              Registered {site.registration.incorporatedOnDisplay}
            </p>
            <p className={styles.cardRow}>
              <MapPin size={16} aria-hidden="true" />
              {site.address.suburb}, {site.address.city}
            </p>
          </div>
        </Reveal>
        <Reveal delay={120} className={styles.copy}>
          <SectionHeader
            id="about-teaser-title"
            eyebrow={about.eyebrow}
            title={about.title}
            highlight={about.highlight}
          />
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className={styles.text}>
              {p}
            </p>
          ))}
          <Button href="/about" variant="dark">
            More about Powerflame
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
