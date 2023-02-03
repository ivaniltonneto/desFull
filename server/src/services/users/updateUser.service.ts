import { hash } from 'bcryptjs';

import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IUserUpdate } from '../../interfaces/user';

export const updateUserService = async (
  { full_name, email, password, phone }: IUserUpdate,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  await userRepository.update(user!.id, {
    full_name: full_name ? full_name : user.full_name,
    email: email ? email : user.email,
    phone: phone ? phone : user.phone,
    password: password ? await hash(password, 10) : user.password,
  });

  return user;
};
