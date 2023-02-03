import { Router } from 'express';

import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from '../controllers/users/user.controller';
import { verifyAuthUserMiddleware } from '../middlewares/verifyAuthUser.middleware';
import {
  userCreateSchema,
  validateUserCreate,
} from '../middlewares/verifyUserCreate.middleware';

const userRoutes = Router();

export const usersRoutes = () => {
  userRoutes.post(
    '',
    validateUserCreate(userCreateSchema),
    createUserController
  );
  userRoutes.get('/profile', verifyAuthUserMiddleware, listUserController);
  userRoutes.patch('/profile', verifyAuthUserMiddleware, updateUserController);
  userRoutes.delete('/profile', verifyAuthUserMiddleware, deleteUserController);

  return userRoutes;
};
