import backImage from '../../assets/button-back.svg';
import { Button } from "../../components/Button";
import { Input } from "../../components/input/input";
import Block from "../../core/Block";
import { withRouter } from "../../utils/withRouter";
import { withStore } from "../../utils/withStore";
import template from './profileChange.hbs';
import { change } from '../../services/user';
import { ModalUpload } from '../../components/ModalUpload';

interface ProfileChangeProps {
  image?: string;
}

class ProfileChange extends Block {
  constructor(props: ProfileChangeProps) {
    super(props);

    if (!this.props.store.state.user) {
      this.props.router.go('/');
    }
  }

  protected init(): void {
    this.props.backImage = backImage;
    this.props.image = window.store.getState().user?.avatar;

    this.children.inputEmail = new Input({
      type: 'email',
      labelStyle: 'profile__label',
      label: 'Почта',
      inputStyle: 'profile__input',
      value: window.store.getState().user?.email,
      placeholder: 'Почта',
      events: {
        change: (evt) => {
          const regExEmail = /\S+@\S+\.\S+/;
          const value = evt.target.value;
          (this.children.inputEmail as Block).setProps({ value });
          if (!regExEmail.test(value)) {
            (this.children.inputEmail as Block).setProps({ error: 'Неверный Email' });
          } else {
            (this.children.inputEmail as Block).setProps({ error: "" });
          }
        },
      },
      readonly: false,
      name: 'email'
    });
    this.children.inputLogin = new Input({
      type: 'text',
      labelStyle: 'profile__label',
      label: 'Логин',
      inputStyle: 'profile__input',
      value: window.store.getState().user?.login,
      placeholder: 'Логин',
      events: {
        change: (evt) => {
          const regExLogin = /^[A-Za-z]+[A-Za-z0-9_-]{3,20}[A-Za-z0-9]?$/;
          const value = evt.target.value;
          (this.children.inputLogin as Block).setProps({ value });
          if (!regExLogin.test(value)) {
            (this.children.inputLogin as Block).setProps({ error: 'Неверный логин' });
          } else {
            (this.children.inputLogin as Block).setProps({ error: "" });
          }
        },
      },
      readonly: false,
      name: 'login'
    });
    this.children.inputName = new Input({
      type: 'text',
      labelStyle: 'profile__label',
      label: 'Имя',
      inputStyle: 'profile__input',
      value: window.store.getState().user?.firstName,
      placeholder: 'Имя',
      events: {
        change: (evt) => {
          const regExName = /^[А-ЯЁA-Z][а-яёa-z]*-?[А-ЯЁA-Z]?[а-яёa-z]*$/;
          const value = evt.target.value;
          (this.children.inputName as Block).setProps({ value });
          if (!regExName.test(value)) {
            (this.children.inputName as Block).setProps({ error: 'Имя может содержать только латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)' });
          } else {
            (this.children.inputName as Block).setProps({ error: "" });
          }
        },
      },
      readonly: false,
      name: 'firstName'
    });
    this.children.inputSurname = new Input({
      type: 'text',
      labelStyle: 'profile__label',
      label: 'Фамилия',
      inputStyle: 'profile__input',
      value: window.store.getState().user?.secondName,
      placeholder: 'Фамилия',
      events: {
        change: (evt) => {
          const regExName = /^[А-ЯЁA-Z][а-яёa-z]*-?[А-ЯЁA-Z]?[а-яёa-z]*$/;
          const value = evt.target.value;
          (this.children.inputSurname as Block).setProps({ value });
          if (!regExName.test(value)) {
            (this.children.inputSurname as Block).setProps({ error: 'Фамилия может содержать только латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)' });
          } else {
            (this.children.inputSurname as Block).setProps({ error: "" });
          }
        },
      },
      readonly: false,
      name: 'secondName'
    });
    this.children.inputDisplayName = new Input({

      type: 'text',
      labelStyle: 'profile__label',
      label: 'Имя в чате',
      inputStyle: 'profile__input',
      value: window.store.getState().user?.displayName ?? '',
      placeholder: 'Имя в чате',
      events: {
        change: (evt) => {
          const regExName = /^[А-ЯЁA-Z][а-яёa-z]*-?[А-ЯЁA-Z]?[а-яёa-z]*$/;
          const value = evt.target.value;
          (this.children.inputDisplayName as Block).setProps({ value });
          if (!regExName.test(value)) {
            (this.children.inputDisplayName as Block).setProps({ error: 'Имя в чате может содержать только латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)' });
          } else {
            (this.children.inputDisplayName as Block).setProps({ error: "" });
          }
        },
      },
      readonly: false,
      name: 'displayName',
      errorStyle: 'profile__input-error',
    });
    this.children.inputPhone = new Input({
      type: 'tel',
      labelStyle: 'profile__label',
      label: 'Телефон',
      inputStyle: 'profile__input',
      value: window.store.getState().user?.phone,
      placeholder: 'Телефон',
      events: {
        change: (evt) => {
          const regExPhone = /^\+?\d{10,15}$/;
          const value = evt.target.value;
          (this.children.inputPhone as Block).setProps({ value });
          if (!regExPhone.test(value)) {
            (this.children.inputPhone as Block).setProps({ error: 'Телефон может содержать только от 10 до 15 цифр и начинаться с плюса' });
          } else {
            (this.children.inputPhone as Block).setProps({ error: "" });
          }
        },
      },
      readonly: false,
      name: 'phone'
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

          window.store.dispatch(change, {
            login: ((this.children.inputLogin as Block).element?.firstElementChild as HTMLInputElement).value,
            first_name: ((this.children.inputName as Block).element?.firstElementChild as HTMLInputElement).value,
            second_name: ((this.children.inputSurname as Block).element?.firstElementChild as HTMLInputElement).value,
            display_name: ((this.children.inputDisplayName as Block).element?.firstElementChild as HTMLInputElement).value,
            email: ((this.children.inputEmail as Block).element?.firstElementChild as HTMLInputElement).value,
            phone: ((this.children.inputPhone as Block).element?.firstElementChild as HTMLInputElement).value,
          })

          this.props.router.go('/settings');
        }
      },
      buttonStyle: 'button__authorize',
      type: 'button',
      label: 'Сохранить'
    })

    this.children.modalUploadAvatar = new ModalUpload({
      isDisabled: true,
    });

    this.children.buttonUpload = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          this.children.modalUploadAvatar.setProps({ isDisabled: false });
        }
      },
      buttonStyle: 'button__avatar',
      type: 'button',
      label: 'Поменять аватар'
    })
  }

  private isValidForm(): boolean {
    return this.checkLoginValid() &&
      this.checkEmailValid() &&
      this.checkDisplayNameValid() &&
      this.checkNameValid() &&
      this.checkSurnameValid() &&
      this.checkPhoneValid();
  }

  private checkLoginValid(): boolean {
    const login = ((this.children.inputLogin as Block).element?.firstElementChild as HTMLInputElement).value;
    const regExLogin = /^[A-Za-z]+[A-Za-z0-9_-]{3,20}[A-Za-z0-9]?$/;

    if (regExLogin.test(login)) {
      (this.children.inputLogin as Block).setProps({ error: "" });
      return true;
    }

    (this.children.inputLogin as Block).setProps({ error: 'Неверный логин' });
    return false;
  }

  private checkEmailValid(): boolean {
    const email = ((this.children.inputEmail as Block).element?.firstElementChild as HTMLInputElement).value;
    const regExpEmail = /\S+@\S+\.\S+/;

    if (regExpEmail.test(email)) {
      (this.children.inputEmail as Block).setProps({ error: "" });
      return true;
    }

    (this.children.inputEmail as Block).setProps({ error: 'Неверный Email' });
    return false;
  }

  private checkNameValid(): boolean {
    const name = ((this.children.inputName as Block).element?.firstElementChild as HTMLInputElement).value;
    const regExName = /^[А-ЯЁA-Z][а-яёa-z]*-?[А-ЯЁA-Z]?[а-яёa-z]*$/;

    if (regExName.test(name)) {
      (this.children.inputName as Block).setProps({ error: "" });
      return true;
    }

    (this.children.inputName as Block).setProps({ error: 'Имя может содержать только латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)' });
    return false;
  }

  private checkDisplayNameValid(): boolean {
    const displayName = ((this.children.inputDisplayName as Block).element?.firstElementChild as HTMLInputElement).value;
    const regExName = /^[А-ЯЁA-Z][а-яёa-z]*-?[А-ЯЁA-Z]?[а-яёa-z]*$/;

    if (regExName.test(displayName)) {
      (this.children.inputDisplayName as Block).setProps({ error: "" });
      return true;
    }

    (this.children.inputDisplayName as Block).setProps({ error: 'Имя может содержать только латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)' });
    return false;
  }

  private checkSurnameValid(): boolean {
    const surname = ((this.children.inputSurname as Block).element?.firstElementChild as HTMLInputElement).value;
    const regExSurname = /^[А-ЯЁA-Z][а-яёa-z]*-?[А-ЯЁA-Z]?[а-яёa-z]*$/;

    if (regExSurname.test(surname)) {
      (this.children.inputSurname as Block).setProps({ error: "" });
      return true;
    }

    (this.children.inputSurname as Block).setProps({ error: 'Фамилия может содержать только латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)' });
    return false;
  }

  private checkPhoneValid(): boolean {
    const phone = ((this.children.inputPhone as Block).element?.firstElementChild as HTMLInputElement).value;
    const regExPhone = /^\+?\d{10,15}$/;
    if (regExPhone.test(phone)) {
      (this.children.inputPhone as Block).setProps({ error: "" });
      return true;
    }

    (this.children.inputPhone as Block).setProps({ error: 'Телефон может содержать только от 10 до 15 цифр и начинаться с плюса' });
    return false;
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

export default withRouter(withStore(ProfileChange))
