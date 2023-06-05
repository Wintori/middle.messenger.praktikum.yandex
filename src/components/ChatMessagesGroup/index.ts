import Block from '../../utils/Block';
import template from './chatMessagesGroup.hbs'
import { Message, MessageProps } from '../Message';


export interface ChatMessagesGroupInterface {
    date: string;
    chatMessages: MessageProps[];
}


export class ChatMessagesGroup extends Block {
    constructor(props: ChatMessagesGroupInterface) {
        super(props);
    }

    init() {
        this.children.chatMessages = this.props.chatMessages.map((props: any) => new Message(props))
    }

    render() {
        // В проект должен быть ваш собственный шаблонизатор
        return this.compile(template, this.props);
    }
}