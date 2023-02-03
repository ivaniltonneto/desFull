import { IContactRequest } from '../../interfaces/contact';
import {
  IUserLogin,
  IUserRequest,
  IUserRequestTest,
} from '../../interfaces/user';

export const mockedUser: IUserRequest = {
  full_name: 'User',
  email: 'user@mail.com',
  phone: '900000000',
  password: '123',
};

export const mockedUser2: IUserRequest = {
  full_name: 'User',
  email: 'user2@mail.com',
  phone: '900000000',
  password: '123',
};

export const mockedUserWithoutPassword: IUserRequestTest = {
  full_name: 'User',
  email: 'user@gmail.com',
  phone: '900000000',
};

export const mockedUserLogin: IUserLogin = {
  email: 'user@mail.com',
  password: '123',
};

export const mockedUser2Login: IUserLogin = {
  email: 'user2@mail.com',
  password: '123',
};

export const mockedUserWrongLogin: IUserLogin = {
  email: 'user3@mail.com',
  password: '123',
};

export const mockedContact: IContactRequest = {
  full_name: 'User',
  email: 'user@user.com',
  phone: '900000000',
};
