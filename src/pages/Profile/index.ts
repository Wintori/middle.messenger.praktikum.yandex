import Block from "../../core/Block";
import template from './profile.hbs'
import backImage from '../../assets/button-back.svg'
import { Button } from "../../components/Button";
import { Input } from "../../components/input/input";
import { withRouter } from "../../utils/withRouter";
import { withStore } from "../../utils/withStore";
import { profileData } from "../../utils/data";
import { logout } from "../../services/auth";

interface ProfilePageProps {
  image?: string;
}

class ProfilePage extends Block {
  constructor(props: ProfilePageProps) {
    super(props);
    if (!this.props.store.state.user) {
      this.props.router.go('/')
    }
  }
  protected init(): void {
    this.props.userName = window.store.getState().user!.displayName ? window.store.getState().user!.displayName : window.store.getState().user!.firstName + ' ' + window.store.getState().user!.secondName;
    this.props.image = window.store.getState().user?.avatar;
    this.props.profileInputs = profileData.profileInputs;
    this.props.backImage = backImage;
    this.children.profileInputs = this.props.profileInputs.map((props: any) => new Input({ ...props, value: window.store.getState()?.user[props.name] }));

    this.children.buttonBack = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();

          this.props.router.go('/messenger')
        }
      },
      buttonStyle: 'button__close-profile',
      type: 'button',
      image: backImage,
      imageStyle: 'profile__back-image'
    })

    this.children.buttonChange = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          this.props.router.go('/settings/updateUser')
        }
      },
      buttonStyle: 'button__change-data',
      type: 'button',
      label: 'Изменить данные'
    })

    this.children.buttonPassword = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          this.props.router.go('/settings/changePassword')
        }
      },
      buttonStyle: 'button__change-password',
      type: 'button',
      label: 'Изменить пароль'
    })

    this.children.buttonExit = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          window.store.dispatch(logout)
        }
      },
      buttonStyle: 'button__exit',
      type: 'button',
      label: 'Выйти'
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

export default withRouter(withStore(ProfilePage))
