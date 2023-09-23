import Block from '../../core/Block';
import template from './messageStatus.hbs';
import statusClock from '../../assets/clock.svg';
import statusClockImage from '../../assets/clock__owner.svg';
import statusCheck from '../../assets/check.svg';
import statusCheckImage from '../../assets/check__owner.svg';
import statusDoubleCheck from '../../assets/double-check.svg';
import statusDoubleCheckImage from '../../assets/double-check__owner.svg';
import statusViewed from '../../assets/double-check__viewed.svg';

interface MessagesStatusInterface {
  isImage: boolean;
  status: boolean;
}

export class MessagesStatus extends Block {
  constructor(props: MessagesStatusInterface) {
    super(props);
  }

  init() {
    this.props.statusClock = statusClock;
    this.props.statusClockImage = statusClockImage;
    this.props.statusCheck = statusCheck;
    this.props.statusCheckImage = statusCheckImage;
    this.props.statusDoubleCheck = statusDoubleCheck;
    this.props.statusDoubleCheckImage = statusDoubleCheckImage;
    this.props.statusViewed = statusViewed;

  }

  render() {
    return this.compile(template, this.props);
  }
}