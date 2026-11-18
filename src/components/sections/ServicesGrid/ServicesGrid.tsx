import { Reveal } from '@/components/animation/Reveal';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { services } from '@/content/services';
import styles from './ServicesGrid.module.css';

/** Grid of service cards linking to each service page */
export function ServicesGrid({ headingLevel = 'h3' }: { headingLevel?: 'h2' | 'h3' }) {
  return (
    <ul className={styles.grid} role="list">
      {services.map((service, index) => (
        <Reveal as="li" key={service.slug} delay={index * 90} className={styles.item}>
          <ServiceCard
            icon={service.icon}
            title={service.title}
            description={service.summary}
            caption={service.caption}
            tag={service.tag}
            href={`/services/${service.slug}`}
            headingLevel={headingLevel}
          />
        </Reveal>
      ))}
    </ul>
  );
}
