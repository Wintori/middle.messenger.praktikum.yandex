import Block from "../../utils/Block";
import { Button } from "../Button";
import { Input } from "../input/input";
import template from './modalAddUser.hbs';


interface ModalAddUserInterface {
    title: string; 
}

export class ModalAddUser extends Block {
    constructor(props: ModalAddUserInterface) {
        super(props);
    }

    init() {
        this.children.inputLogin = new Input({ 
            type: 'text', 
            events: {
                change: (evt) => {
                    const value = evt.target.value;
                    (this.children.inputLogin as Block).setProps({ value })
                },
            }, 
            label: 'Логин', 
            value: this.props.login,
            labelStyle: 'modal-add-user__label',
            inputStyle: 'login__input',
            required: true,
        });

        this.children.buttonAdd = new Button({
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    window.location.pathname = "/chat"
                }
            },
            buttonStyle: 'button__authorize',
            type: 'button',
            label: 'Добавить'
        })
    }

    render() {
        // В проект должен быть ваш собственный шаблонизатор
        return this.compile(template, this.props);
    }
}