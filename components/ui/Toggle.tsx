'use client';

import { cn } from '@/lib/cn';

type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
};

export function Toggle({ checked, onChange, label, className }: ToggleProps) {
  return (
    <button
      aria-label={label}
      aria-pressed={checked}
      className={cn(
        'relative h-7 w-12 rounded-full border border-border transition-all duration-200',
        checked ? 'bg-accent/20' : 'bg-surface',
        className
      )}
      onClick={() => onChange(!checked)}
      type="button"
    >
      <span
        className={cn(
          'absolute top-[3px] h-5 w-5 rounded-full border border-border bg-background transition-transform duration-200',
          checked ? 'translate-x-6' : 'translate-x-1'
        )}
      />
    </button>
  );
}
