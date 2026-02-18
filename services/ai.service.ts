import { AIResponse } from '@/types/private-circle';

export const aiService = {
  async generateSuggestions(): Promise<AIResponse> {
    return {
      recommendations: [
        {
          type: 'Dining',
          title: 'Private Rooftop Reservation',
          description: 'Quiet setting aligned with your preference for executive dining.',
          actionType: 'Reserve'
        }
      ],
      humanConciergeAvailable: true
    };
  }
};
