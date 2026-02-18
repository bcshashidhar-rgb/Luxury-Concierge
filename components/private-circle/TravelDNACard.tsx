'use client';

import { Card } from '@/components/ui/Card';
import { usePrivateCircleStore } from '@/store/private-circle.store';

export function TravelDNACard() {
  const dna = usePrivateCircleStore((state) => state.journeyState.travelDNA);

  return (
    <Card className="space-y-3">
      <h3 className="text-base font-medium tracking-[0.06em]">Travel DNA</h3>
      <ul className="space-y-2 text-sm text-muted">
        <li>Pace: {dna.pace}</li>
        <li>Dining: {dna.dining}</li>
        <li>Suite: {dna.suitePreference}</li>
      </ul>
    </Card>
  );
}
