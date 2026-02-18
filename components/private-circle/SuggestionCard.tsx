import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AIRecommendation } from '@/types/private-circle';

type SuggestionCardProps = {
  suggestion: AIRecommendation;
};

export function SuggestionCard({ suggestion }: SuggestionCardProps) {
  return (
    <Card className="space-y-3">
      <p className="text-xs uppercase tracking-[0.1em] text-accent">{suggestion.type}</p>
      <h3 className="text-base font-medium">{suggestion.title}</h3>
      <p className="text-sm text-muted">{suggestion.description}</p>
      <Button variant="secondary" aria-label={suggestion.actionType}>
        {suggestion.actionType}
      </Button>
    </Card>
  );
}
