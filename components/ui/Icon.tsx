import { memo } from 'react';
import { cn } from '@/lib/cn';

type IconName =
  | 'home'
  | 'journey'
  | 'preferences'
  | 'circle'
  | 'intelligence'
  | 'data'
  | 'spark'
  | 'arrow-right';

type IconProps = {
  name: IconName;
  className?: string;
  'aria-label'?: string;
};

const iconMap: Record<IconName, string> = {
  home: 'M3 11.5 12 4l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  journey: 'M4 6h16M4 12h16M4 18h12m4 0h0',
  preferences: 'M12 3v3m0 12v3M3 12h3m12 0h3m-2.2-6.8-2.1 2.1m-8.4 8.4-2.1 2.1m0-12.6 2.1 2.1m8.4 8.4 2.1 2.1',
  circle: 'M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 9a7 7 0 0 1 14 0',
  intelligence: 'M12 3v4m0 10v4m9-9h-4M7 12H3m15.4 6.4-2.8-2.8M8.4 8.4 5.6 5.6m12.8 0-2.8 2.8M8.4 15.6l-2.8 2.8',
  data: 'M5 4h14a1 1 0 0 1 1 1v4H4V5a1 1 0 0 1 1-1Zm-1 9h16v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z',
  spark: 'M12 3 9.5 9.5 3 12l6.5 2.5L12 21l2.5-6.5L21 12l-6.5-2.5z',
  'arrow-right': 'M5 12h14m-5-5 5 5-5 5'
};

function IconComponent({ name, className, ...props }: IconProps) {
  return (
    <svg
      aria-hidden={!props['aria-label']}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.35"
      viewBox="0 0 24 24"
      className={cn('h-5 w-5 text-accent', className)}
      {...props}
    >
      <path d={iconMap[name]} />
    </svg>
  );
}

export const Icon = memo(IconComponent);
