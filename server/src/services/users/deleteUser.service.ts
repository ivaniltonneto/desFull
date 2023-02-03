import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';

export const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const deleteUser = users.find((user) => user.id === id);

  await userRepository.delete(deleteUser!.id);

  return true;
};
