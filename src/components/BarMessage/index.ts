import Block from '../../core/Block';
import template from './barMessage.hbs'
import noAvatar from '../../assets/no-image.jpg'

export interface BarMessageProps {
  avatar?: string;
  title: string;
  lastMessage?: string;
  timestamp?: string;
  unreadCount?: number;
  events?: {
    click: (evt: PointerEvent) => void;
  };
  isActive?: boolean;
  id: number;
}

export class BarMessage extends Block {
  constructor(props: BarMessageProps) {
    super(props);
    this.props.isActive = false;
  }

  init() {
    this.props.noAvatar = noAvatar;
    this.props.timestamp = this.props?.lastMessage?.time ? `${new Date(this.props?.lastMessage?.time).getHours()}:${new Date(this.props?.lastMessage?.time).getMinutes() < 10 ? '0' : ''}${new Date(this.props.lastMessage.time).getMinutes()}` : '';

    if (this.props.id === window.store.getState().activeChat?.id) {
      this.setProps({ isActive: true })
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}
