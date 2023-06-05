import Block from '../../utils/Block';
import template from './popupSettings.hbs';
import addPopup from '../../assets/add-settings.svg';
import closePopup from '../../assets/close-settings.svg'
import trashPopup from '../../assets/trash.svg'

export class PopupSettings extends Block {
    constructor() {
        super();
    }

    init() {
        this.props.addPopup = addPopup
        this.props.closePopup = closePopup
        this.props.trashPopup = trashPopup
    }

    render() {
        // В проект должен быть ваш собственный шаблонизатор
        return this.compile(template, this.props);
    }
}