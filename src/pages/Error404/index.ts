import Block from "../../core/Block";
import template from './error404.hbs'


export default class Error404 extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, this.props);
  }
}
