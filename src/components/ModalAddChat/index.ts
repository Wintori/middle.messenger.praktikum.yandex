import Block from "../../core/Block";
import { createChat } from "../../services/chat";
import { Button } from "../Button";
import { Input } from "../input/input";
import template from './modalAddChat.hbs';


interface ModalAddChatInterface {
  isDisabled: boolean;
}

export class ModalAddChat extends Block {
  constructor(props: ModalAddChatInterface) {
    super(props);
  }

  init() {

    this.children.inputChatName = new Input({
      type: 'text',
      events: {
        change: (evt) => {
          const value = evt.target.value;
          (this.children.inputChatName as Block).setProps({ value })
        },
      },
      label: 'Название чата',
      value: this.props.value,
      labelStyle: 'modal-add-chat__label',
      inputStyle: 'login__input',
      required: true,
    });

    this.children.buttonAdd = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();

          window.store.dispatch(createChat, {
            title: ((this.children.inputChatName as Block).element?.firstElementChild as HTMLInputElement).value
          })

          this.props.isDisabled = true;
        }
      },
      buttonStyle: 'button__authorize',
      type: 'button',
      label: 'Добавить'
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
