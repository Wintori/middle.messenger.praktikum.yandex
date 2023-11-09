import { Button } from "../../components/Button";
import { Input } from "../../components/input/input";
import Block from "../../core/Block";
import template from "./login.hbs";
import { login } from '../../services/auth'
import { withStore } from "../../utils/withStore";
import { withRouter } from "../../utils/withRouter";

interface ILogin { }

class Login extends Block {
  constructor(props: ILogin) {
    super(props);
    if (this.props.store.state.user) {
      this.props.router.go('/messenger')
    }
  }

  protected init(): void {
    this.children.inputLogin = new Input({
      type: 'text',
      events: {
        change: (evt) => {
          const regExLogin = /^[A-Za-z]+[A-Za-z0-9_-]{3,20}[A-Za-z0-9]?$/;
          const value = evt.target.value;
          (this.children.inputLogin as Block).setProps({ value })
          if (!regExLogin.test(value)) {
            (this.children.inputLogin as Block).setProps({ error: 'Неверный логин' });
          } else {
            (this.children.inputLogin as Block).setProps({ error: "" })
          }
        },
      },
      label: 'Логин',
      value: this.props.login,
      labelStyle: 'login__label',
      inputStyle: 'login__input',
      errorStyle: 'login__input-error',
      name: 'login'
    });

    this.children.inputPassword = new Input({
      type: "password",
      events: {
        change: (evt) => {
          const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
          const value = evt.target.value;
          (this.children.inputPassword as Block).setProps({ value })
          if (!regExpPassword.test(value)) {
            (this.children.inputPassword as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифрат' });
          } else {
            (this.children.inputPassword as Block).setProps({ error: "" })
          }
        },
      },
      label: 'Пароль',
      value: this.props.password,
      labelStyle: 'login__label',
      inputStyle: 'login__input',
      errorStyle: 'login__input-error',
      name: 'password'
    });

    this.children.buttonLogin = new Button({
      label: "Авторизоваться",
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          const loginValue = ((this.children.inputLogin as Block).element?.firstElementChild as HTMLInputElement).value;
          const passwordValue = ((this.children.inputPassword as Block).element?.firstElementChild as HTMLInputElement).value;
          const regExLogin = /^[A-Za-z]+[A-Za-z0-9_-]{3,20}[A-Za-z0-9]?$/;
          const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;

          if (!regExLogin.test(loginValue)) {
            (this.children.inputLogin as Block).setProps({ error: 'Неверный логин' })
          } else if (!regExpPassword.test(passwordValue)) {
            (this.children.inputPassword as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифра' });
            (this.children.inputLogin as Block).setProps({ error: "" })
          }
          else {
            (this.children.inputLogin as Block).setProps({ error: "" });
            (this.children.inputPassword as Block).setProps({ error: "" });

            window.store.dispatch(login, {
              login: loginValue,
              password: passwordValue
            })
            this.props.router.go('/messenger')
          }
        }
      },
      buttonStyle: 'button__authorize',
      type: 'button'
    });

    this.children.buttonRegistration = new Button({
      label: "Нет аккаунта?",
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          this.props.router.go('/sign-up')
        }
      },
      buttonStyle: 'button__registration',
      type: 'button'
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

export default withRouter(withStore(Login))
