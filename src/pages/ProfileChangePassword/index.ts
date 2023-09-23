import Block from "../../core/Block";
import template from './profileChangePassword.hbs';
import backImage from '../../assets/button-back.svg';
import { Button } from "../../components/Button";
import { Input } from "../../components/input/input";
import { withRouter } from "../../utils/withRouter";
import { withStore } from "../../utils/withStore";
import { changePassword } from "../../services/user";

interface ProfileChangePasswordProps {
  image?: string;
}

class ProfileChangePassword extends Block {
  constructor(props: ProfileChangePasswordProps) {
    super(props);

    if (!this.props.store.state.user) {
      this.props.router.go('/')
    }
  }

  protected init(): void {
    this.props.backImage = backImage;
    this.props.image = window.store.getState().user?.avatar;

    this.children.inputOldPassword = new Input({
      type: 'password',
      labelStyle: 'profile__label',
      label: 'Старый пароль',
      inputStyle: 'profile__input',
      value: '',
      placeholder: '',
      events: {
        change: (evt) => {
          const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
          const value = evt.target.value;
          (this.children.inputOldPassword as Block).setProps({ value });
          if (!regExpPassword.test(value)) {
            (this.children.inputOldPassword as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифрат' });
          } else {
            (this.children.inputOldPassword as Block).setProps({ error: "" });
          }
        },
      },
      required: true,
      errorStyle: 'login__input-error',
      name: 'oldPassword'
    });
    this.children.inputPassword = new Input({
      type: 'password',
      labelStyle: 'profile__label',
      label: 'Новый пароль',
      inputStyle: 'profile__input',
      value: this.props.password,
      placeholder: '',
      events: {
        change: (evt) => {
          const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
          const value = evt.target.value;
          (this.children.inputPassword as Block).setProps({ value });
          if (!regExpPassword.test(value)) {
            (this.children.inputPassword as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифрат' });
          } else {
            (this.children.inputPassword as Block).setProps({ error: "" });
          }
        },
      },
      required: true,
      errorStyle: 'login__input-error',
      name: 'newPassword'
    });
    this.children.inputPasswordRepeat = new Input({
      type: 'password',
      labelStyle: 'profile__label',
      label: 'Повторите новый пароль',
      inputStyle: 'profile__input',
      value: this.props.repeatPassword,
      placeholder: '',
      events: {
        change: (evt) => {
          const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
          const value = evt.target.value;
          (this.children.inputPasswordRepeat as Block).setProps({ value });
          if (!regExpPassword.test(value)) {
            (this.children.inputPasswordRepeat as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифрат' });
          } else if ((((this.children.inputPassword as Block).element?.firstElementChild as HTMLInputElement).value) !== value) {
            (this.children.inputPasswordRepeat as Block).setProps({ error: "Пароли не совпадают" });
          } else {
            (this.children.inputPasswordRepeat as Block).setProps({ error: "" });
          }
        },
      },
      required: true,
      errorStyle: 'login__input-error',
      name: 'newPasswordRepeat'
    });

    this.children.buttonBack = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          this.props.router.go('/messenger');
        }
      },
      buttonStyle: 'button__close-profile',
      type: 'button',
      image: backImage,
      imageStyle: 'profile__back-image'
    })

    this.children.buttonSave = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();

          if (!this.isValidForm()) {
            return;
          }

          window.store.dispatch(changePassword, {
            oldPassword: ((this.children.inputOldPassword as Block).element?.firstElementChild as HTMLInputElement).value,
            newPassword: ((this.children.inputPassword as Block).element?.firstElementChild as HTMLInputElement).value,
          })

          this.props.router.go('/settings');
        },
      },
      buttonStyle: 'button__authorize',
      type: 'button',
      label: 'Сохранить'
    })
  }

  private isValidForm(): boolean {
    return this.checkOldPasswordValid() &&
      this.checkPasswordValid() &&
      this.checkPasswordRepeatValid();
  }

  private checkOldPasswordValid(): boolean {
    const password = ((this.children.inputOldPassword as Block).element?.firstElementChild as HTMLInputElement).value;
    const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;

    if (regExpPassword.test(password)) {
      (this.children.inputOldPassword as Block).setProps({ error: "" });
      return true;
    }

    (this.children.inputOldPassword as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифра' });
    return false;
  }

  private checkPasswordValid(): boolean {
    const password = ((this.children.inputPassword as Block).element?.firstElementChild as HTMLInputElement).value;
    const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;

    if (regExpPassword.test(password)) {
      (this.children.inputPassword as Block).setProps({ error: "" });
      return true;
    }

    (this.children.inputPassword as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифра' });
    return false;
  }

  private checkPasswordRepeatValid(): boolean {
    const passwordRepeat = ((this.children.inputPasswordRepeat as Block).element?.firstElementChild as HTMLInputElement).value;
    const password = ((this.children.inputPassword as Block).element?.firstElementChild as HTMLInputElement).value;
    const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;

    if (regExpPassword.test(passwordRepeat) && password === passwordRepeat) {
      (this.children.inputPasswordRepeat as Block).setProps({ error: "" });
      return true;
    }

    (this.children.inputPasswordRepeat as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифра' });
    return false;
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

export default withRouter(withStore(ProfileChangePassword))
