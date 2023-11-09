import { Button } from '../../components/Button';
import ChatBar from '../../components/ChatBar';
import ChatHeader from '../../components/ChatHeader';
import { ChatMessagesGroupInterface } from '../../components/ChatMessagesGroup';
import ChatMessagesGroup from '../../components/ChatMessagesGroup';
import Block from '../../core/Block';
import template from './chat.hbs'
import upload from '../../assets/upload.svg';
import send from '../../assets/arrow-send.svg'
import { MessageInput } from '../../components/MessageInput';
import { withRouter } from '../../utils/withRouter';
import { withStore } from '../../utils/withStore';
import { removeChat } from '../../services/chat';
import { ModalAddUser } from '../../components/ModalAddUser';
import { PopupUpload } from '../../components/PopupUpload';
import { Chat } from '../../utils/apiTransformers';
import { websocketService } from '../../core/WebSocket';
import ChatContent from '../../components/ChatContent';
import { ModalAddChat } from '../../components/ModalAddChat';
import { ModalChatImageUpload } from '../../components/ModalChatImageUpload';
import { ModalDeleteUser } from '../../components/ModalDeleteUser';


interface ChatPageProps {
  currentChat: Chat | null;
  chatMessagesGroups: ChatMessagesGroupInterface[];
}

class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    super(props);
    if (!this.props.store.state.user) {
      this.props.router.go('/')
    }
  }

  init() {
    this.children.chatMessagesGroups = this.props.chatMessagesGroups?.map((props: any) => new ChatMessagesGroup(props)).reverse() ?? []

    this.children.chatBar = new ChatBar({
      settingsHandler: () => {
        this.props.router.go('/settings');
      },
      onClickMessageHandler: async (chat: Chat) => {
        this.props.currentChat = null;
        window.store.dispatch({ activeChat: chat })
        this.props.currentChat = chat;
        this.children.chatHeader.setProps({ name: window.store.getState()?.activeChat?.title ?? '', avatar: window.store.getState()?.activeChat?.avatar ?? '' });
        await websocketService.open(chat.id);

        setTimeout(() => {
          this.children.chatContent.setProps({ messagesGroups: window.store.getState()?.messages });
        }, 500)
      },
      addChatHandler: () => {
        this.children.modalAddChat.setProps({ isDisabled: false });
      }
    });

    this.children.modalAddUser = new ModalAddUser({ isDisabled: true });
    this.children.modalDeleteUser = new ModalDeleteUser({ isDisabled: true });
    this.children.modalAddChat = new ModalAddChat({ isDisabled: true })
    this.children.modalUploadChatAvatar = new ModalChatImageUpload({ isDisabled: true })

    this.children.chatContent = new ChatContent({});

    this.children.chatHeader = new ChatHeader({
      isDisabled: true,
      addUserHandler: () => {
        this.children.modalAddUser.setProps({ isDisabled: false });
      },
      deleteUserHandler: () => {
        this.children.modalDeleteUser.setProps({ isDisabled: false });
      },
      deleteChatHandler: () => {
        window.store.dispatch(removeChat, {
          chatId: window.store.getState().activeChat?.id
        })
      },
      uploadChatImage: () => {
        this.children.modalUploadChatAvatar.setProps({ isDisabled: false });
      },
      buttonToolsHandler: () => {
        this.props.isDisabled = !this.props.isDisabled;
      }
    })

    this.children.buttonUpload = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          this.children.popupUpload.setProps({ isDisabled: !this.children.popupUpload.getProps().isDisabled });
        }
      },
      buttonStyle: 'button__chat-upload',
      image: upload,
      type: 'button'
    })

    this.children.inputMessage = new MessageInput({
      events: {
        input: (evt: any) => {
          evt.preventDefault();
          const value = evt.target.textContent;

          if (value.length === 0) {
            return;
          }
        },
        keydown: (evt: any) => {
          if (evt.keyCode !== 13) {
            return;
          }

          evt.preventDefault();
          const message = ((this.children.inputMessage as Block).element?.textContent) as string;

          if (message?.length === 0) {
            console.log('Поле message не должно быть пустым!');
            return;
          }

          websocketService.sendMessage(message);
          (this.children.inputMessage as Block).element!.textContent = '';
        }
      }
    })

    this.children.buttonSend = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          const message = ((this.children.inputMessage as Block).element?.textContent) as string;

          if (message?.length === 0) {
            console.log('Поле message не должно быть пустым!');
            return;
          }

          websocketService.sendMessage(message);
          (this.children.inputMessage as Block).element!.textContent = '';
        }
      },
      buttonStyle: 'button__chat-send',
      image: send,
      imageStyle: 'chat__footer__send-image',
      type: 'button'
    })

    this.children.popupUpload = new PopupUpload({ isDisabled: true });
  }

  componentDidUpdate(): boolean {
    this.children.chatBar = new ChatBar({
      settingsHandler: () => {
        this.props.router.go('/settings');
      },
      onClickMessageHandler: async (chat: Chat) => {
        this.props.currentChat = null;
        window.store.dispatch({ activeChat: chat })
        this.props.currentChat = chat;
        this.children.chatHeader.setProps({ name: window.store.getState()?.activeChat?.title ?? '', avatar: window.store.getState()?.activeChat?.avatar ?? '' });
        await websocketService.open(chat.id);

        setTimeout(() => {
          this.children.chatContent.setProps({ messagesGroups: window.store.getState()?.messages });
        }, 500)
      },
      addChatHandler: () => {
        this.children.modalAddChat.setProps({ isDisabled: false });
      }
    });

    this.children.chatHeader.setProps({ name: window.store.getState().activeChat?.title, avatar: window.store.getState().activeChat?.avatar })

    this.children.chatContent = new ChatContent({});

    return true;
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default withRouter(withStore(ChatPage))
