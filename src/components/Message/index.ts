import Block from '../../utils/Block';
import { MessagesStatus } from '../MessageStatus';
import template from './message.hbs'

export interface MessageProps {
    messageText?: string;
    time: string;
    isOwner?: boolean;
    image?: string;
    status?: object;
}

export class Message extends Block {
    constructor(props: MessageProps) {
        super(props);
    }

    init() {
        this.children.messageStatus = new MessagesStatus({
            status: this.props.status,
            isImage: !!this.props.image
        })
    }

    render() {
        // В проект должен быть ваш собственный шаблонизатор
        return this.compile(template, this.props);
    }
}