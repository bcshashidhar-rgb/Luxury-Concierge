import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Eyebrow({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-xs uppercase tracking-[0.12em] text-muted', className)} {...props} />;
}

export function Title({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn('text-xl font-medium tracking-[0.08em] text-text', className)} {...props} />;
}

export function Body({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-muted', className)} {...props} />;
}
