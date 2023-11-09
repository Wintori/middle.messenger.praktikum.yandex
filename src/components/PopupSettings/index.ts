import Block from '../../core/Block';
import template from './popupSettings.hbs';
import addPopup from '../../assets/add-settings.svg';
import closePopup from '../../assets/close-settings.svg'
import trashPopup from '../../assets/trash.svg'
import { Button } from '../Button';

interface PopupSettingsProps {
  isDisabled: boolean;
  addUserHandler: () => void;
  deleteUserHandler: () => void;
  deleteChatHandler: () => void;
  uploadChatImage: () => void;
}

export class PopupSettings extends Block {

  constructor(props: PopupSettingsProps) {
    super(props);
  }

  init() {
    this.children.buttonAddUser = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          this.props.addUserHandler();
        }
      },
      buttonStyle: 'popup__list-item',
      type: 'button',
      label: 'Добавить пользователя',
      image: addPopup,
      imageStyle: 'popup__list-item__image',
      isTextRightSide: true,
      textStyle: 'popup__list-item__text'
    })

    this.children.buttonDeleteUser = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          this.props.deleteUserHandler();
        }
      },
      buttonStyle: 'popup__list-item',
      type: 'button',
      label: 'Удалить пользователя',
      image: closePopup,
      imageStyle: 'popup__list-item__image',
      isTextRightSide: true,
      textStyle: 'popup__list-item__text'
    })

    this.children.buttonUploadAvatar = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          this.props.uploadChatImage();
        }
      },
      buttonStyle: 'popup__list-item',
      type: 'button',
      label: 'Обновить фото',
      image: addPopup,
      imageStyle: 'popup__list-item__image',
      isTextRightSide: true,
      textStyle: 'popup__list-item__text'
    })

    this.children.buttonDeleteChat = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          this.props.deleteChatHandler();
        }
      },
      buttonStyle: 'popup__list-item',
      type: 'button',
      label: 'Удалить чат',
      image: trashPopup,
      imageStyle: 'popup__list-item__image',
      isTextRightSide: true,
      textStyle: 'popup__list-item__text'
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
