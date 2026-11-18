import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  size?: 'default' | 'wide' | 'narrow';
  as?: ElementType;
  className?: string;
}

/** Centres content and applies the responsive side gutter */
export function Container({
  children,
  size = 'default',
  as: Tag = 'div',
  className,
}: ContainerProps) {
  return <Tag className={cn(styles.container, styles[size], className)}>{children}</Tag>;
}
