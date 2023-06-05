import Block from '../../utils/Block';
import template from './barMessage.hbs'
import noAvatar from '../../assets/no-image.jpg'

export interface BarMessageProps {
    avatar?: string;
    name: string;
    lastMessage?: string;
    timestamp: string;
    countOfNew?: number;
    events?: {
        click: (evt: PointerEvent) => void;
    };
}

export class BarMessage extends Block {
    constructor(props: BarMessageProps) {
        super(props);
    }

    init() {
        this.props.noAvatar = noAvatar;
    }

    render() {
        // В проект должен быть ваш собственный шаблонизатор
        return this.compile(template, this.props);
    }
}