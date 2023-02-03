import { hash } from 'bcryptjs';

import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IUserRequest } from '../../interfaces/user';

export const createUserService = async ({
  full_name,
  email,
  phone,
  password,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError('Email already exists');
  }

  const hashedPass = await hash(password, 10);

  const user = userRepository.create({
    full_name,
    email,
    password: hashedPass,
    phone,
  });

  await userRepository.save(user);

  return user;
};
