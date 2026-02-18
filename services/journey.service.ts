import { JourneyItem } from '@/types/private-circle';

const journey: JourneyItem[] = [
  {
    id: 'j1',
    title: 'New York to Tokyo Executive Itinerary',
    date: '2026-03-24',
    location: 'Tokyo, Japan',
    status: 'Upcoming'
  },
  {
    id: 'j2',
    title: 'Doha Wellness Weekend',
    date: '2026-02-06',
    location: 'Doha, Qatar',
    status: 'Completed'
  }
];

export const journeyService = {
  async getNextJourney(): Promise<JourneyItem> {
    return journey[0];
  },
  async getJourneyById(id: string): Promise<JourneyItem | null> {
    return journey.find((item) => item.id === id) ?? null;
  },
  async getJourneyList(): Promise<JourneyItem[]> {
    return journey;
  }
};
