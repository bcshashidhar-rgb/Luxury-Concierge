const AVIATIONSTACK_BASE_URL = 'http://api.aviationstack.com/v1/flights';

type FlightDataQuery = {
  flightIata?: string;
  limit?: number;
};

type AviationStackResponse = {
  pagination?: {
    limit?: number;
    offset?: number;
    count?: number;
    total?: number;
  };
  data: Array<{
    flight_date?: string;
    flight_status?: string;
    departure?: {
      airport?: string;
      timezone?: string;
      iata?: string;
      terminal?: string;
      gate?: string;
      scheduled?: string;
      estimated?: string;
      actual?: string;
      estimated_runway?: string;
      actual_runway?: string;
    };
    arrival?: {
      airport?: string;
      timezone?: string;
      iata?: string;
      terminal?: string;
      gate?: string;
      baggage?: string;
      scheduled?: string;
      estimated?: string;
      actual?: string;
      estimated_runway?: string;
      actual_runway?: string;
    };
    airline?: {
      name?: string;
      iata?: string;
      icao?: string;
    };
    flight?: {
      number?: string;
      iata?: string;
      icao?: string;
      codeshared?: {
        airline_name?: string;
        airline_iata?: string;
        airline_icao?: string;
        flight_number?: string;
        flight_iata?: string;
        flight_icao?: string;
      };
    };
    aircraft?: {
      registration?: string;
      iata?: string;
      icao?: string;
      icao24?: string;
    };
    live?: {
      updated?: string;
      latitude?: number;
      longitude?: number;
      altitude?: number;
      direction?: number;
      speed_horizontal?: number;
      speed_vertical?: number;
      is_ground?: boolean;
    };
  }>;
};

export const flightDataService = {
  async getFlights({ flightIata, limit = 25 }: FlightDataQuery = {}) {
    const apiKey = process.env.AVIATIONSTACK_API_KEY;

    if (!apiKey) {
      throw new Error('Missing AVIATIONSTACK_API_KEY. Add it to your environment to enable live flight data.');
    }

    const params = new URLSearchParams({
      access_key: apiKey,
      limit: String(Math.min(Math.max(limit, 1), 100))
    });

    if (flightIata) {
      params.set('flight_iata', flightIata);
    }

    const response = await fetch(`${AVIATIONSTACK_BASE_URL}?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`AviationStack request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as AviationStackResponse & {
      error?: { message?: string };
    };

    if (payload.error?.message) {
      throw new Error(payload.error.message);
    }

    return {
      provider: 'aviationstack',
      fetchedAt: new Date().toISOString(),
      pagination: payload.pagination ?? null,
      flights: payload.data ?? []
    };
  }
};
