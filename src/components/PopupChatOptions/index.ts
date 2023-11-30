import Block from '../../core/Block';
import template from './popupChatOptions.hbs';
import addPopup from '../../assets/add-settings.svg';
import closePopup from '../../assets/close-settings.svg'
import { Button } from '../Button';

interface PopupChatOptionsProps {
  isDisabled: boolean;
}

export class PopupChatOptions extends Block {

  constructor(props: PopupChatOptionsProps) {
    super(props);
  }

  init() {
    this.children.buttonArchive = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();

        }
      },
      buttonStyle: 'popup__list-item',
      type: 'button',
      label: 'Архив',
      image: addPopup,
      imageStyle: 'popup__list-item__image',
      isTextRightSide: true,
      textStyle: 'popup__list-item__text'
    })

    this.children.buttonSettings = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();

        }
      },
      buttonStyle: 'popup__list-item',
      type: 'button',
      label: 'Настройки',
      image: closePopup,
      imageStyle: 'popup__list-item__image',
      isTextRightSide: true,
      textStyle: 'popup__list-item__text'
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
