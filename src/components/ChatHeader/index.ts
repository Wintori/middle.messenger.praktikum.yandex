import Block from '../../core/Block';
import { Button } from '../Button';
import template from './chatHeader.hbs';
import BurgerImage from '../../assets/burger.svg';
import noAvatar from '../../assets/no-image.jpg';
import { PopupSettings } from '../PopupSettings';
import { withRouter } from '../../utils/withRouter';
import { withStore } from '../../utils/withStore';

export interface ChatHeaderInterface {
  name?: string;
  avatar?: string;
  isDisabled?: boolean;
  addUserHandler: () => void;
  deleteUserHandler: () => void;
  deleteChatHandler: () => void;
  uploadChatImage: () => void;
  buttonToolsHandler: () => void;
}

class ChatHeader extends Block {
  public userAvatar: string;
  public userName: string;

  constructor(props: ChatHeaderInterface) {
    super(props);

    this.userAvatar = window.store.getState()?.activeChat?.avatar ?? '';
    this.userName = window.store.getState()?.activeChat?.title ?? '';
  }

  init() {
    this.props.noAvatar = noAvatar;

    this.children.popupSettings = new PopupSettings({
      isDisabled: this.props.isDisabled,
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
          this.props.buttonToolsHandler();
          this.children.popupSettings.setProps({ isDisabled: !this.children.popupSettings.getProps().isDisabled });
        }
      },
      buttonStyle: 'button__tools',
      image: BurgerImage,
      imageStyle: 'chat__header__tools-image',
      type: 'button'
    })
  }

  componentDidUpdate(): boolean {
    this.children.popupSettings = new PopupSettings({
      isDisabled: this.props.isDisabled,
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

    this.userAvatar = window.store.getState()?.activeChat?.avatar ?? '';
    this.userName = window.store.getState()?.activeChat?.title ?? '';

    return true;
  }

  render() {
    return this.compile(template, { ...this.props, userAvatar: this.userAvatar, userName: this.userName });
  }
}

export default withRouter(withStore(ChatHeader))
