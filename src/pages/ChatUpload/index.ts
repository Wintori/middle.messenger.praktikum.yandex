import { Button } from '../../components/Button';
import { ChatBar } from '../../components/ChatBar';
import { ChatHeader } from '../../components/ChatHeader';
import { ChatMessagesGroup, ChatMessagesGroupInterface } from '../../components/ChatMessagesGroup';
import Block from '../../utils/Block';
import template from './chatUpload.hbs'
import upload from '../../assets/upload.svg';
import send from '../../assets/arrow-send.svg'
import { PopupUpload } from '../../components/PopupUpload';
import { MessageInput } from '../../components/MessageInput';




interface ChatUploadPageProps {
    chatMessagesGroups: ChatMessagesGroupInterface[];
}

export class ChatUploadPage extends Block {
    constructor(props: ChatUploadPageProps) {
        super(props);
    }

    init() {
        this.children.chatMessagesGroups = this.props.chatMessagesGroups.map((props: any) => new ChatMessagesGroup(props))

        this.children.chatBar = new ChatBar({
            barMessages: [
                {
                    name: 'Андрей',
                    lastMessage: 'Миллионы россиян ежедневно проводят десятки часов Миллионы россиян ежедневно проводят десятки часов Миллионы россиян ежедневно проводят десятки часов Миллионы россиян ежедневно проводят десятки часов',
                    timestamp: '10:49',
                    countOfNew: 1,
                },
                {
                    name: 'Витя',
                    lastMessage: 'Миллионы россиян ежедневно проводят десятки часов Миллионы россиян ежедневно проводят десятки часов Миллионы россиян ежедневно проводят десятки часов Миллионы россиян ежедневно проводят десятки часов',
                    timestamp: '10:49',
                    countOfNew: 3,
                },
                {
                    avatar: 'https://sun9-32.userapi.com/s/v1/ig2/Ydd8pajYrqVEydrqsNH_h9yMR9aJHgE28nK0G42uu0HCbhhVNOGRFInkLeXzZ1UvtUUB7Sm51aWdPqBUn-eW81wN.jpg?size=235x235&quality=96&crop=0,0,235,235&ava=1',
                    name: 'Кирилл',
                    lastMessage: 'Миллионы россиян ежедневно проводят десятки часов Миллионы россиян ежедневно проводят десятки часов Миллионы россиян ежедневно проводят десятки часов Миллионы россиян ежедневно проводят десятки часов',
                    timestamp: '10:49',
                }
            ]
        });

        this.children.chatHeader = new ChatHeader({
            name: 'Егор'
        })

        this.children.buttonUpload = new Button({
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    window.location.pathname = "/chat/upload"
                }
            },
            buttonStyle: 'button__chat-upload',
            image: upload,
            type: 'button'
        })

        this.children.inputMessage = new MessageInput({
            events: {
                input: (evt: any) => {
                    evt.preventDefault();
                    const value = evt.target.textContent;
                    if (value.length === 0) {
                        console.log('Поле не должно быть пустым!')
                    }
                }
            }
        })

        this.children.buttonSend = new Button({
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    const message = ((this.children.inputMessage as Block).element.textContent);
                    if (message?.length === 0) {
                        console.log('Поле message не должно быть пустым!')
                    }
                }
            },
            buttonStyle: 'button__chat-send',
            image: send,
            imageStyle: 'chat__footer__send-image',
            type: 'button'
        }) 
        
        this.children.popupUpload = new PopupUpload()
    }


    render() {
        return this.compile(template, this.props);
    }
}