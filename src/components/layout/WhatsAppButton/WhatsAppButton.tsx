import { MessageCircle } from 'lucide-react';
import { whatsappHref } from '@/config/site';
import styles from './WhatsAppButton.module.css';

/** Floating WhatsApp chat button shown on every page */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      className={styles.button}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Powerflame Energy on WhatsApp (opens in a new tab)"
    >
      <span className={styles.ring} aria-hidden="true" />
      <MessageCircle size={26} strokeWidth={2} aria-hidden="true" />
      <span className={styles.tooltip} aria-hidden="true">
        Chat on WhatsApp
      </span>
    </a>
  );
}
