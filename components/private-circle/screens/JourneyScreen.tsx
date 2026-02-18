import { TimelineCard } from '@/components/private-circle/TimelineCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { journeyService } from '@/services/journey.service';

export async function JourneyScreen() {
  const journey = await journeyService.getJourneyList();

  return (
    <section className="space-y-4">
      <SectionHeader title="Journey" subtitle="Live timeline with high-touch milestones" />
      <div className="grid gap-4 md:grid-cols-2">
        {journey.map((item) => (
          <TimelineCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
