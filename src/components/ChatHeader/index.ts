import Block from '../../core/Block';
import { Button } from '../Button';
import template from './chatHeader.hbs'
import BurgerImage from '../../assets/burger.svg';
import noAvatar from '../../assets/no-image.jpg';
import { PopupSettings } from '../PopupSettings';

export interface ChatHeaderInterface {
  name?: string;
  avatar?: string;
  addUserHandler: () => void;
  deleteUserHandler: () => void;
  deleteChatHandler: () => void;
  uploadChatImage: () => void;
}

export class ChatHeader extends Block {
  constructor(props: ChatHeaderInterface) {
    super(props);
  }

  init() {
    this.props.noAvatar = noAvatar;

    this.children.popupSettings = new PopupSettings({
      isDisabled: false, // Почему то не работает скрытие/открытие, хотя флаг изменяется. Не происхоит update у компонента...
      addUserHandler: () => {
        this.props.addUserHandler();
        this.children.popupSettings.setProps({ isDisabled: !this.children.popupSettings.getProps().isDisabled });
      },
      deleteUserHandler: () => {
        this.props.deleteUserHandler();
        this.children.popupSettings.setProps({ isDisabled: !this.children.popupSettings.getProps().isDisabled });
      },
      deleteChatHandler: () => {
        this.props.deleteChatHandler();
        this.children.popupSettings.setProps({ isDisabled: !this.children.popupSettings.getProps().isDisabled });
      },
      uploadChatImage: () => {
        this.props.uploadChatImage();
        this.children.popupSettings.setProps({ isDisabled: !this.children.popupSettings.getProps().isDisabled });
      }
    })

    this.children.buttonTools = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          this.children.popupSettings.setProps({ isDisabled: !this.children.popupSettings.getProps().isDisabled });
        }
      },
      buttonStyle: 'button__tools',
      image: BurgerImage,
      imageStyle: 'chat__header__tools-image',
      type: 'button'
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
