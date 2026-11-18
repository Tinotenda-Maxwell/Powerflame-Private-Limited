import type { ReactNode } from 'react';
import { videos, type VideoKey } from '@/content/images';
import { publicFileExists } from '@/lib/files';
import { BackgroundVideo } from './BackgroundVideo';

interface VideoSlotProps {
  video: VideoKey;
  className?: string;
  /** Rendered instead when no video or poster file exists yet */
  fallback?: ReactNode;
}

/**
 * Build-time check for the video files listed in src/content/images.ts.
 * Only files that exist are passed to the player, so a missing video never
 * breaks the page. With nothing available, the fallback is shown.
 */
export function VideoSlot({ video, className, fallback = null }: VideoSlotProps) {
  const slot = videos[video];
  const mp4 = publicFileExists(slot.mp4) ? slot.mp4 : undefined;
  const webm = publicFileExists(slot.webm) ? slot.webm : undefined;
  const poster = publicFileExists(slot.poster) ? slot.poster : undefined;

  if (!mp4 && !webm && !poster) return <>{fallback}</>;

  return (
    <BackgroundVideo
      mp4={mp4}
      webm={webm}
      poster={poster}
      label={slot.label}
      className={className}
    />
  );
}

/** True if any file for this video slot exists (used to choose layouts) */
export function hasVideo(video: VideoKey): boolean {
  const slot = videos[video];
  return [slot.mp4, slot.webm, slot.poster].some((src) => publicFileExists(src));
}
