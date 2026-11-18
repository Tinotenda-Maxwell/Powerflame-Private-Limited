import {
  ArrowRight,
  ArrowUpRight,
  Ban,
  BadgeCheck,
  BookOpen,
  Building,
  CalendarDays,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  Clock,
  Cylinder,
  DoorOpen,
  Eye,
  FireExtinguisher,
  Flame,
  Gauge,
  Hand,
  Handshake,
  HardHat,
  House,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Scale,
  School,
  Settings2,
  ShieldCheck,
  Sparkles,
  Store,
  Thermometer,
  Timer,
  Tractor,
  TriangleExclamationPoint,
  Users,
  UtensilsCrossed,
  Wind,
  Wrench,
  Zap,
  Hotel,
  type LucideIcon,
} from 'lucide-react';

/**
 * Content files refer to icons by name (e.g. icon: 'flame') so that wording and
 * data stay free of React code. Add a new icon here to make it available.
 */
const icons = {
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  ban: Ban,
  'badge-check': BadgeCheck,
  'book-open': BookOpen,
  building: Building,
  calendar: CalendarDays,
  'chevron-down': ChevronDown,
  'circle-check': CircleCheck,
  'clipboard-check': ClipboardCheck,
  clock: Clock,
  cylinder: Cylinder,
  door: DoorOpen,
  eye: Eye,
  'fire-extinguisher': FireExtinguisher,
  flame: Flame,
  gauge: Gauge,
  hand: Hand,
  handshake: Handshake,
  'hard-hat': HardHat,
  home: House,
  hotel: Hotel,
  leaf: Leaf,
  lightbulb: Lightbulb,
  mail: Mail,
  'map-pin': MapPin,
  message: MessageCircle,
  package: Package,
  phone: Phone,
  scale: Scale,
  school: School,
  settings: Settings2,
  'shield-check': ShieldCheck,
  sparkles: Sparkles,
  store: Store,
  thermometer: Thermometer,
  timer: Timer,
  tractor: Tractor,
  warning: TriangleExclamationPoint,
  users: Users,
  utensils: UtensilsCrossed,
  wind: Wind,
  wrench: Wrench,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  /** Icons are decorative by default. Pass a label to make one meaningful. */
  label?: string;
}

export function Icon({ name, size = 22, strokeWidth = 1.75, className, label }: IconProps) {
  const Component = icons[name];
  return (
    <Component
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      focusable="false"
    />
  );
}
