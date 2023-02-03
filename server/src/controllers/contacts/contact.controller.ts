import { Request, Response } from 'express';
import { instanceToPlain } from 'class-transformer';

import { createContactService } from '../../services/contacts/createContact.service';
import { deleteContactService } from '../../services/contacts/deleteContact.service';
import { listContactService } from '../../services/contacts/listContact.service';
import { updateContactService } from '../../services/contacts/updateContact.service';

export const createContactController = async (req: Request, res: Response) => {
  const { full_name, email, phone } = req.body;
  const id = req.user.id;
  const createdContact = await createContactService({ full_name, email, phone }, id);

  return res.status(201).json(instanceToPlain(createdContact));
};

export const deleteContactController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const contactDelete = await deleteContactService(id);

  return res.status(204).json(contactDelete);
};

export const listContactController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const listAllContacts = await listContactService(id);

  return res.json(instanceToPlain(listAllContacts));
};

export const updateContactController = async (req: Request, res: Response) => {
  const { full_name, email, phone } = req.body;
  const { id } = req.params;
  await updateContactService({ full_name, email, phone }, id);

  return res.status(200).json({ message: 'Contact updated' });
};
