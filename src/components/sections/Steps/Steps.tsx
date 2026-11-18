import { Reveal } from '@/components/animation/Reveal';
import { cn } from '@/lib/utils';
import type { Step } from '@/types';
import styles from './Steps.module.css';

/** Numbered process steps joined by a line */
export function Steps({ steps, tone = 'light' }: { steps: Step[]; tone?: 'light' | 'dark' }) {
  return (
    <ol className={cn(styles.steps, styles[tone])}>
      {steps.map((step, index) => (
        <Reveal as="li" key={step.title} delay={index * 100} className={styles.step}>
          <span className={styles.number} aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.text}>{step.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
