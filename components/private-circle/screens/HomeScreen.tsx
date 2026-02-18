import Image from 'next/image';
import { TimelineCard } from '@/components/private-circle/TimelineCard';
import { TravelDNACard } from '@/components/private-circle/TravelDNACard';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Body, Eyebrow, Title } from '@/components/ui/Typography';
import { journeyService } from '@/services/journey.service';

export async function HomeScreen() {
  const nextJourney = await journeyService.getNextJourney();

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-premium border border-border bg-surface/50 shadow-glass">
        <Image
          src="/images/private-circle-hero.svg"
          alt="Private Circle luxury background"
          width={1600}
          height={900}
          className="h-52 w-full object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
        <div className="absolute inset-0 space-y-2 p-5 md:p-7">
          <Eyebrow className="text-accent">Marriott International</Eyebrow>
          <Title>Private Circle</Title>
          <Body className="max-w-lg text-text/85">Curated journeys, elevated by your profile intelligence and concierge insights.</Body>
        </div>
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
