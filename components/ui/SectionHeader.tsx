import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({ title, subtitle, action, className }: SectionHeaderProps) {
  return (
    <header className={cn('flex items-end justify-between gap-4', className)}>
      <div className="space-y-1">
        <h2 className="font-heading text-3xl leading-none font-semibold tracking-[0.04em] text-text">{title}</h2>
        {subtitle ? <p className="text-sm text-muted">{subtitle}</p> : null}
      </div>
      {action}
    </header>
  );
}
