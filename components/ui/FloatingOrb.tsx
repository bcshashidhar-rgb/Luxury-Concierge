import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';

type FloatingOrbProps = {
  className?: string;
};

export function FloatingOrb({ className }: FloatingOrbProps) {
  return (
    <div
      aria-label="AI concierge"
      className={cn(
        'fixed bottom-24 right-6 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface shadow-glow backdrop-blur-lg transition-transform duration-200 hover:scale-105',
        className
      )}
    >
      <Icon name="spark" aria-label="AI concierge icon" className="h-6 w-6" />
    </div>
  );
}
