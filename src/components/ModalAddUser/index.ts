import Block from "../../core/Block";
import { addUser } from "../../services/chat";
import { Button } from "../Button";
import { Input } from "../input/input";
import template from './modalAddUser.hbs';


interface ModalAddUserInterface {
  isDisabled: boolean;
}

export class ModalAddUser extends Block {
  constructor(props: ModalAddUserInterface) {
    super(props);
  }

  init() {
    this.children.inputLogin = new Input({
      type: 'text',
      events: {
        change: (evt) => {
          const value = evt.target.value;
          (this.children.inputLogin as Block).setProps({ value })
        },
      },
      label: 'Логин',
      value: this.props.login,
      labelStyle: 'modal-add-user__label',
      inputStyle: 'login__input',
      required: true,
    });

    this.children.buttonAdd = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          const login = ((this.children.inputLogin as Block).element?.firstElementChild as HTMLInputElement).value;

          window.store.dispatch(addUser, {
            users: Array.isArray(login) ? login : [login],
            chatId: window.store.getState().activeChat?.id
          })
        }
      },
      buttonStyle: 'button__authorize',
      type: 'button',
      label: 'Добавить'
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
