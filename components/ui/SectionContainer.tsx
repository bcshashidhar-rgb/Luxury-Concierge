import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function SectionContainer({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn('space-y-4', className)} {...props} />;
}
