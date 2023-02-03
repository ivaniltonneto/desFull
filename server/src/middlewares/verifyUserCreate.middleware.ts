import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';
import { SchemaOf } from 'yup';

import { IUserRequest } from '../interfaces/user';

export const userCreateSchema: SchemaOf<IUserRequest> = yup.object().shape({
  full_name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
});

export const validateUserCreate =
  (schema: SchemaOf<IUserRequest>) =>
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
