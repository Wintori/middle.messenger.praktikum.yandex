import { ChatBar } from '../../components/ChatBar';
import Block from '../../utils/Block';
import template from './chatEmpty.hbs'


interface ChatEmptyPageProps {
    
}

export class ChatEmptyPage extends Block {
    constructor(props: ChatEmptyPageProps) {
        super(props);
    }

    init() {
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
    }


    render() {
        return this.compile(template, this.props);
    }
}