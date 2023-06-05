import Block from '../../utils/Block';
import { Button } from '../Button';
import template from './chatSettingsHeader.hbs'
import BurgerImage from '../../assets/burger.svg';
import noAvatar from '../../assets/no-image.jpg';
import { PopupSettings } from '../PopupSettings';


export interface ChatSettingsHeaderInterface {
    name: string;
    avatar?: string;
}


export class ChatSettingsHeader extends Block {
    constructor(props: ChatSettingsHeaderInterface) {
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

        this.children.popupSettings = new PopupSettings()
    }

    render() {
        // В проект должен быть ваш собственный шаблонизатор
        return this.compile(template, this.props);
    }
}