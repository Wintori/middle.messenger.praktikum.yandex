import Block from '../../utils/Block';
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
  }

export class Button extends Block {
    constructor(props: ButtonProps) {
        // Создаём враппер дом-элемент button
        super(props);

        let list = this.element!.className.split(" ");
        list.splice(0, 0, "button")
        this.element!.className = list.join(" ");
    }

    render() {
        // В проект должен быть ваш собственный шаблонизатор
        return this.compile(template, this.props);
    }
}