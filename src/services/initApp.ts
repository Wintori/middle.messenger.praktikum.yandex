import { authAPI } from '../api/auth';
import { chatAPI } from '../api/chat';
import type { Dispatch } from '../core';
import { router } from '../router';
import { AppState } from '../store';
import { apiHasError, transformUser } from '../utils';
import { transformChats } from '../utils/apiTransformers';

export async function initApp(dispatch: Dispatch<AppState>) {

  await new Promise(r => setTimeout(r, 100));

  try {
    const response = await authAPI.me();

    if (apiHasError(response)) {
      dispatch({ isLoading: false, loginFormError: response.reason });
      router.go('/500');
      return;
    }

    const dispatchPromise = new Promise((resolve, reject) => {
      try {
        dispatch({ user: transformUser(response) });
        resolve(true);
      } catch (err) {
        reject(err);
      }
    });

    await dispatchPromise;

    const responseChat = await chatAPI.chats();

    if (apiHasError(responseChat)) {
      dispatch({ isLoading: false, loginFormError: responseChat.reason });
      router.go('/500');
      return;
    }

    dispatch({ isLoading: false, loginFormError: null });
    dispatch({ chats: transformChats(responseChat) });


  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ appIsInited: true });
  }
}
