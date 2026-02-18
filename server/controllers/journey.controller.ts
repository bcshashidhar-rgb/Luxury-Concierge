import { Request, Response } from 'express';
import { journeyBackendService } from '@/server/services/journey.service';
import { flightDataService } from '@/server/services/flight-data.service';

export const journeyController = {
  next(_req: Request, res: Response) {
    res.json(journeyBackendService.getNext());
  },
  byId(req: Request, res: Response) {
    const result = journeyBackendService.getById(req.params.id);
    if (!result) {
      res.status(404).json({ error: 'Journey not found' });
      return;
    }
    res.json(result);
  },
  async flights(req: Request, res: Response) {
    try {
      const flightIata = typeof req.query.flightIata === 'string' ? req.query.flightIata : undefined;
      const limit = typeof req.query.limit === 'string' ? Number(req.query.limit) : undefined;

      const result = await flightDataService.getFlights({
        flightIata,
        limit: Number.isFinite(limit) ? limit : undefined
      });

      res.json(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown flight data error';
      res.status(502).json({ error: message });
    }
  }
};
