'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useSaveData } from '@/hooks/useSaveData';
import { cn } from '@/lib/utils';
import styles from './VideoPlayer.module.css';

export interface BackgroundVideoProps {
  mp4?: string;
  webm?: string;
  poster?: string;
  /** Describes the video for screen readers */
  label: string;
  className?: string;
}

/**
 * Muted, looping, inline video that:
 *  - only loads when it is close to the viewport
 *  - pauses when scrolled out of view
 *  - shows the poster image instead on phones, on Data Saver / 2G
 *    connections and when the visitor prefers reduced motion
 *  - quietly falls back to the poster if the file fails to load
 */
export function BackgroundVideo({ mp4, webm, poster, label, className }: BackgroundVideoProps) {
  const [ref, inView, hasBeenNear] = useInView<HTMLDivElement>({ rootMargin: '300px' });
  const [failed, setFailed] = useState(false);
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const isMobile = useMediaQuery('(max-width: 767px)', true);
  const saveData = useSaveData();
  const reducedMotion = useReducedMotion();

  const canPlay = Boolean(mp4 || webm) && !isMobile && !saveData && !reducedMotion && !failed;
  const showVideo = canPlay && hasBeenNear;

  // Pause when off-screen to save battery and CPU
  useEffect(() => {
    if (!video) return;
    if (inView) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [inView, video]);

  return (
    <div ref={ref} className={cn(styles.media, className)} role="img" aria-label={label}>
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element -- decorative poster, pre-optimised
        <img src={poster} alt="" className={styles.poster} loading="lazy" decoding="async" />
      )}
      {showVideo && (
        <video
          ref={setVideo}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          onError={() => setFailed(true)}
        >
          {webm && <source src={webm} type="video/webm" onError={() => !mp4 && setFailed(true)} />}
          {mp4 && <source src={mp4} type="video/mp4" onError={() => setFailed(true)} />}
        </video>
      )}
    </div>
  );
}
