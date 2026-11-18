'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { emailHref, headerCtas, mainNav, phoneHref, site, whatsappHref } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Full-screen menu for phones and tablets, with focus trapping and Escape to close */
export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
    const firstLink = focusables()[0];
    firstLink?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          id="mobile-menu"
          ref={panelRef}
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease }}
        >
          <span className={styles.glow} aria-hidden="true" />
          <nav aria-label="Mobile" className={styles.nav}>
            <ul className={styles.list} role="list">
              {mainNav.map((link, index) => {
                const active =
                  link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                return (
                  <m.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.45, delay: 0.05 + index * 0.05, ease }}
                  >
                    <Link
                      href={link.href}
                      className={cn(styles.link, active && styles.active)}
                      aria-current={active ? 'page' : undefined}
                      onClick={onClose}
                    >
                      <span className={styles.index} aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </Link>
                  </m.li>
                );
              })}
            </ul>
          </nav>

          <m.div
            className={styles.footer}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, delay: 0.4, ease }}
          >
            <div className={styles.ctas}>
              <Button href={headerCtas.primary.href} size="lg">
                {headerCtas.primary.label}
              </Button>
              <Button
                href={whatsappHref()}
                variant="outline"
                size="lg"
                external
                icon={<MessageCircle size={18} aria-hidden="true" />}
              >
                WhatsApp us
              </Button>
            </div>
            <ul className={styles.contact} role="list">
              <li>
                <Phone size={16} aria-hidden="true" />
                <a href={phoneHref}>{site.contact.phone}</a>
              </li>
              <li>
                <Mail size={16} aria-hidden="true" />
                <a href={emailHref}>{site.contact.email}</a>
              </li>
              <li>
                <MapPin size={16} aria-hidden="true" />
                <span>
                  {site.address.street}, {site.address.suburb}
                </span>
              </li>
              <li>
                <Clock size={16} aria-hidden="true" />
                <span>{site.hours.display}</span>
              </li>
            </ul>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
