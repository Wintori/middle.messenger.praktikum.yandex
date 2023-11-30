import Login from '../pages/Login';
import Chat from '../pages/Chat';
import Registration from '../pages/Registration';
import Block from '../core/Block';
import Profile from '../pages/Profile';
import ProfileChange from '../pages/ProfileChange';
import ProfileChangePassword from '../pages/ProfileChangePassword';
import Error404 from '../pages/Error404';

export enum Screens {
  Login = '',
  Chat = 'messenger',
  Registration = 'sign-up',
  Profile = 'settings',
  UpdateUser = 'settings/updateUser',
  ProfilePassword = 'settings/changePassword',
  NotFound = 'error404'
}

const map: Record<Screens, () => Block<any>> = {
  [Screens.Login]: () => Login,
  [Screens.Chat]: () => Chat,
  [Screens.Registration]: () => Registration,
  [Screens.Profile]: () => Profile,
  [Screens.UpdateUser]: () => ProfileChange,
  [Screens.ProfilePassword]: () => ProfileChangePassword,
  [Screens.NotFound]: () => Error404
};

export const getScreenComponent = (screen: Screens): Block<any> => {
  return map[screen]();
};
