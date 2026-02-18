import { Request, Response } from 'express';
import { userBackendService } from '@/server/services/user.service';

export const userController = {
  profile(_req: Request, res: Response) {
    res.json(userBackendService.getProfile());
  },
  updateTravelDNA(req: Request, res: Response) {
    res.json(userBackendService.updateTravelDNA(req.body));
  },
  connectedServices(_req: Request, res: Response) {
    res.json(userBackendService.getConnectedServices());
  },
  serviceToggle(req: Request, res: Response) {
    res.json(userBackendService.updateServiceToggle(req.body));
  },
  circle(_req: Request, res: Response) {
    res.json(userBackendService.getCircle());
  }
};
