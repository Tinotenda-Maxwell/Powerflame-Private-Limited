'use client';

import { useRef, type PointerEvent, type ReactNode } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './MagneticButton.module.css';

interface MagneticButtonProps {
  children: ReactNode;
  /** How far (px) the button can be pulled towards the pointer */
  strength?: number;
}

/**
 * Wraps a button so it is gently pulled towards the mouse pointer and springs
 * back when the pointer leaves. Desktop with a fine pointer only; disabled for
 * reduced motion. Animates `transform` only, with a CSS spring easing.
 */
export function MagneticButton({ children, strength = 14 }: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)');
  const reduced = useReducedMotion();
  const enabled = finePointer && !reduced;

  const handleMove = (event: PointerEvent<HTMLSpanElement>) => {
    const element = ref.current;
    if (!enabled || !element) return;
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * strength * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * strength * 2;
    element.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <span ref={ref} className={styles.magnetic} onPointerMove={handleMove} onPointerLeave={reset}>
      {children}
    </span>
  );
}
