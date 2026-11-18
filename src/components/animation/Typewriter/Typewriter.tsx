'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import styles from './Typewriter.module.css';

interface TypewriterProps {
  /** Words typed in turn. The first one is shown fully on first paint (and to search engines). */
  words: string[];
  /** Wait before the first word starts being deleted, e.g. to let an intro animation finish */
  startDelay?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  /** How long a finished word stays on screen */
  holdTime?: number;
  className?: string;
}

/**
 * Types each word character by character, holds it, deletes it and moves on
 * to the next, with a blinking cursor. Visitors who prefer reduced motion
 * see the first word only.
 */
export function Typewriter({
  words,
  startDelay = 2600,
  typeSpeed = 95,
  deleteSpeed = 50,
  holdTime = 1900,
  className,
}: TypewriterProps) {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(words[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  const word = words[wordIndex] ?? '';

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;

    let delay: number;
    let step: () => void;

    if (!started) {
      delay = startDelay;
      step = () => {
        setStarted(true);
        setDeleting(true);
      };
    } else if (deleting) {
      if (length > 0) {
        delay = deleteSpeed;
        step = () => setLength((l) => l - 1);
      } else {
        delay = typeSpeed * 3;
        step = () => {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        };
      }
    } else if (length < word.length) {
      delay = typeSpeed;
      step = () => setLength((l) => l + 1);
    } else {
      delay = holdTime;
      step = () => setDeleting(true);
    }

    const timer = window.setTimeout(step, delay);
    return () => window.clearTimeout(timer);
  }, [
    reduceMotion,
    words.length,
    started,
    deleting,
    length,
    word.length,
    startDelay,
    typeSpeed,
    deleteSpeed,
    holdTime,
  ]);

  const shown = reduceMotion ? (words[0] ?? '') : word.slice(0, length);

  return (
    <span className={cn(styles.typewriter, className)}>
      {shown}
      <span className={cn(styles.cursor, reduceMotion && styles.hidden)} aria-hidden="true" />
    </span>
  );
}
