import { Router } from 'express';
import { journeyController } from '@/server/controllers/journey.controller';

export const journeyRouter = Router();

journeyRouter.get('/next', journeyController.next);
journeyRouter.get('/:id', journeyController.byId);
