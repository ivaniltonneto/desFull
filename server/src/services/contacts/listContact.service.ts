import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';

export const listContactService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const contactProperties = await userRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      contacts: true,
    },
  });

  return contactProperties?.contacts;
};
