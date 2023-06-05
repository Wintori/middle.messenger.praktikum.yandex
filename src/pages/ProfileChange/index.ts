import Block from "../../utils/Block";
import template from './profileChange.hbs'
import backImage from '../../assets/button-back.svg'
import { Button } from "../../components/Button";
import { Input } from "../../components/input/input";


export class ProfileChangePage extends Block {
    constructor() {
        super()
    }
    protected init(): void {
        this.props.backImage = backImage;

        this.children.inputEmail = new Input({
            type: 'email',
            labelStyle: 'profile__label',
            label: 'Почта',
            inputStyle: 'profile__input',
            value: 'pochta@yandex.ru',
            placeholder: 'Почта',
            events: {
                change: (evt) => {
                    const regExEmail = /\S+@\S+\.\S+/;
                    const value = evt.target.value;
                    (this.children.inputEmail as Block).setProps({ value })
                    if (!regExEmail.test(value)) {
                        (this.children.inputEmail as Block).setProps({ error: 'Неверный Email' });
                    } else {
                        (this.children.inputEmail as Block).setProps({ error: "" })
                    }
                },
            },
            required: true,
            errorStyle: 'registration__input-error',
            name: 'email'
        });
        this.children.inputLogin = new Input({
            type: 'text',
            labelStyle: 'profile__label',
            label: 'Логин',
            inputStyle: 'profile__input',
            value: 'ivanivanov',
            placeholder: 'Логин',
            events: {
                change: (evt) => {
                    const regExLogin = /^[A-Za-z]+[A-Za-z0-9_-]{3,20}[A-Za-z0-9]?$/;
                    const value = evt.target.value;
                    (this.children.inputLogin as Block).setProps({ value })
                    if (!regExLogin.test(value)) {
                        (this.children.inputLogin as Block).setProps({ error: 'Неверный логин' });
                    } else {
                        (this.children.inputLogin as Block).setProps({ error: "" })
                    }
                },
            },
            required: true,
            errorStyle: 'registration__input-error',
            name: 'login'
        });
        this.children.inputName = new Input({
            type: 'text',
            labelStyle: 'profile__label',
            label: 'Имя',
            inputStyle: 'profile__input',
            value: 'Иван',
            placeholder: 'Имя',
            events: {
                change: (evt) => {
                    const regExName = /^[А-ЯЁA-Z][а-яёa-z]*-?[А-ЯЁA-Z]?[а-яёa-z]*$/;
                    const value = evt.target.value;
                    (this.children.inputName as Block).setProps({ value })
                    if (!regExName.test(value)) {
                        (this.children.inputName as Block).setProps({ error: 'Имя может содержать только латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)' });
                    } else {
                        (this.children.inputName as Block).setProps({ error: "" })
                    }
                },
            },
            required: true,
            errorStyle: 'registration__input-error',
            name: 'first_name'
        });
        this.children.inputSurname = new Input({
            type: 'text',
            labelStyle: 'profile__label',
            label: 'Фамилия',
            inputStyle: 'profile__input',
            value: 'Иванов',
            placeholder: 'Фамилия',
            events: {
                change: (evt) => {
                    const regExName = /^[А-ЯЁA-Z][а-яёa-z]*-?[А-ЯЁA-Z]?[а-яёa-z]*$/;
                    const value = evt.target.value;
                    (this.children.inputSurname as Block).setProps({ value })
                    if (!regExName.test(value)) {
                        (this.children.inputSurname as Block).setProps({ error: 'Фамилия может содержать только латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)' });
                    } else {
                        (this.children.inputSurname as Block).setProps({ error: "" })
                    }
                },
            },
            required: true,
            errorStyle: 'registration__input-error',
            name: 'second_name'
        });
        this.children.inputNickName = new Input({
            type: 'text',
            labelStyle: 'profile__label',
            label: 'Имя в чате',
            inputStyle: 'profile__input',
            value: 'Иван',
            placeholder: 'Имя в чате',
            events: {
                change: (evt) => {
                    const value = evt.target.value;
                    (this.children.inputNickName as Block).setProps({ value });
                    if (value.length === 0) {
                        (this.children.inputNickName as Block).setProps({ error: "Поле не должно быть пустым" });
                    } else {
                        (this.children.inputNickName as Block).setProps({ error: "" });
                    }
                },
            },
            required: true,
            errorStyle: 'registration__input-error',
            name: 'display_name'
        })
        this.children.inputPhone = new Input({
            type: 'tel',
            labelStyle: 'profile__label',
            label: 'Телефон',
            inputStyle: 'profile__input',
            value: '+79099673030',
            placeholder: 'Телефон',
            events: {
                change: (evt) => {
                    const regExPhone = /^\+?\d{10,15}$/;
                    const value = evt.target.value;
                    (this.children.inputPhone as Block).setProps({ value })
                    if (!regExPhone.test(value)) {
                        (this.children.inputPhone as Block).setProps({ error: 'Телефон может содержать только от 10 до 15 символов, состоит из цифр, может начинается с плюса' });
                    } else {
                        (this.children.inputPhone as Block).setProps({ error: "" })
                    }
                },
            },
            required: true,
            errorStyle: 'registration__input-error',
            name: 'phone'
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
                    const login = ((this.children.inputLogin as Block).element?.firstElementChild as HTMLInputElement).value;
                    const email = ((this.children.inputEmail as Block).element?.firstElementChild as HTMLInputElement).value;
                    const name = ((this.children.inputName as Block).element?.firstElementChild as HTMLInputElement).value;
                    const surname = ((this.children.inputSurname as Block).element?.firstElementChild as HTMLInputElement).value;
                    const phone = ((this.children.inputPhone as Block).element?.firstElementChild as HTMLInputElement).value;
                    const nickName = ((this.children.inputNickName as Block).element?.firstElementChild as HTMLInputElement).value;

                    const regExEmail = /\S+@\S+\.\S+/;
                    const regExLogin = /^[A-Za-z]+[A-Za-z0-9_-]{3,20}[A-Za-z0-9]?$/;
                    const regExName = /^[А-ЯЁA-Z][а-яёa-z]*-?[А-ЯЁA-Z]?[а-яёa-z]*$/;
                    const regExPhone = /^\+?\d{10,15}$/;

                    if (!regExLogin.test(login)) {
                        (this.children.inputLogin as Block).setProps({ error: 'Неверный логин' })
                    } else if (!regExEmail.test(email)) {
                        (this.children.inputEmail as Block).setProps({ error: 'Неверный Email' });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                    } else if (!regExName.test(name)) {
                        (this.children.inputName as Block).setProps({ error: 'Имя может содержать только латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)' });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                        (this.children.inputEmail as Block).setProps({ error: "" });

                    } else if (!regExName.test(surname)) {
                        (this.children.inputSurname as Block).setProps({ error: 'Фамилия может содержать только латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)' });
                        (this.children.inputName as Block).setProps({ error: "" });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                        (this.children.inputEmail as Block).setProps({ error: "" });

                    } else if (!regExPhone.test(phone)) {
                        (this.children.inputPhone as Block).setProps({ error: 'Телефон может содержать только от 10 до 15 символов, состоит из цифр, может начинается с плюса' });
                        (this.children.inputSurname as Block).setProps({ error: "" });
                        (this.children.inputName as Block).setProps({ error: "" });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                        (this.children.inputEmail as Block).setProps({ error: "" });
                    } else if (nickName.length === 0) {
                        (this.children.inputNickName as Block).setProps({ error: "Поле не должно быть пустым" });
                        (this.children.inputPhone as Block).setProps({ error: "" });
                        (this.children.inputSurname as Block).setProps({ error: "" });
                        (this.children.inputName as Block).setProps({ error: "" });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                        (this.children.inputEmail as Block).setProps({ error: "" });
                    }
                    else {
                        (this.children.inputPhone as Block).setProps({ error: "" });
                        (this.children.inputSurname as Block).setProps({ error: "" });
                        (this.children.inputName as Block).setProps({ error: "" });
                        (this.children.inputNickName as Block).setProps({ error: "" });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                        (this.children.inputEmail as Block).setProps({ error: "" });

                        window.location.pathname = "/profile"
                        console.log(login + '\n' + email + '\n' + name + '\n' + surname + '\n' + phone + '\n' + nickName)
                    }
                }
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