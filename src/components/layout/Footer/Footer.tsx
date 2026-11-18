import Link from 'next/link';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { emailHref, footerNav, mapsLinkUrl, phoneHref, site, whatsappHref } from '@/config/site';
import { services } from '@/content/services';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { SocialIcon } from '@/components/ui/SocialIcon';
import styles from './Footer.module.css';

export function Footer() {
  // Set at build time. Rebuild the site each year (or on any content change).
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid} aria-hidden="true" />
      <Container size="wide" className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logoLink}>
              <Logo tone="light" />
            </Link>
            <p className={styles.tagline}>{site.tagline}</p>
            <p className={styles.areas}>
              Proudly serving {site.address.suburb} and greater {site.address.city}.
            </p>
            <ul className={styles.social} role="list" aria-label="Social media">
              {site.social.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={`Powerflame Energy on ${social.name}`}
                    {...(social.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <SocialIcon name={social.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className={styles.column} aria-labelledby="footer-services">
            <h2 id="footer-services" className={styles.heading}>
              Services
            </h2>
            <ul role="list" className={styles.links}>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className={styles.link}>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className={styles.link}>
                  All services
                </Link>
              </li>
            </ul>
          </nav>

          {footerNav.map((group) => {
            const id = `footer-${group.title.toLowerCase()}`;
            return (
              <nav key={group.title} className={styles.column} aria-labelledby={id}>
                <h2 id={id} className={styles.heading}>
                  {group.title}
                </h2>
                <ul role="list" className={styles.links}>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}

          <div className={styles.column}>
            <h2 className={styles.heading}>Contact</h2>
            <address className={styles.contact}>
              <a
                href={mapsLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <MapPin size={16} aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.suburb}, {site.address.city}
                </span>
              </a>
              <a href={phoneHref} className={styles.contactItem}>
                <Phone size={16} aria-hidden="true" />
                <span>{site.contact.phone}</span>
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <MessageCircle size={16} aria-hidden="true" />
                <span>WhatsApp {site.contact.whatsapp}</span>
              </a>
              <a href={emailHref} className={styles.contactItem}>
                <Mail size={16} aria-hidden="true" />
                <span>{site.contact.email}</span>
              </a>
              <p className={styles.contactItem}>
                <Clock size={16} aria-hidden="true" />
                <span>{site.hours.display}</span>
              </p>
            </address>
          </div>
        </div>

        <p className={styles.wordmark} aria-hidden="true">
          Powerflame
        </p>

        <div className={styles.bottom}>
          <p>
            {site.legalName} · Company no. {site.registration.companyNumber} ·{' '}
            {site.registration.zeraLicence}
          </p>
          <p>
            © {year} {site.name}. All rights reserved. ·{' '}
            <Link href="/privacy-policy" className={styles.bottomLink}>
              Privacy policy
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
