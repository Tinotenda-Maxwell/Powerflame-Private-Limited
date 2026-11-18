import { homeContent } from '@/content/home';
import { images } from '@/content/images';
import { Reveal } from '@/components/animation/Reveal';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VideoSlot } from '@/components/ui/VideoPlayer';
import { Steps } from '../Steps';
import styles from './RefillProcess.module.css';

/** "How a safe refill works": video slot (falls back to a photo slot) + four steps */
export function RefillProcess() {
  const { refill } = homeContent;
  return (
    <Section tone="surface" grid labelledBy="refill-title">
      <div className={styles.top}>
        <SectionHeader
          id="refill-title"
          eyebrow={refill.eyebrow}
          title={refill.title}
          highlight={refill.highlight}
          intro={refill.intro}
        />
        <Reveal className={styles.media}>
          <VideoSlot
            video="safeRefill"
            className={styles.video}
            fallback={
              <ImageSlot image={images.aboutSafety} sizes="(min-width: 1024px) 50vw, 100vw" />
            }
          />
        </Reveal>
      </div>
      <Steps steps={refill.steps} />
    </Section>
  );
}
