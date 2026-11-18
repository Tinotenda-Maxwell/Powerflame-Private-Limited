import { MessageCircle, Phone } from 'lucide-react';
import { phoneHref, site, whatsappHref } from '@/config/site';
import { homeContent } from '@/content/home';
import { MagneticButton } from '@/components/animation/MagneticButton';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import styles from './CtaBand.module.css';

interface CtaBandProps {
  title?: string;
  text?: string;
}

/** Call-to-action band with a slowly drifting red-to-amber gradient */
export function CtaBand({
  title = homeContent.cta.title,
  text = homeContent.cta.text,
}: CtaBandProps) {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <Container size="wide">
        <div className={styles.band}>
          <span className={styles.gradient} aria-hidden="true" />
          <span className={styles.glow} aria-hidden="true" />
          <div className={styles.copy}>
            <Pill tone="primary">Talk to our Harare team</Pill>
            <h2 id="cta-title" className={styles.title}>
              {title}
            </h2>
            <p className={styles.text}>{text}</p>
          </div>
          <div className={styles.actions}>
            <MagneticButton>
              <Button href="/contact" variant="light" size="lg">
                Get in touch
              </Button>
            </MagneticButton>
            <Button
              href={whatsappHref()}
              variant="ghost"
              size="lg"
              external
              icon={<MessageCircle size={18} aria-hidden="true" />}
            >
              WhatsApp
            </Button>
            <a href={phoneHref} className={styles.phone}>
              <Phone size={16} aria-hidden="true" />
              Call {site.contact.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
