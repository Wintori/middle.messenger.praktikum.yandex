import Block from "../../utils/Block";
import template from './uploadAvatarSuccess.hbs'
import backImage from '../../assets/button-back.svg'
import { Button } from "../../components/Button";
import { Input, InputProps } from "../../components/input/input";

interface UploadAvatarSuccessPageProps {
    profileInputs: InputProps[],
    userName: string,
}

export class UploadAvatarSuccessPage extends Block {
    constructor(props: UploadAvatarSuccessPageProps) {
        super(props)
    }
    protected init(): void {
        this.props.backImage = backImage;

        this.children.profileInputs = this.props.profileInputs.map((props: any) => new Input(props))

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

        this.children.buttonChange = new Button({
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    window.location.pathname = '/profile/change'
                }
            },
            buttonStyle: 'button__change-data',
            type: 'button',
            label: 'Изменить данные'
        })

        this.children.buttonPassword = new Button({
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    window.location.pathname = '/profile/changePassword'
                }
            },
            buttonStyle: 'button__change-password',
            type: 'button',
            label: 'Изменить пароль'
        })

        this.children.buttonExit = new Button({
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    window.location.pathname = '/login'
                }
            },
            buttonStyle: 'button__exit',
            type: 'button',
            label: 'Выйти'
        })

        this.children.buttonUpload = new Button({
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    window.location.pathname = '/profile'
                }
            },
            buttonStyle: 'button__authorize',
            type: 'button',
            label: 'Поменять'
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}