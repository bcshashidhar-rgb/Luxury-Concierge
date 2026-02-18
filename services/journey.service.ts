import { JourneyItem } from '@/types/private-circle';

const journey: JourneyItem[] = [
  {
    id: 'j1',
    title: 'New York to Tokyo Executive Itinerary',
    date: '2026-03-24',
    location: 'Tokyo, Japan',
    status: 'Upcoming',
    imageUrl:
      'https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Tokyo skyline at dusk with illuminated towers'
  },
  {
    id: 'j2',
    title: 'Doha Wellness Weekend',
    date: '2026-02-06',
    location: 'Doha, Qatar',
    status: 'Completed',
    imageUrl:
      'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Luxury desert resort pool during golden hour'
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
