export const userBackendService = {
  getProfile() {
    return {
      id: 'u_01',
      name: 'Alex Mercer',
      tier: 'Private Circle Black',
      homeProperty: 'Marriott Marquis Dubai'
    };
  },
  getConnectedServices() {
    return [
      { id: 'chauffeur', label: 'Chauffeur service', enabled: true },
      { id: 'private-dining', label: 'Private dining', enabled: true },
      { id: 'in-suite-spa', label: 'In-suite spa', enabled: false }
    ];
  },
  getCircle() {
    return [
      { id: 'c1', name: 'Nora Vance', role: 'Lead Concierge', availability: 'Available now' },
      { id: 'c2', name: 'Hugo Lin', role: 'Lifestyle Planner', availability: 'Online in 20 min' }
    ];
  },
  updateTravelDNA(body: unknown) {
    return {
      updated: true,
      travelDNA: body
    };
  },
  updateServiceToggle(body: unknown) {
    return {
      updated: true,
      service: body
    };
  }
};
