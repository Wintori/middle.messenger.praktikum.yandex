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

class UserAPI {
  public change(data: ChangeRequestData) {
    return Fetch.put<APIRequest<UserDTO>>('user/profile', { data });
  }

  public changePassword(data: PasswordChangeRequestData) {
    return Fetch.put<APIRequest<never>>('user/password', { data });
  }

  public avatar(data: FormData) {
    return Fetch.put<APIRequest<UserDTO>>('user/profile/avatar', { data });
  }

  public userById(data: string) {
    return Fetch.get<APIRequest<UserDTO>>(`user/${data}`, { data });
  }

  public resources(path: string) {
    return Fetch.get<APIRequest<never>>(`resources/${path}`);
  }

  public search(data: SearchRequestData) {
    Fetch.post<APIRequest<UserDTO[]>>(`user/search`, { data });
  }
}

const userAPI = new UserAPI();
export { userAPI };
