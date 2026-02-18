'use client';

import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Toggle } from '@/components/ui/Toggle';
import { usePrivateCircleStore } from '@/store/private-circle.store';

const serviceEntries = [
  { id: 'chauffeur', label: 'Chauffeur service' },
  { id: 'private-dining', label: 'Private dining' },
  { id: 'in-suite-spa', label: 'In-suite spa' }
];

export function PreferencesScreen() {
  const personalizationEnabled = usePrivateCircleStore((state) => state.userState.personalizationEnabled);
  const connectedServices = usePrivateCircleStore((state) => state.preferenceState.connectedServices);
  const setPersonalization = usePrivateCircleStore((state) => state.setPersonalization);
  const setServiceToggle = usePrivateCircleStore((state) => state.setServiceToggle);

  return (
    <section className="space-y-4">
      <SectionHeader title="Preferences" subtitle="Control how Private Circle adapts to you" />
      <Card className="flex items-center justify-between">
        <p className="text-sm">Personalized intelligence</p>
        <Toggle checked={personalizationEnabled} onChange={setPersonalization} label="Toggle personalization" />
      </Card>
      {serviceEntries.map((service) => (
        <Card key={service.id} className="flex items-center justify-between">
          <p className="text-sm text-muted">{service.label}</p>
          <Toggle
            checked={Boolean(connectedServices[service.id])}
            onChange={(checked) => setServiceToggle(service.id, checked)}
            label={`Toggle ${service.label}`}
          />
        </Card>
      ))}
    </section>
  );
}
