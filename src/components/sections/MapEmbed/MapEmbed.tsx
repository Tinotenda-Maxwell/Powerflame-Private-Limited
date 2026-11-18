import { MapPin } from 'lucide-react';
import { fullAddress, mapsEmbedUrl, mapsLinkUrl } from '@/config/site';
import styles from './MapEmbed.module.css';

/** Lazy-loaded Google Map of our address (no API key needed) */
export function MapEmbed() {
  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        <iframe
          src={mapsEmbedUrl}
          title={`Map showing Powerflame Energy at ${fullAddress}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.iframe}
        />
      </div>
      <figcaption className={styles.caption}>
        <MapPin size={16} aria-hidden="true" />
        <span>{fullAddress}</span>
        <a href={mapsLinkUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Open in Google Maps
        </a>
      </figcaption>
    </figure>
  );
}
