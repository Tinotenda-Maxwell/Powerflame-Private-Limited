'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { headerCtas, mainNav } from '@/config/site';
import { MagneticButton } from '@/components/animation/MagneticButton';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';
import { MobileMenu } from '../MobileMenu';
import styles from './Header.module.css';

const desktopLinks = mainNav.filter((link) => link.href !== '/');

const isActive = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

// useLayoutEffect warns during server rendering; fall back to useEffect there
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // The menu remembers the page it was opened on, so it closes itself after navigating
  const [menuOpenedOn, setMenuOpenedOn] = useState<string | null>(null);
  const menuOpen = menuOpenedOn === pathname;
  const [indicator, setIndicator] = useState({ x: 0, width: 0, visible: false });
  const listRef = useRef<HTMLUListElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /** Slide the underline to a link (or back to the active link) */
  const moveIndicator = useCallback((target: HTMLElement | null) => {
    const list = listRef.current;
    if (!list || !target) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }
    const listRect = list.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    setIndicator({ x: rect.left - listRect.left, width: rect.width, visible: true });
  }, []);

  const resetIndicator = useCallback(() => {
    moveIndicator(listRef.current?.querySelector<HTMLElement>('[aria-current="page"]') ?? null);
  }, [moveIndicator]);

  useIsomorphicLayoutEffect(() => {
    resetIndicator();
  }, [pathname, resetIndicator]);

  // After the first client-side route change, enable the page transition (see globals.css)
  const firstPath = useRef(pathname);
  useEffect(() => {
    if (pathname !== firstPath.current) {
      document.documentElement.setAttribute('data-navigated', '');
    }
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('resize', resetIndicator);
    document.fonts?.ready.then(resetIndicator).catch(() => undefined);
    return () => window.removeEventListener('resize', resetIndicator);
  }, [resetIndicator]);

  const closeMenu = useCallback(() => {
    setMenuOpenedOn(null);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled, menuOpen && styles.menuOpen)}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logoLink}>
          <Logo />
        </Link>

        <nav aria-label="Main" className={styles.nav}>
          <ul ref={listRef} className={styles.links} onPointerLeave={resetIndicator} role="list">
            {desktopLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(styles.link, active && styles.active)}
                    aria-current={active ? 'page' : undefined}
                    onPointerEnter={(event) => moveIndicator(event.currentTarget)}
                    onFocus={(event) => moveIndicator(event.currentTarget)}
                    onBlur={resetIndicator}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li
              aria-hidden="true"
              className={styles.indicator}
              style={{
                transform: `translate3d(${indicator.x}px, 0, 0) scaleX(${indicator.width})`,
                opacity: indicator.visible ? 1 : 0,
              }}
            />
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button
            href={headerCtas.secondary.href}
            variant="outline"
            className={styles.secondaryCta}
          >
            {headerCtas.secondary.label}
          </Button>
          <MagneticButton>
            <Button href={headerCtas.primary.href} className={styles.primaryCta}>
              {headerCtas.primary.label}
            </Button>
          </MagneticButton>
          <button
            ref={menuButtonRef}
            type="button"
            className={cn(styles.burger, menuOpen && styles.burgerOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpenedOn(menuOpen ? null : pathname)}
          >
            <span className={styles.burgerLines} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={closeMenu} pathname={pathname} />
    </header>
  );
}
