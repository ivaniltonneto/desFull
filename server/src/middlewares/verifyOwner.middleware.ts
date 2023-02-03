import { NextFunction, Request, Response } from 'express';

import AppDataSource from '../data-source';
import { Contact } from '../entities/client.entity';
import { AppError } from '../errors/appError';

export const verifyOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      user: true,
    },
  });

  if (req.user.id === contact?.user.id) {
    next();
  } else {
    throw new AppError('Unauthorized', 401);
  }
};
