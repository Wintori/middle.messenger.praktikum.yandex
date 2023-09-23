import Block from '../../core/Block';
import { Button } from '../Button';
import { Input } from '../input/input';
import template from './chatBar.hbs'
import buttonProfileImage from '../../assets/arrow.svg';
import createNewImage from '../../assets/create-new.svg'
import settingsImage from '../../assets/burger.svg'
import { BarMessage } from '../BarMessage';
import { Chat } from '../../utils/apiTransformers';
import { PathRouter } from '../../core';
import { withRouter } from '../../utils/withRouter';
import { PopupChatOptions } from '../PopupChatOptions';


interface ChatBarInterface {
	barMessages?: Chat[] | null;
	settingsHandler: () => void;
	onClickMessageHandler: (id: number) => void;
	addChatHandler: () => void;
	router: PathRouter;
}


class ChatBar extends Block {
	constructor(props: ChatBarInterface) {
		super(props);
	}

	init() {

		this.props.barMessages = window.store.getState().chats;

		this.children.barMessagesComponent = this.props.barMessages
			?.map((props: Chat) => new BarMessage(
				{
					...props,
					events: {
						click: (evt) => {
							this.props.onClickMessageHandler(props);
						},
					}
				})) ?? [];

		this.children.inputSearch = new Input({
			type: "search",
			events: {
				change: (evt) => {
					const value = evt.target.value;
					(this.children.inputSearch as Block).setProps({ value });
				},
			},
			label: '',
			value: this.props.search,
			labelStyle: '',
			inputStyle: 'chat-bar__inputSearch',
			errorStyle: 'login__input-error',
			placeholder: 'Поиск',
		});

		this.children.buttonCreate = new Button({
			events: {
				click: (evt: PointerEvent) => {
					evt.preventDefault();
					this.props.addChatHandler();
				}
			},
			imageStyle: 'button__create-new',
			image: createNewImage,
			type: 'button'
		})

		this.children.buttonOptions = new Button({
			events: {
				click: (evt: PointerEvent) => {
					evt.preventDefault();
					this.children.popupOptions.setProps({ isDisabled: !this.children.popupOptions.getProps().isDisabled });
				}
			},
			imageStyle: 'button&__bar-options',
			image: settingsImage,
			type: 'button'
		})

		this.children.buttonProfile = new Button({
			label: 'Профиль',
			events: {
				click: (evt: PointerEvent) => {
					evt.preventDefault();
					this.props.settingsHandler();
				}
			},
			buttonStyle: 'button__profile',
			image: buttonProfileImage,
			type: 'button'
		});

		this.children.popupOptions = new PopupChatOptions({ isDisabled: true });
	}

	render() {
		return this.compile(template, this.props);
	}
}

export default withRouter(ChatBar)
