import { BottomNavigation } from '@/components/ui/BottomNavigation';
import { FloatingOrb } from '@/components/ui/FloatingOrb';

export default function PrivateCircleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="mx-auto max-w-5xl px-4 pb-24 pt-8 md:px-8">{children}</main>
      <FloatingOrb />
      <BottomNavigation />
    </div>
  );
}
