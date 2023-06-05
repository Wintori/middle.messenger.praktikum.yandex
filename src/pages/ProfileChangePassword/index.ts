import Block from "../../utils/Block";
import template from './profileChangePassword.hbs';
import backImage from '../../assets/button-back.svg';
import { Button } from "../../components/Button";
import { Input, InputProps } from "../../components/input/input";

export class ProfileChangePasswordPage extends Block {
    constructor() {
        super()
    }
    protected init(): void {
        this.props.backImage = backImage;

        this.children.inputOldPassword = new Input({
            type: 'password',
            labelStyle: 'profile__label',
            label: 'Старый пароль',
            inputStyle: 'profile__input',
            value: this.props.oldPassword,
            placeholder: '•••••••••••',
            events: {
                change: (evt) => {
                    const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
                    const value = evt.target.value;
                    (this.children.inputOldPassword as Block).setProps({ value })
                    if (!regExpPassword.test(value)) {
                        (this.children.inputOldPassword as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифрат' });
                    } else {
                        (this.children.inputOldPassword as Block).setProps({ error: "" })
                    }
                },
            },
            required: true,
            errorStyle: 'login__input-error',
            name: 'oldPassword'
        });
        this.children.inputPassword = new Input({
            type: 'password',
            labelStyle: 'profile__label',
            label: 'Новый пароль',
            inputStyle: 'profile__input',
            value: this.props.password,
            placeholder: '•••••••••••',
            events: {
                change: (evt) => {
                    const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
                    const value = evt.target.value;
                    (this.children.inputPassword as Block).setProps({ value })
                    if (!regExpPassword.test(value)) {
                        (this.children.inputPassword as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифрат' });
                    } else {
                        (this.children.inputPassword as Block).setProps({ error: "" })
                    }
                },
            },
            required: true,
            errorStyle: 'login__input-error',
            name: 'newPassword'
        });
        this.children.inputPasswordRepeat = new Input({
            type: 'password',
            labelStyle: 'profile__label',
            label: 'Повторите новый пароль',
            inputStyle: 'profile__input',
            value: this.props.repeatPassword,
            placeholder: '•••••••••••',
            events: {
                change: (evt) => {
                    const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
                    const value = evt.target.value;
                    (this.children.inputPasswordRepeat as Block).setProps({ value })
                    if (!regExpPassword.test(value)) {
                        (this.children.inputPasswordRepeat as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифрат' });
                    } else if ((((this.children.inputPassword as Block).element?.firstElementChild as HTMLInputElement).value) !== value) {
                        (this.children.inputPasswordRepeat as Block).setProps({ error: "Пароли не совпадают" })
                    } else {
                        (this.children.inputPasswordRepeat as Block).setProps({ error: "" })
                    }
                },
            },
            required: true,
            errorStyle: 'login__input-error',
            name: 'newPasswordRepeat'
        });

        this.children.buttonBack = new Button({
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    window.location.pathname = "/chat";
                }
            },
            buttonStyle: 'button__close-profile',
            type: 'button',
            image: backImage,
            imageStyle: 'profile__back-image'
        })

        this.children.buttonSave = new Button({
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    const oldPassword = ((this.children.inputOldPassword as Block).element?.firstElementChild as HTMLInputElement).value;
                    const password = ((this.children.inputPassword as Block).element?.firstElementChild as HTMLInputElement).value;
                    const passwordRepeat = ((this.children.inputPasswordRepeat as Block).element?.firstElementChild as HTMLInputElement).value;
                    const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;

                    if (!regExpPassword.test(oldPassword)) {
                        (this.children.inputOldPassword as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифра' })
                    } else if (!regExpPassword.test(password)) {
                        (this.children.inputPassword as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифра' });
                        (this.children.inputOldPassword as Block).setProps({ error: "" });
                    } else if (!regExpPassword.test(passwordRepeat)) {
                        (this.children.inputPasswordRepeat as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифра' });
                        (this.children.inputOldPassword as Block).setProps({ error: "" });
                        (this.children.inputPassword as Block).setProps({ error: "" });
                    } else if ((password !== passwordRepeat)) {
                        (this.children.inputPasswordRepeat as Block).setProps({ error: "Пароли не совпадают" });
                        (this.children.inputOldPassword as Block).setProps({ error: "" });
                        (this.children.inputPassword as Block).setProps({ error: "" });
                    } else {
                        (this.children.inputPasswordRepeat as Block).setProps({ error: "" });
                        (this.children.inputOldPassword as Block).setProps({ error: "" });
                        (this.children.inputPassword as Block).setProps({ error: "" });
                        window.location.pathname = '/profile'
                    }
                },
            },
            buttonStyle: 'button__authorize',
            type: 'button',
            label: 'Сохранить'
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}