'use client';

import { SuggestionCard } from '@/components/private-circle/SuggestionCard';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Toggle } from '@/components/ui/Toggle';
import { usePredictiveEnabled } from '@/hooks/usePredictiveEnabled';
import { aiService } from '@/services/ai.service';
import { usePrivateCircleStore } from '@/store/private-circle.store';
import { AIResponse } from '@/types/private-circle';
import { useEffect, useMemo, useState } from 'react';

const moods = ['Focus', 'Relaxed', 'Exploration'] as const;

export function IntelligenceScreen() {
  const [response, setResponse] = useState<AIResponse | null>(null);
  const predictiveEnabled = usePredictiveEnabled();
  const selectedMood = usePrivateCircleStore((state) => state.selectedMood);
  const setSelectedMood = usePrivateCircleStore((state) => state.setSelectedMood);

  useEffect(() => {
    if (!predictiveEnabled) {
      setResponse(null);
      return;
    }
    aiService.generateSuggestions().then(setResponse);
  }, [predictiveEnabled]);

  const conciergeStatus = useMemo(() => {
    if (!predictiveEnabled) {
      return 'Predictive intelligence paused';
    }
    return response?.humanConciergeAvailable ? 'Human concierge available' : 'Concierge offline';
  }, [predictiveEnabled, response]);

  return (
    <section className="space-y-4">
      <SectionHeader title="Intelligence" subtitle="Real-time recommendations and mood alignment" />

      <Card className="space-y-3">
        <p className="text-xs uppercase tracking-[0.1em] text-accent">Mood selector</p>
        <div className="flex flex-wrap gap-2">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              className={`rounded-premium border px-3 py-2 text-sm transition-all ${
                selectedMood === mood
                  ? 'border-border bg-surface text-accent'
                  : 'border-border bg-background text-muted hover:text-text'
              }`}
              aria-label={`Set mood ${mood}`}
              type="button"
            >
              {mood}
            </button>
          ))}
        </div>
      </Card>

      <Card className="flex items-center justify-between">
        <p className="text-sm text-muted">{conciergeStatus}</p>
        <Toggle checked={predictiveEnabled} onChange={() => undefined} label="Predictive feature status" />
      </Card>

      {predictiveEnabled && response ? (
        <div className="grid gap-4 md:grid-cols-2">
          {response.recommendations.map((suggestion) => (
            <SuggestionCard key={suggestion.title} suggestion={suggestion} />
          ))}
        </div>
      ) : (
        <Card>
          <p className="text-sm text-muted">Static itinerary mode enabled. Turn on personalization to restore adaptive suggestions.</p>
        </Card>
      )}
    </section>
  );
}
