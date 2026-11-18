'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

interface Options {
  /** Margin around the viewport, e.g. '200px' to trigger before it appears */
  rootMargin?: string;
  threshold?: number;
  /** Stop observing after the first time it comes into view */
  once?: boolean;
}

/**
 * Tracks whether an element is in (or near) the viewport.
 * Returns [ref, inView, hasEverBeenInView].
 */
export function useInView<T extends Element>({
  rootMargin = '0px',
  threshold = 0,
  once = false,
}: Options = {}): [RefObject<T | null>, boolean, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setHasEntered(true);
        if (entry.isIntersecting && once) observer.disconnect();
      },
      { rootMargin, threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return [ref, inView, hasEntered];
}
