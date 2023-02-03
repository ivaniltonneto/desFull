import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';
import { SchemaOf } from 'yup';

import { IContactRequest } from '../interfaces/contact';

export const contactCreateSchema: SchemaOf<IContactRequest> = yup
  .object()
  .shape({
    full_name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
  });

export const validateContactCreate =
  (schema: SchemaOf<IContactRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.newUser = validatedData;

        next();
      } catch (err: any) {
        return res.status(400).json({
          message: err.errors?.join(', '),
        });
      }
    } catch (err) {
      next(err);
    }
  };
