import AppDataSource from '../../data-source';
import { Contact } from '../../entities/client.entity';

export const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find();
  const deleteContact = contacts.find((contact) => contact.id === id);
  await contactRepository.delete(deleteContact!.id);

  return true;
};
