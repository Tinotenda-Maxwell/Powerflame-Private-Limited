import { cn } from '@/lib/utils';
import type { IconName } from '@/types';
import { Icon } from '../Icon';
import styles from './IconBox.module.css';

interface IconBoxProps {
  icon: IconName;
  tone?: 'primary' | 'amber' | 'dark' | 'glass';
  size?: 'md' | 'lg';
  className?: string;
}

/** An icon inside a tinted rounded square */
export function IconBox({ icon, tone = 'primary', size = 'md', className }: IconBoxProps) {
  return (
    <span className={cn(styles.box, styles[tone], styles[size], className)} aria-hidden="true">
      <Icon name={icon} size={size === 'lg' ? 26 : 22} />
    </span>
  );
}
