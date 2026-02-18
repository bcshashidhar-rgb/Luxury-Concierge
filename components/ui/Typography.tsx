import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Eyebrow({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-xs uppercase tracking-[0.14em] text-muted', className)} {...props} />;
}

export function Title({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn('font-heading text-4xl leading-none font-semibold tracking-[0.05em] text-text md:text-5xl', className)}
      {...props}
    />
  );
}

export function Body({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm leading-relaxed text-muted', className)} {...props} />;
}
