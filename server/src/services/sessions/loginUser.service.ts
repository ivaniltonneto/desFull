import { compareSync } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IUserLogin } from '../../interfaces/user';

export const createSessionService = async ({ password, email }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.findOneBy({ email: email });

  if (!users) {
    throw new AppError('Wrong email/password', 403);
  }

  if (!compareSync(password, users.password)) {
    throw new AppError('Wrong email/password', 403);
  }

  const token = jwt.sign({}, String(process.env.SECRET_KEY), {
    expiresIn: '24h',
    subject: users.id,
  });

  return token;
};
