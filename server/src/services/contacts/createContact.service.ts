import AppDataSource from '../../data-source';
import { Contact } from '../../entities/client.entity';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IContactRequest } from '../../interfaces/contact';

export const createContactService = async (
  { full_name, email, phone }: IContactRequest,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find();

  const emailAlreadyExists = contacts.find(
    (contact) => contact.email === email
  );

  const user = await userRepository.findOneBy({
    id,
  });

  const emailExiste = user?.contacts.find((contact) => contact.email === email);

  if (emailExiste) {
    throw new AppError('Email already exists');
  }

  const contact = contactRepository.create({
    full_name,
    email,
    phone,
    user: user!,
  });
  await contactRepository.save(contact);

  return contact;
};
