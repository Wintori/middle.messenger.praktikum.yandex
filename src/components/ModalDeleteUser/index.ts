import Block from "../../core/Block";
import { removeUser } from "../../services/chat";
import { Button } from "../Button";
import { Input } from "../input/input";
import template from './modalDeleteUser.hbs';


interface ModalDeleteUserInterface {
  isDisabled: boolean;
}

export class ModalDeleteUser extends Block {
  constructor(props: ModalDeleteUserInterface) {
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

    this.children.buttonRemove = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          const login = ((this.children.inputLogin as Block).element?.firstElementChild as HTMLInputElement).value;


          window.store.dispatch(removeUser, {
            users: Array.isArray(login) ? login : [login],
            chatId: window.store.getState().activeChat?.id
          })

          this.props.isDisabled = true;
        }
      },
      buttonStyle: 'button__authorize',
      type: 'button',
      label: 'Удалить'
    })
  }

  public componentDidMount(): void {
    document.addEventListener('keydown', this.handleEscKey);
  }
  
  public componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleEscKey);
  }
  
  private handleEscKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      this.props.isDisabled = true;
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}
