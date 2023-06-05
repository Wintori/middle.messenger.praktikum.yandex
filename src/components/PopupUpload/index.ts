import Block from '../../utils/Block';
import template from './popupUpload.hbs';
import imagePopup from '../../assets/image-popup.svg'
import filePopup from '../../assets/file-popup.svg'
import locationPopup from '../../assets/location-popup.svg'

export class PopupUpload extends Block {
    constructor() {
        super();
    }

    init() {
        this.props.imagePopup = imagePopup
        this.props.filePopup = filePopup
        this.props.locationPopup = locationPopup
    }

    render() {
        // В проект должен быть ваш собственный шаблонизатор
        return this.compile(template, this.props);
    }
}