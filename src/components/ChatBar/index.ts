import Block from '../../utils/Block';
import { Button } from '../Button';
import { Input } from '../input/input';
import template from './chatBar.hbs'
import buttonProfileImage from '../../assets/arrow.svg';
import { BarMessage, BarMessageProps } from '../BarMessage';


interface ChatBarInterface {
    barMessages: BarMessageProps[]
}


export class ChatBar extends Block {
    constructor(props: ChatBarInterface) {
        super(props);
    }

    init() {
        this.children.barMessages = this.props.barMessages.map((props: any) => new BarMessage(props))


        this.children.inputSearch = new Input({
            type: "search",
            events: {
                change: (evt) => {
                    const value = evt.target.value;
                    (this.children.inputSearch as Block).setProps({ value })
                },
            }, 
            label: '',
            value: this.props.search,
            labelStyle: '',
            inputStyle: 'chat-bar__inputSearch',
            errorStyle: 'login__input-error',
            placeholder: 'Поиск',
        });

        this.children.buttonProfile = new Button({
            label: 'Профиль',
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    window.location.pathname = '/profile'
                }
            },
            buttonStyle: 'button__profile',
            image: buttonProfileImage,
            type: 'button'
          });
    }

    render() {
        // В проект должен быть ваш собственный шаблонизатор
        return this.compile(template, this.props);
    }
}