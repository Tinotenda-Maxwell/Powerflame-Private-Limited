import { Flame } from 'lucide-react';
import { publicFileExists } from '@/lib/files';
import { cn } from '@/lib/utils';
import type { ImageSlotData } from '@/types';
import styles from './ImageSlot.module.css';

interface ImageSlotProps {
  image: ImageSlotData;
  /** Load immediately (use for above-the-fold images only) */
  priority?: boolean;
  /** CSS sizes hint, e.g. '(min-width: 1024px) 50vw, 100vw' */
  sizes?: string;
  className?: string;
  /** Rounded corners (default true) */
  rounded?: boolean;
}

/**
 * Shows a photo if the file exists in /public, otherwise a branded
 * gradient placeholder with a flame icon. It never renders a broken image.
 * If an .avif version exists next to the .webp, browsers that support AVIF use it.
 */
export function ImageSlot({
  image,
  priority = false,
  sizes = '100vw',
  className,
  rounded = true,
}: ImageSlotProps) {
  const exists = publicFileExists(image.src);
  const avif = image.src.replace(/\.(webp|jpe?g|png)$/i, '.avif');
  const hasAvif = avif !== image.src && publicFileExists(avif);
  const ratio = `${image.width} / ${image.height}`;

  if (!exists) {
    return (
      <div
        className={cn(styles.frame, styles.placeholder, rounded && styles.rounded, className)}
        style={{ aspectRatio: ratio }}
        role="img"
        aria-label={image.alt}
      >
        <span className={styles.grid} aria-hidden="true" />
        <span className={styles.glow} aria-hidden="true" />
        <span className={styles.badge} aria-hidden="true">
          <Flame size={28} strokeWidth={1.75} />
        </span>
        {image.placeholderLabel && (
          <span className={styles.label} aria-hidden="true">
            {image.placeholderLabel}
          </span>
        )}
      </div>
    );
  }

  return (
    <picture
      className={cn(styles.frame, rounded && styles.rounded, className)}
      style={{ aspectRatio: ratio }}
    >
      {hasAvif && <source srcSet={avif} type="image/avif" sizes={sizes} />}
      {/* Plain <img>: with static export the images are already optimised WebP/AVIF files */}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={styles.img}
      />
    </picture>
  );
}
