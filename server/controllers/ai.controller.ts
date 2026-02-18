import { Request, Response } from 'express';
import { aiBackendService } from '@/server/services/ai.service';

export const aiController = {
  generate(_req: Request, res: Response) {
    res.json(aiBackendService.generateSuggestions());
  }
};
