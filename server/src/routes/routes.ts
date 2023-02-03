import { Express } from 'express';

import { contactRoutes } from './contact.routes';
import { sessionRoutes } from './sessions.routes';
import { usersRoutes } from './users.routes';

export const appRoutes = (app: Express) => {
  app.use('/users', usersRoutes());
  app.use('/login', sessionRoutes());
  app.use('/contact', contactRoutes());
};
