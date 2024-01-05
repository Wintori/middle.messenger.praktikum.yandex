import Block from "../../core/Block";
import { withRouter } from "../../utils/withRouter";
import template from './error500.hbs'

interface IError500 {
}

class Error500 extends Block {
  constructor(props: IError500) {
    super(props);
  }

  protected init(): void {
    this.props.errorText = window.store.getState().loginFormError ?? this.props.router.go('/messenger')
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default withRouter(Error500)
