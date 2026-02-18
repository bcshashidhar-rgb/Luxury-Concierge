import { CircleContact, ServiceToggle, TravelDNA } from '@/types/private-circle';

export const userService = {
  async getProfile() {
    return {
      id: 'u_01',
      name: 'Alex Mercer',
      tier: 'Private Circle Black',
      homeProperty: 'Marriott Marquis Dubai'
    };
  },
  async getTravelDNA(): Promise<TravelDNA> {
    return {
      pace: 'Structured Flex',
      dining: 'Executive Quiet Dining',
      suitePreference: 'High floor, skyline facing'
    };
  },
  async updateTravelDNA(payload: TravelDNA): Promise<TravelDNA> {
    return payload;
  },
  async getConnectedServices(): Promise<ServiceToggle[]> {
    return [
      { id: 'chauffeur', label: 'Chauffeur service', enabled: true },
      { id: 'private-dining', label: 'Private dining', enabled: true },
      { id: 'in-suite-spa', label: 'In-suite spa', enabled: false }
    ];
  },
  async getCircleContacts(): Promise<CircleContact[]> {
    return [
      {
        id: 'c1',
        name: 'Nora Vance',
        role: 'Lead Concierge',
        availability: 'Available now',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
        imageAlt: 'Lead concierge in a luxury hotel lobby'
      },
      {
        id: 'c2',
        name: 'Hugo Lin',
        role: 'Lifestyle Planner',
        availability: 'Online in 20 min',
        imageUrl:
          'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
        imageAlt: 'Lifestyle planner with tablet in hotel lounge'
      }
    ];
  }
};
