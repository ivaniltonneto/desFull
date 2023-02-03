export interface IContactRequest {
  full_name: string;
  email: string;
  phone: string;
}

export interface IContactUpdate {
  full_name?: string;
  email?: string;
  phone?: string;
}
