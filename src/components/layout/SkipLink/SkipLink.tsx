import styles from './SkipLink.module.css';

/** Lets keyboard users jump straight past the navigation */
export function SkipLink() {
  return (
    <a href="#main" className={styles.skip}>
      Skip to main content
    </a>
  );
}
