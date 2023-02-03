import { instanceToInstance, instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import { createUserService } from '../../services/users/createUser.service';
import { deleteUserService } from '../../services/users/deleteUser.service';
import { listUserService } from '../../services/users/listUser.service';
import { updateUserService } from '../../services/users/updateUser.service';

export const createUserController = async (req: Request, res: Response) => {
  const { full_name, email, phone, password } = req.body;
  const user = await createUserService({ full_name, email, phone, password });

  return res.status(201).json(instanceToInstance(user));
};

export const deleteUserController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const userDelete = await deleteUserService(id);

  return res.status(204).json(userDelete);
};

export const listUserController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const listUser = await listUserService(id);

  return res.status(200).json(instanceToPlain(listUser));
};

export const updateUserController = async (req: Request, res: Response) => {
  const user = req.body;
  const id = req.user.id;
  await updateUserService(user, id);

  return res.status(200).json({ message: 'User updated' });
};
