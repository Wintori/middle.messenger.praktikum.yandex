import { authAPI } from '../api/auth';
import { UserDTO } from '../api/types';
import type { Dispatch } from '../core/Store';
import { AppState } from '../store';
import { transformUser, apiHasError } from '../utils';
import { router } from '../router'

type LoginPayload = {
  login: string;
  password: string;
};

type SignUpPayload = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export const login = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: LoginPayload,
) => {
  dispatch({ isLoading: true });

  const response = await authAPI.login(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
    router.go('/500');
    return;
  }

  const responseUser = await authAPI.me();

  dispatch({ isLoading: false, loginFormError: null });

  if (apiHasError(responseUser)) {
    dispatch(logout);
    return;
  }

  dispatch({ user: transformUser(JSON.parse(responseUser.response) as UserDTO) });


  router.go('/messenger');
};

export const signUp = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: SignUpPayload,
) => {
  dispatch({ isLoading: true });

  const response = await authAPI.signUp(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
    router.go('/500');
    return;
  }

  const responseUser = await authAPI.me();

  dispatch({ isLoading: false, loginFormError: null });

  if (apiHasError(responseUser)) {
    dispatch(logout);
    return;
  }

  dispatch({ user: transformUser(JSON.parse(responseUser.response) as UserDTO) });

  router.go('/messenger');
}

export const logout = async (dispatch: Dispatch<AppState>) => {

  await authAPI.logout();

  dispatch({ user: null });

  router.go('/');
};
