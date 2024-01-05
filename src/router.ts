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

export function initRouter(store: any) {
  router
    .use({
      pathname: '/',
      //@ts-ignore
      block: Login,
      needAuth: true,
      redirectPath: '/messenger',
      onUnautorized: () => !Boolean(store.getState().user),
    })
    .use({
      pathname: '/sign-up',
      //@ts-ignore
      block: Registration,
      needAuth: true,
      redirectPath: '/messenger',
      onUnautorized: () => !Boolean(store.getState().user),
    })
    .use({
      pathname: '/messenger',
      //@ts-ignore
      block: Chat,
      needAuth: true,
      redirectPath: '/',
      onUnautorized: () => Boolean(store.getState().user),
    })
    .use({
      pathname: '/settings',
      //@ts-ignore
      block: Profile,
      needAuth: true,
      redirectPath: '/',
      onUnautorized: () => Boolean(store.getState().user),
    })
    .use({
      pathname: '/settings/updateUser',
      //@ts-ignore
      block: ProfileChange,
      needAuth: true,
      redirectPath: '/',
      onUnautorized: () => Boolean(store.getState().user),
    })
    .use({
      pathname: '/settings/changePassword',
      //@ts-ignore
      block: ProfileChangePassword,
      needAuth: true,
      redirectPath: '/',
      onUnautorized: () => Boolean(store.getState().user),
    })
    .use({
      pathname: '/500',
      //@ts-ignore
      block: Error500
    })
    .use({
      pathname: '*',
      //@ts-ignore
      block: Error404,
    })
    .start();
}

