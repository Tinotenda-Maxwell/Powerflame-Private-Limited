import Link from 'next/link';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { emailHref, mapsLinkUrl, phoneHref, site, whatsappHref } from '@/config/site';
import { ContactForm } from '@/components/sections/ContactForm';
import { MapEmbed } from '@/components/sections/MapEmbed';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { buildMetadata } from '@/lib/seo';
import styles from './contact.module.css';

export const metadata = buildMetadata({
  title: 'Contact Us: Gas Refills in Hatfield, Harare',
  description:
    'Contact Powerflame Energy at 7 Masotsha Ndlovu Way, Hatfield, Harare. Call, WhatsApp or email us about gas refills, cylinders, appliances and gas installation.',
  path: '/contact',
});

export default function ContactPage() {
  const methods = [
    {
      icon: <Phone size={20} aria-hidden="true" />,
      label: 'Call us',
      value: site.contact.phone,
      href: phoneHref,
    },
    {
      icon: <MessageCircle size={20} aria-hidden="true" />,
      label: 'WhatsApp',
      value: site.contact.whatsapp,
      href: whatsappHref(),
      external: true,
    },
    {
      icon: <Mail size={20} aria-hidden="true" />,
      label: 'Email',
      value: site.contact.email,
      href: emailHref,
    },
    {
      icon: <MapPin size={20} aria-hidden="true" />,
      label: 'Visit us',
      value: `${site.address.street}, ${site.address.suburb}, ${site.address.city}`,
      href: mapsLinkUrl,
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Talk to our"
        highlight="Hatfield team"
        intro="Questions about a gas refill, a new cylinder, a stove or an installation? Call, WhatsApp, email or visit us. We are happy to give honest advice, with no pressure."
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
      />

      <Section spacing="none" container="wide">
        <ul className={styles.methods} role="list">
          {methods.map((method) => (
            <li key={method.label}>
              <a
                href={method.href}
                className={styles.method}
                {...(method.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className={styles.methodIcon}>{method.icon}</span>
                <span className={styles.methodLabel}>{method.label}</span>
                <span className={styles.methodValue}>{method.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="form-title" container="wide">
        <div className={styles.layout}>
          <div className={styles.formCard}>
            <h2 id="form-title" className={styles.title}>
              Send us a message
            </h2>
            <p className={styles.lead}>
              Fill in the form and we will open WhatsApp with your message ready to send. It is the
              fastest way to reach us.
            </p>
            <ContactForm />
          </div>

          <div className={styles.side}>
            <div className={styles.hours}>
              <h2 className={styles.sideTitle}>
                <Clock size={20} aria-hidden="true" /> Opening hours
              </h2>
              <dl className={styles.hoursList}>
                {site.hours.schedule.map((slot) => (
                  <div key={slot.label} className={styles.hoursRow}>
                    <dt>{slot.label}</dt>
                    <dd>{slot.opens ? `${slot.opens} – ${slot.closes}` : 'Closed'}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className={styles.sideTitle}>
                <MapPin size={20} aria-hidden="true" /> Find us
              </h2>
              <address className={styles.address}>
                {site.legalName}
                <br />
                {site.address.street}
                <br />
                {site.address.suburb}, {site.address.city}
                <br />
                {site.address.country}
              </address>
              <MapEmbed />
            </div>
            <p className={styles.safety}>
              <strong>Smell gas?</strong> Do not wait for a reply. Follow our{' '}
              <Link href="/gas-safety#smell-gas">emergency steps</Link> straight away.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
