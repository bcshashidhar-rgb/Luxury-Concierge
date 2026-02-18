import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    primary:
      'border border-border bg-surface text-text shadow-glow hover:bg-surface/80 hover:text-accent',
    secondary: 'border border-border bg-transparent text-text hover:border-accent hover:text-accent',
    ghost: 'border border-transparent bg-transparent text-muted hover:text-text'
  };

  return (
    <button
      className={cn(
        'rounded-premium px-4 py-2 text-sm tracking-wide transition-all duration-200 ease-premium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:opacity-50',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
