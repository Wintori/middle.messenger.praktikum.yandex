import Block from '../../core/Block';
import { MessagesStatus } from '../MessageStatus';
import template from './message.hbs'

export interface MessageProps {
  content?: string;
  time: string;
  isOwner?: boolean;
  image?: string;
  userId?: string;
  isRead?: boolean;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  init() {
    this.props.isOwner = this.props.userId === window.store.getState().user?.id;

    this.props.time = `${new Date(this.props.time).getHours()}:${new Date(this.props.time).getMinutes() < 10 ? '0' : ''}${new Date(this.props.time).getMinutes()}`;
    this.children.messageStatus = new MessagesStatus({
      status: this.props.isRead,
      isImage: !!this.props.image
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
