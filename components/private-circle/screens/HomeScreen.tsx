import { TimelineCard } from '@/components/private-circle/TimelineCard';
import { TravelDNACard } from '@/components/private-circle/TravelDNACard';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Eyebrow, Title } from '@/components/ui/Typography';
import { journeyService } from '@/services/journey.service';

export async function HomeScreen() {
  const nextJourney = await journeyService.getNextJourney();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Eyebrow>Marriott International</Eyebrow>
        <Title>Private Circle</Title>
      </div>

      <SectionContainer>
        <SectionHeader title="Next Journey" subtitle="Executive itinerary alignment" />
        <TimelineCard item={nextJourney} />
      </SectionContainer>

      <SectionContainer>
        <SectionHeader title="Profile Intelligence" subtitle="Dynamic preference profile" />
        <TravelDNACard />
      </SectionContainer>
    </div>
  );
}
