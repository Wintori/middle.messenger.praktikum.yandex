import { userAPI } from '../api/user';
import { UserDTO } from '../api/types';
import type { Dispatch } from '../core/Store';
import { AppState } from '../store';
import { transformUser, apiHasError } from '../utils';
import { router } from '../router'

type ChangePayload = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

type ChangePasswordPayload = {
  oldPassword: string;
  newPassword: string;
};

type GetUserByIdPayload = {
  id: string;
}

type SearchPayload = {
  login: string;
}

export const change = async (
  dispatch: Dispatch<AppState>,
  _state: AppState,
  action: ChangePayload,
) => {
  dispatch({ isLoading: true });

  const response = await userAPI.change(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
    router.go('/500');
    return;
  }

  dispatch({ isLoading: false, loginFormError: null });

  dispatch({ user: transformUser(JSON.parse(response.response) as UserDTO) });

  router.go('/settings');
}

export const changePassword = async (
  dispatch: Dispatch<AppState>,
  _state: AppState,
  action: ChangePasswordPayload
) => {
  dispatch({ isLoading: true });

  const response = await userAPI.changePassword(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
    router.go('/500');
    return;
  }

  dispatch({ isLoading: false, loginFormError: null });

  router.go('/settings');
};

export const getUserById = async (
  dispatch: Dispatch<AppState>,
  _state: AppState,
  action: GetUserByIdPayload
) => {
  dispatch({ isLoading: true });

  const response = await userAPI.userById(action.id);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
    router.go('/500');
    return;
  }

  dispatch({ isLoading: false, loginFormError: null });

  return response.response
}

export const avatar = async (
  dispatch: Dispatch<AppState>,
  _state: AppState,
  action: FormData
) => {
  dispatch({ isLoading: true });

  const response = await userAPI.avatar(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
    router.go('/500');
    return;
  }

  dispatch({ isLoading: false, loginFormError: null });

  dispatch({ user: transformUser(JSON.parse(response.response) as UserDTO) });
}

export const search = async (
  dispatch: Dispatch<AppState>,
  _state: AppState,
  action: SearchPayload
) => {
  dispatch({ isLoading: true });

  const response = await userAPI.search(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
    router.go('/500');
    return;
  }

  dispatch({ isLoading: false, loginFormError: null });
}
