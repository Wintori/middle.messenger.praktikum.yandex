import Block from '../../core/Block';
import template from './chatMessagesGroup.hbs'
import { Message, MessageProps } from '../Message';
import { withStore } from '../../utils/withStore';


export interface ChatMessagesGroupInterface {
  day: string;
  messages: MessageProps[];
}


class ChatMessagesGroup extends Block {
  constructor(props: ChatMessagesGroupInterface) {
    super(props);
  }

  init() {
    this.children.messages = this.props.messages.map((props: any) => new Message(props)).reverse();
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default withStore(ChatMessagesGroup)