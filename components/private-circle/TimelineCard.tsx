import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { JourneyItem } from '@/types/private-circle';

type TimelineCardProps = {
  item: JourneyItem;
};

export function TimelineCard({ item }: TimelineCardProps) {
  return (
    <Card className="space-y-3">
      <p className="text-xs uppercase tracking-[0.1em] text-accent">{item.status}</p>
      <h3 className="text-base font-medium">{item.title}</h3>
      <div className="flex items-center justify-between text-sm text-muted">
        <span>{item.date}</span>
        <span className="flex items-center gap-2">
          <Icon name="arrow-right" className="h-4 w-4" />
          {item.location}
        </span>
      </div>
    </Card>
  );
}
