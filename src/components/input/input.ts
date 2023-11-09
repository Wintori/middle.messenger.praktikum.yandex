import Block from "../../core/Block";
import template from "./input.hbs"

export interface InputProps {
  label?: string;
  type: string;
  value?: string;
  error?: string;
  events: {
    change?: (evt: any) => void;
    blur?: (evt: any) => void;
  };
  labelStyle?: string,
  inputStyle?: string,
  errorStyle?: string,
  placeholder?: string,
  readonly?: boolean,
  required?: boolean,
  name?: string,
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
