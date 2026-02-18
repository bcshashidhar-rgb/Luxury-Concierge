export type JourneyItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  status: 'Upcoming' | 'Completed';
  imageUrl: string;
  imageAlt: string;
};

export type TravelDNA = {
  pace: string;
  dining: string;
  suitePreference: string;
};

export type ServiceToggle = {
  id: string;
  label: string;
  enabled: boolean;
};

export type CircleContact = {
  id: string;
  name: string;
  role: string;
  availability: string;
  imageUrl: string;
  imageAlt: string;
};

export type AIRecommendation = {
  type: string;
  title: string;
  description: string;
  actionType: string;
};

export type AIResponse = {
  recommendations: AIRecommendation[];
  humanConciergeAvailable: boolean;
};
