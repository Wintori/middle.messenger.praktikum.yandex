import { PathRouter } from './core';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
import ProfileChange from './pages/ProfileChange';
import ProfileChangePassword from './pages/ProfileChangePassword';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';

export const router = new PathRouter('#app')

export function initRouter(store) {
  router
    .use({
      pathname: '/',
      block: Login,
      needAuth: true,
      redirectPath: '/messenger',
      onUnautorized: () => !Boolean(store.getState().user),
    })
    .use({
      pathname: '/sign-up',
      block: Registration,
      needAuth: true,
      redirectPath: '/messenger',
      onUnautorized: () => !Boolean(store.getState().user),
    })
    .use({
      pathname: '/messenger',
      block: Chat,
      needAuth: true,
      redirectPath: '/',
      onUnautorized: () => Boolean(store.getState().user),
    })
    .use({
      pathname: '/settings',
      block: Profile,
      needAuth: true,
      redirectPath: '/',
      onUnautorized: () => Boolean(store.getState().user),
    })
    .use({
      pathname: '/settings/updateUser',
      block: ProfileChange,
      needAuth: true,
      redirectPath: '/',
      onUnautorized: () => Boolean(store.getState().user),
    })
    .use({
      pathname: '/settings/changePassword',
      block: ProfileChangePassword,
      needAuth: true,
      redirectPath: '/',
      onUnautorized: () => Boolean(store.getState().user),
    })
    .use({
      pathname: '/500',
      block: Error500
    })
    .use({
      pathname: '*',
      block: Error404,
    })
    .start();
}

