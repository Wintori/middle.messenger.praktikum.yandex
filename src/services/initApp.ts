import { authAPI } from '../api/auth';
import { chatAPI } from '../api/chat';
import { ChatDTO, UserDTO } from '../api/types';
import type { Dispatch } from '../core';
import { AppState } from '../store';
import { transformUser, apiHasError } from '../utils';
import { transformChats } from '../utils/apiTransformers';
import { router } from '../router';

export async function initApp(dispatch: Dispatch<AppState>) {

  await new Promise(r => setTimeout(r, 100));

  try {
    const response = await authAPI.me();

    if (apiHasError(response)) {
      dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
      router.go('/500');
      return;
    }

    dispatch({ user: transformUser(JSON.parse(response.response) as UserDTO) });

    const responseChat = await chatAPI.chats();

    if (apiHasError(responseChat)) {
      dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
      router.go('/500');
      return;
    }

    dispatch({ isLoading: false, loginFormError: null });
    dispatch({ chats: transformChats(JSON.parse(responseChat.response) as ChatDTO[]) });


  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ appIsInited: true });
  }
}
