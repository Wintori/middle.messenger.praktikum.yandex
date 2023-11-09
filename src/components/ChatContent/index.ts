import Block from '../../core/Block';
import template from './chatContent.hbs'
import ChatMessagesGroup, { ChatMessagesGroupInterface } from '../ChatMessagesGroup';
import { withRouter } from '../../utils/withRouter';
import { withStore } from '../../utils/withStore';


export interface ChatContentInterface {
  messagesGroups?: ChatMessagesGroupInterface[];
}

class ChatContent extends Block {
  constructor(props: ChatContentInterface) {
    super(props);
  }

  componentDidMount(): void {
    this.setProps({ messagesGroups: window.store.getState().messages });

    this.children.messagesContent = this.props.messagesGroups
      ?.map((props: ChatMessagesGroupInterface) =>
        new ChatMessagesGroup(props)
      )
      ?.reverse() ?? [];
  }

  init() {

  }

  componentDidUpdate() {
    this.children.messagesContent = this.props.messagesGroups
      ?.map((props: ChatMessagesGroupInterface) =>
        new ChatMessagesGroup(props)
      )
      ?.reverse() ?? [];

    return true
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default withRouter(withStore(ChatContent))
