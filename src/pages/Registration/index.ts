import { Button } from "../../components/Button";
import { Input } from "../../components/input/input";
import Block from "../../utils/Block";
import template from './registration.hbs';

interface RegistrationPageProps {
    title: string;
}

export class RegistrationPage extends Block {
    constructor(props: RegistrationPageProps) {
        super(props);
    }

    protected init(): void {
        this.children.inputEmail = new Input({ 
            type: 'email', 
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
            label: 'Почта', 
            value: this.props.email,
            labelStyle: 'registration__label',
            inputStyle: 'registration__input',
            errorStyle: 'registration__input-error',
            required: true,
            name: 'email'
        });
        this.children.inputLogin = new Input({ 
            type: 'text', 
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
            label: 'Логин', 
            value: this.props.login,
            labelStyle: 'registration__label',
            inputStyle: 'registration__input',
            errorStyle: 'registration__input-error',
            required: true,
            name: 'login'
        });
        this.children.inputName = new Input({ 
            type: 'text', 
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
            label: 'Имя', 
            value: this.props.name,
            labelStyle: 'registration__label',
            inputStyle: 'registration__input',
            errorStyle: 'registration__input-error',
            required: true,
            name: 'first_name'
        });
        this.children.inputSurname = new Input({ 
            type: 'text', 
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
            label: 'Фамилия', 
            value: this.props.surname,
            labelStyle: 'registration__label',
            inputStyle: 'registration__input',
            errorStyle: 'registration__input-error',
            required: true,
            name: 'second_name'
        });
        this.children.inputPhone = new Input({ 
            type: 'tel', 
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
            label: 'Телефон', 
            value: this.props.phone,
            labelStyle: 'registration__label',
            inputStyle: 'registration__input',
            errorStyle: 'registration__input-error',
            required: true,
            name: 'phone'
        });
        this.children.inputPassword = new Input({
            type: "password",
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
            label: 'Пароль',
            value: this.props.password,
            labelStyle: 'registration__label',
            inputStyle: 'registration__input',
            errorStyle: 'registration__input-error',
            name: 'password'
        });
        this.children.inputPasswordRepeat = new Input({
            type: "password",
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
                }
            }, 
            label: 'Пароль (ещё раз)',
            value: this.props.passwordRepeat,
            labelStyle: 'registration__label',
            inputStyle: 'registration__input',
            errorStyle: 'registration__input-error',
            name: 'passwordRepeat'
        });
        this.children.buttonLogin = new Button({
            label: "Зарегистрироваться",
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    const login = ((this.children.inputLogin as Block).element?.firstElementChild as HTMLInputElement).value;
                    const password = ((this.children.inputPassword as Block).element?.firstElementChild as HTMLInputElement).value;
                    const passwordRepeat = ((this.children.inputPasswordRepeat as Block).element?.firstElementChild as HTMLInputElement).value;
                    const email = ((this.children.inputEmail as Block).element?.firstElementChild as HTMLInputElement).value;
                    const name = ((this.children.inputName as Block).element?.firstElementChild as HTMLInputElement).value;
                    const surname = ((this.children.inputSurname as Block).element?.firstElementChild as HTMLInputElement).value;
                    const phone = ((this.children.inputPhone as Block).element?.firstElementChild as HTMLInputElement).value;
                    
                    const regExpPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
                    const regExEmail = /\S+@\S+\.\S+/;
                    const regExLogin = /^[A-Za-z]+[A-Za-z0-9_-]{3,20}[A-Za-z0-9]?$/;
                    const regExName = /^[А-ЯЁA-Z][а-яёa-z]*-?[А-ЯЁA-Z]?[а-яёa-z]*$/;
                    const regExPhone = /^\+?\d{10,15}$/;

                    if (!regExLogin.test(login)) {
                        (this.children.inputLogin as Block).setProps({ error: 'Неверный логин' })
                    }  else if (!regExpPassword.test(password)) {
                        (this.children.inputPassword as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифра' });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                    } else if (!regExpPassword.test(passwordRepeat)) {
                        (this.children.inputPasswordRepeat as Block).setProps({ error: 'Пароль должен состоять от 8 до 40 символов, хотя бы одна заглавная буква и цифрат' });
                        (this.children.inputPassword as Block).setProps({ error: "" });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                    } else if ((password !== passwordRepeat)) {
                        (this.children.inputPasswordRepeat as Block).setProps({ error: 'Пароли не совпадают' });
                        (this.children.inputPassword as Block).setProps({ error: "" });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                    } else if (!regExEmail.test(email)) {
                        (this.children.inputEmail as Block).setProps({ error: 'Неверный Email' });
                        (this.children.inputPassword as Block).setProps({ error: "" });
                        (this.children.inputPasswordRepeat as Block).setProps({ error: "" });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                    } else if (!regExName.test(name)) {
                        (this.children.inputName as Block).setProps({ error: 'Имя может содержать только латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)' });
                        (this.children.inputPassword as Block).setProps({ error: "" });
                        (this.children.inputPasswordRepeat as Block).setProps({ error: "" });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                        (this.children.inputEmail as Block).setProps({ error: "" });
                        
                    } else if (!regExName.test(surname)) {
                        (this.children.inputSurname as Block).setProps({ error: 'Фамилия может содержать только латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)' });
                        (this.children.inputName as Block).setProps({ error: "" });
                        (this.children.inputPassword as Block).setProps({ error: "" });
                        (this.children.inputPasswordRepeat as Block).setProps({ error: "" });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                        (this.children.inputEmail as Block).setProps({ error: "" });
                        
                    } else if (!regExPhone.test(phone)) {
                        (this.children.inputPhone as Block).setProps({ error: 'Телефон может содержать только от 10 до 15 символов, состоит из цифр, может начинается с плюса' });
                        (this.children.inputSurname as Block).setProps({ error: "" });
                        (this.children.inputName as Block).setProps({ error: "" });
                        (this.children.inputPassword as Block).setProps({ error: "" });
                        (this.children.inputPasswordRepeat as Block).setProps({ error: "" });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                        (this.children.inputEmail as Block).setProps({ error: "" });
                    }
                    else
                    {
                        (this.children.inputPhone as Block).setProps({ error: ""});
                        (this.children.inputSurname as Block).setProps({ error: "" });
                        (this.children.inputName as Block).setProps({ error: "" });
                        (this.children.inputPassword as Block).setProps({ error: "" });
                        (this.children.inputPasswordRepeat as Block).setProps({ error: "" });
                        (this.children.inputLogin as Block).setProps({ error: "" });
                        (this.children.inputEmail as Block).setProps({ error: "" });
                        
                        window.location.pathname = "/chat"
                        console.log(login + '\n' + password + '\n' + passwordRepeat + '\n' + email + '\n' + name + '\n' + surname + '\n' + phone)
                    }
                }
            },
            buttonStyle: 'button__authorize'
        }); 
        this.children.buttonRegistration = new Button({
            label: "Войти",
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    window.location.pathname = '/login'
                }
            },
            buttonStyle: 'button__registration'
        });

    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}