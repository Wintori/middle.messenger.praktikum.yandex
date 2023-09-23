import Block from '../../core/Block';
import template from './chatContent.hbs'
import ChatMessagesGroup, { ChatMessagesGroupInterface } from '../ChatMessagesGroup';


export interface ChatContentInterface {
  messagesGroups?: ChatMessagesGroupInterface[];
}

export class ChatContent extends Block {
  constructor(props: ChatContentInterface) {
    super(props);

    this.setProps({ messagesGroups: window.store.getState().messages });
  }

  componentDidMount(): void {

    setTimeout(() => {
      this.children.messagesContent = this.props.messagesGroups.map((props: ChatMessagesGroupInterface) => new ChatMessagesGroup(props)).reverse();
    }, 1000)
  }

  init() {

  }

  render() {
    return this.compile(template, this.props);
  }
}
