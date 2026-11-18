import type { ReactNode } from 'react';
import { PageTransition } from '@/components/animation/PageTransition';

/** Re-mounted by Next.js on every navigation, which replays the page transition */
export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
