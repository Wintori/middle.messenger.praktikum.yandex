import Block from "../../core/Block";
import template from "./messageInput.hbs"

export interface MessageInputProps {
  events?: {
    input?: (evt: any) => void;
    keydown?: (evt: any) => void;
  };
}

export class MessageInput extends Block {
  constructor(props: MessageInputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}