import Block from '../../utils/Block';
import { Button } from '../Button';
import template from './chatHeader.hbs'
import BurgerImage from '../../assets/burger.svg';
import noAvatar from '../../assets/no-image.jpg';


export interface ChatHeaderInterface {
    name: string;
    avatar?: string;
}


export class ChatHeader extends Block {
    constructor(props: ChatHeaderInterface) {
        super(props);
    }

    init() {
        this.props.noAvatar = noAvatar;

        this.children.buttonTools = new Button({
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    window.location.pathname = "/chat/settings"
                }
            },
            buttonStyle: 'button__tools',
            image: BurgerImage,
            imageStyle: 'chat__header__tools-image',
            type: 'button'
        })
    }

    render() {
        // В проект должен быть ваш собственный шаблонизатор
        return this.compile(template, this.props);
    }
}