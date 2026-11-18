import { ArrowRight, MessageCircle } from 'lucide-react';
import { announcement, whatsappHref } from '@/config/site';
import styles from './AnnouncementBar.module.css';

/** Slim navy bar above the header: a short message plus a WhatsApp shortcut */
export function AnnouncementBar() {
  return (
    <aside className={styles.bar} aria-label="Announcement">
      <div className={styles.inner}>
        <p className={styles.message}>
          <span className={styles.text}>{announcement.message}</span>
          <span className={styles.short}>{announcement.shortMessage}</span>{' '}
          <a
            href={whatsappHref(announcement.whatsappMessage)}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {announcement.linkLabel}
          </a>
        </p>
        <a href={whatsappHref()} className={styles.chat} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={16} aria-hidden="true" />
          {announcement.chatLabel}
          <ArrowRight size={14} aria-hidden="true" className={styles.arrow} />
        </a>
      </div>
    </aside>
  );
}
