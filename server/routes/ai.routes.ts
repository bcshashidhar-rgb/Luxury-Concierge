import { Router } from 'express';
import { aiController } from '@/server/controllers/ai.controller';

export const aiRouter = Router();

aiRouter.post('/generate-suggestions', aiController.generate);
