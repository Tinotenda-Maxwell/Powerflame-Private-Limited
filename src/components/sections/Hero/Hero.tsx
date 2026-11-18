import { CircleCheck } from 'lucide-react';
import { Fragment, type CSSProperties } from 'react';
import { headerCtas } from '@/config/site';
import { homeContent } from '@/content/home';
import { images } from '@/content/images';
import { MagneticButton } from '@/components/animation/MagneticButton';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import { VideoSlot, hasVideo } from '@/components/ui/VideoPlayer';
import { splitWords } from '@/lib/utils';
import styles from './Hero.module.css';

/** Home page hero: word-by-word headline beside the branded team photo, with optional background video */
export function Hero() {
  const { hero } = homeContent;
  const before = splitWords(hero.before);
  const highlight = splitWords(hero.highlight);
  const withVideo = hasVideo('hero');
  let wordIndex = 0;

  const word = (text: string, highlighted = false) => {
    const index = wordIndex++;
    return (
      <Fragment key={`${text}-${index}`}>
        <span
          className={highlighted ? `${styles.word} ${styles.highlight}` : styles.word}
          style={{ '--i': index } as CSSProperties}
        >
          {text}
        </span>{' '}
      </Fragment>
    );
  };

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.background} aria-hidden="true">
        {withVideo && (
          <>
            <VideoSlot video="hero" className={styles.video} />
            <span className={styles.videoOverlay} />
          </>
        )}
        <span className={styles.grid} />
        <span className={`${styles.glow} ${styles.glowRed}`} />
        <span className={`${styles.glow} ${styles.glowAmber}`} />
      </div>

      <Container size="wide" className={styles.inner}>
        <div className={styles.copy}>
          <Pill className={styles.pill}>{hero.eyebrow}</Pill>
          <h1 id="hero-title" className={styles.title}>
            {before.map((w) => word(w))}
            {highlight.map((w) => word(w, true))}
          </h1>
          <p className={styles.intro}>{hero.intro}</p>
          <div className={styles.actions}>
            <MagneticButton>
              <Button href={headerCtas.primary.href} size="lg">
                {headerCtas.primary.label}
              </Button>
            </MagneticButton>
            <Button href={headerCtas.secondary.href} variant="outline" size="lg">
              {headerCtas.secondary.label}
            </Button>
          </div>
          <ul className={styles.badges} role="list">
            {hero.badges.map((badge) => (
              <li key={badge}>
                <CircleCheck size={16} aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.stage}>
          <picture className={styles.person}>
            {/* Desktop: pointing pose; phones and tablets keep the crossed-arms pose */}
            <source
              media="(min-width: 1024px)"
              srcSet={images.heroDesktop.src}
              width={images.heroDesktop.width}
              height={images.heroDesktop.height}
            />
            <img
              src={images.heroMain.src}
              alt={images.heroMain.alt}
              width={images.heroMain.width}
              height={images.heroMain.height}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </picture>
        </div>
      </Container>
    </section>
  );
}
