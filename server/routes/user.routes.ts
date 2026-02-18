import { Router } from 'express';
import { userController } from '@/server/controllers/user.controller';

export const userRouter = Router();

userRouter.get('/profile', userController.profile);
userRouter.patch('/travel-dna', userController.updateTravelDNA);
userRouter.get('/connected-services', userController.connectedServices);
userRouter.patch('/service-toggle', userController.serviceToggle);
userRouter.get('/circle', userController.circle);
