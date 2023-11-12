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

  try {
    const response = await authAPI.login(action);

    if (apiHasError(response)) {
      dispatch({ isLoading: false, loginFormError: response.reason });
      router.go('/500');
      return;
    }

    const responseUser = await authAPI.me();

    if (apiHasError(responseUser)) {
      dispatch({ isLoading: false, loginFormError: 'Выход из системы' });
      dispatch(logout);
      return;
    }

    dispatch({ isLoading: false, loginFormError: null });
    dispatch({ user: transformUser(responseUser) });

    router.go('/messenger');
  } catch (error: any) {
    dispatch({ isLoading: false, loginFormError: error });
    router.go('/500');
  }
};

export const signUp = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: SignUpPayload,
) => {
  dispatch({ isLoading: true });

  try {
    const response = await authAPI.signUp(action);

    if (apiHasError(response)) {
      dispatch({ isLoading: false, loginFormError: response.reason });
      router.go('/500');
      return;
    }

    const responseUser = await authAPI.me();

    dispatch({ isLoading: false, loginFormError: null });

    if (apiHasError(responseUser)) {
      dispatch(logout);
      return;
    }

    dispatch({ user: transformUser(response) });

    router.go('/messenger');
  } catch (error: any) {
    dispatch({ isLoading: false, loginFormError: error });
    router.go('/500');
  }
}

export const logout = async (dispatch: Dispatch<AppState>) => {
  dispatch({ isLoading: true });
  
  try {
    await authAPI.logout();

    dispatch({ user: null });

    router.go('/');
  } catch (error: any) {
    dispatch({ isLoading: false, loginFormError: error });
    router.go('/500');
  }
};
