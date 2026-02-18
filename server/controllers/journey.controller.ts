import { Request, Response } from 'express';
import { journeyBackendService } from '@/server/services/journey.service';

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
  }
};
