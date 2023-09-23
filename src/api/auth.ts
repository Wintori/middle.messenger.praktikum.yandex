import { Fetch } from '../core';
import { APIRequest, UserDTO } from './types';

type LoginRequestData = {
  login: string;
  password: string;
};

type SignUpRequestData = {
  login: string;
  password: string;
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
}

type ResponseSignUp = {
  id: number;
}

export const authAPI = {
  login: (data: LoginRequestData) =>
    Fetch.post<APIRequest<never>>('auth/signin', { data }),

  signUp: (data: SignUpRequestData) => Fetch.post<APIRequest<ResponseSignUp>>('auth/signup', { data }),

  me: () => Fetch.get<APIRequest<UserDTO>>('auth/user'),

  logout: () => Fetch.post<APIRequest<never>>('auth/logout'),
};
