import { Fetch } from '../core';
import { APIRequest, UserDTO } from './types';

type PasswordChangeRequestData = {
  oldPassword: string,
  newPassword: string
}

type ChangeRequestData = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

type SearchRequestData = {
  login: string;
}

export const userAPI = {
  change: (data: ChangeRequestData) => Fetch.put<APIRequest<UserDTO>>('user/profile', { data }),

  changePassword: (data: PasswordChangeRequestData) => Fetch.put<APIRequest<never>>('user/password', { data }),

  avatar: (data: FormData) => Fetch.put<APIRequest<UserDTO>>('user/profile/avatar', { data }),

  userById: (data: string) => Fetch.get<APIRequest<UserDTO>>(`user/${data}`, { data }),

  resources: (path: string) => Fetch.get<APIRequest<never>>(`resources/${path}`),

  search: (data: SearchRequestData) => Fetch.post<APIRequest<UserDTO[]>>(`user/search`, { data })
}
