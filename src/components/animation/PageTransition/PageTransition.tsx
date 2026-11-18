import type { ReactNode } from 'react';

/**
 * Fades and slides each page in. Used by src/app/template.tsx, which Next.js
 * re-mounts on every navigation, so the CSS animation (.page-transition in
 * globals.css) replays without any JavaScript cost.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
