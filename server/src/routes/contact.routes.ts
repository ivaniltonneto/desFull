import { Router } from 'express';

import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from '../controllers/contacts/contact.controller';
import { verifyAuthUserMiddleware } from '../middlewares/verifyAuthUser.middleware';
import {
  contactCreateSchema,
  validateContactCreate,
} from '../middlewares/verifyContactCreate.middleware';
import { verifyOwnerMiddleware } from '../middlewares/verifyOwner.middleware';

const routes = Router();

export const contactRoutes = () => {
  routes.post(
    '',
    validateContactCreate(contactCreateSchema),
    verifyAuthUserMiddleware,
    createContactController
  );
  routes.get('', verifyAuthUserMiddleware, listContactController);
  routes.patch(
    '/:id',
    verifyAuthUserMiddleware,
    verifyOwnerMiddleware,
    updateContactController
  );
  routes.delete(
    '/:id',
    verifyAuthUserMiddleware,
    verifyOwnerMiddleware,
    deleteContactController
  );

  return routes;
};
