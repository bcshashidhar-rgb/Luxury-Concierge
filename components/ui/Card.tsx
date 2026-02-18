import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-premium border border-border bg-surface/90 p-4 shadow-glass backdrop-blur-md transition-all duration-200 hover:shadow-glow',
        className
      )}
      {...props}
    />
  );
}
