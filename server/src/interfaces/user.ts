export interface IUserRequest {
  full_name: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUser {
  id: string;
  full_name: string;
  email: string;
  password: string;
  phone: string;
  createdAt: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  full_name?: string;
  email?: string;
  password?: string;
  phone?: string;
}

export interface IUserRequestTest {
  full_name: string;
  email: string;
  password?: string;
  phone: string;
}
