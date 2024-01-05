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

class AuthAPI {
  public login(data: LoginRequestData) {
    return Fetch.post<APIRequest<never>>('auth/signin', { data });
  }

  public signUp(data: SignUpRequestData) {
    return Fetch.post<APIRequest<ResponseSignUp>>('auth/signup', { data });
  }

  public me() {
    return Fetch.get<APIRequest<UserDTO>>('auth/user');
  }

  public logout() {
    return Fetch.post<APIRequest<never>>('auth/logout');
  }
};

const authAPI = new AuthAPI();
export { authAPI };
