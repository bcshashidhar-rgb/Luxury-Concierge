const items = [
  {
    id: 'j1',
    title: 'New York to Tokyo Executive Itinerary',
    date: '2026-03-24',
    location: 'Tokyo, Japan',
    status: 'Upcoming'
  }
];

export const journeyBackendService = {
  getNext() {
    return items[0];
  },
  getById(id: string) {
    return items.find((item) => item.id === id) ?? null;
  }
};
