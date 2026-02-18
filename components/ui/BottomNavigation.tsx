'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';

const items = [
  { href: '/private-circle', icon: 'home', label: 'Home' },
  { href: '/private-circle/journey', icon: 'journey', label: 'Journey' },
  { href: '/private-circle/preferences', icon: 'preferences', label: 'Preferences' },
  { href: '/private-circle/circle', icon: 'circle', label: 'Circle' },
  { href: '/private-circle/intelligence', icon: 'intelligence', label: 'Intelligence' },
  { href: '/private-circle/data-command', icon: 'data', label: 'Data' }
] as const;

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-20 mt-8 border-t border-border bg-background/95 p-3 backdrop-blur-lg">
      <ul className="mx-auto grid max-w-5xl grid-cols-6 gap-1">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'flex flex-col items-center gap-1 rounded-premium py-2 text-xxs transition-all',
                  active ? 'text-accent' : 'text-muted hover:text-text'
                )}
                aria-label={item.label}
              >
                <Icon name={item.icon} className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
