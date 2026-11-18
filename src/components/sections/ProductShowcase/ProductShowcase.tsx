import { ArrowUpRight } from 'lucide-react';
import { whatsappHref } from '@/config/site';
import { productShowcase, type Product } from '@/content/products';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { publicFileExists } from '@/lib/files';
import styles from './ProductShowcase.module.css';

function ProductCard({ product, hidden }: { product: Product; hidden: boolean }) {
  const hasImage = publicFileExists(product.image);
  return (
    <li className={styles.card}>
      <div className={styles.media}>
        <span className={styles.glow} aria-hidden="true" />
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element -- static export: product files are pre-optimised
          <img
            src={product.image}
            alt={hidden ? '' : product.name}
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
            className={styles.image}
          />
        ) : (
          <span className={styles.placeholder} aria-hidden="true">
            <Icon name={product.icon} size={44} strokeWidth={1.5} />
          </span>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.detail}>{product.detail}</p>
        <a
          href={whatsappHref(`Hi Powerflame, I'd like to ask about the ${product.name}.`)}
          className={styles.enquire}
          target="_blank"
          rel="noopener noreferrer"
          // The second copy of the list only exists for the endless loop
          tabIndex={hidden ? -1 : undefined}
        >
          Enquire
          <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only"> about the {product.name} on WhatsApp</span>
        </a>
      </div>
    </li>
  );
}

/**
 * Product cards sliding endlessly under the hero, on a light warm band. Pauses on hover and while
 * a card has keyboard focus; becomes a swipeable row for reduced motion.
 */
export function ProductShowcase() {
  const { items } = productShowcase;
  const list = (hidden: boolean) => (
    <ul className={styles.list} aria-hidden={hidden || undefined} role="list">
      {items.map((product) => (
        <ProductCard key={product.name} product={product} hidden={hidden} />
      ))}
    </ul>
  );

  return (
    <section className={styles.showcase} aria-labelledby="products-title">
      <span className={styles.grid} aria-hidden="true" />
      <div className={styles.header}>
        <SectionHeader
          id="products-title"
          eyebrow={productShowcase.eyebrow}
          title={productShowcase.title}
          highlight={productShowcase.highlight}
          intro={productShowcase.intro}
        />
      </div>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {list(false)}
          {list(true)}
        </div>
      </div>
    </section>
  );
}
