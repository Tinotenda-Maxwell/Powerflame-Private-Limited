import { TriangleExclamationPoint } from 'lucide-react';
import { homeContent } from '@/content/home';
import { safetyChecklist } from '@/content/safety';
import { DrawnChecklist } from '@/components/animation/DrawnChecklist';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './SafetyTeaser.module.css';

/** Dark "Safety first" panel with a self-drawing checklist */
export function SafetyTeaser() {
  const { safety } = homeContent;
  return (
    <section className={styles.section} aria-labelledby="safety-teaser-title">
      <Container size="wide">
        <div className={styles.panel}>
          <span className={styles.glow} aria-hidden="true" />
          <span className={styles.grid} aria-hidden="true" />
          <div className={styles.copy}>
            <SectionHeader
              id="safety-teaser-title"
              eyebrow={safety.eyebrow}
              title={safety.title}
              highlight={safety.highlight}
              intro={safety.intro}
              tone="dark"
            />
            <div className={styles.alert}>
              <TriangleExclamationPoint size={20} aria-hidden="true" />
              <p>
                <strong>Smell gas?</strong> No flames or switches. Close the valve, open windows,
                get everyone out and call for help from outside.
              </p>
            </div>
            <div className={styles.actions}>
              <Button href="/gas-safety" variant="light">
                Read the safety guide
              </Button>
              <Button href="/gas-safety#smell-gas" variant="ghost">
                If you smell gas
              </Button>
            </div>
          </div>
          <DrawnChecklist items={safetyChecklist} />
        </div>
      </Container>
    </section>
  );
}
