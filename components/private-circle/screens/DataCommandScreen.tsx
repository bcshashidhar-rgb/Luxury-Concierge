import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';

const blocks = [
  { label: 'Profile sync', value: 'Stable' },
  { label: 'Service mesh', value: '3 systems connected' },
  { label: 'Consent ledger', value: 'Compliant' }
];

export function DataCommandScreen() {
  return (
    <section className="space-y-4">
      <SectionHeader title="Data Command" subtitle="Visibility into loyalty and consent systems" />
      <div className="grid gap-4 md:grid-cols-3">
        {blocks.map((block) => (
          <Card key={block.label} className="space-y-2">
            <p className="text-xs uppercase tracking-[0.1em] text-accent">{block.label}</p>
            <p className="text-sm text-muted">{block.value}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
