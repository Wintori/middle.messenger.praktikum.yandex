import Block from '../../core/Block';
import template from './button.hbs';

interface ButtonProps {
  type?: string;
  label?: string;
  events?: {
    click?: (evt: PointerEvent) => void;
  };
  buttonStyle?: string;
  image?: string;
  imageStyle?: string;
  textStyle?: string;
  isTextRightSide?: boolean;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);

    let list = this.element!.className.split(" ");
    list.splice(0, 0, "button")
    this.element!.className = list.join(" ");
  }

  render() {
    return this.compile(template, this.props);
  }
}
