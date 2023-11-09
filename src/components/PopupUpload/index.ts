import Block from '../../core/Block';
import template from './popupUpload.hbs';
import imagePopup from '../../assets/image-popup.svg';
import filePopup from '../../assets/file-popup.svg';
import locationPopup from '../../assets/location-popup.svg';

interface PopupUploadProps {
    isDisabled: boolean;
}

export class PopupUpload extends Block {
    constructor(props: PopupUploadProps) {
        super(props);
    }

    init() {
        this.props.imagePopup = imagePopup
        this.props.filePopup = filePopup
        this.props.locationPopup = locationPopup
    }

    render() {
        return this.compile(template, this.props);
    }
}
