import Block from '../../core/Block';
import { avatar } from '../../services/user';
import { Button } from '../Button';
import { Input } from '../input/input';
import template from './modal-upload-avatar.hbs';

enum UploadStatusEnum {
  Waiting = 'Загрузите файл',
  Success = 'Файл загружен',
  Error = 'Ошибка, попробуйте ещё раз'
}

interface ModalUploadProps {
  isDisabled: boolean;
  isError?: boolean;
  fileStatus?: UploadStatusEnum;
}

export class ModalUpload extends Block {
  constructor(props: ModalUploadProps) {
    super(props);

    this.props.isError = false;
    this.props.fileStatus = UploadStatusEnum.Waiting;
  }

  init() {
    this.props.fileNameStyle = 'modal-upload-avatar__file-name hide';

    this.children.inputFile = new Input({
      type: 'file',
      labelStyle: 'modal-upload-avatar__label',
      label: 'Выбрать файл на компьютере',
      inputStyle: 'modal-upload-avatar__input',
      events: {
        change: (evt) => {
          if (!evt.target.files[0]) {
            this.props.fileStatus = UploadStatusEnum.Error;
            return;
          }

          this.props.fileStatus = UploadStatusEnum.Success;
          this.props.isError = false;
          this.setProps({ currentFile: evt.target.files })
          this.props.fileName = evt.target.files[0].name
          this.setProps({ fileNameStyle: 'modal-upload-avatar__file-name' });
          this.children.inputFile.setProps({ labelStyle: 'modal-upload-avatar__label hide' });
        },
      },
      required: true,
      name: 'avatar'
    })

    this.children.buttonUpload = new Button({
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();

          if (this.props.fileStatus !== UploadStatusEnum.Success) {
            this.props.isError = true;
            return;
          }

          if (this.props.currentFile) {
            const formData = new FormData();
            formData.append('avatar', this.props.currentFile[0]);
            window.store.dispatch(avatar, formData);
          }

          this.props.isDisabled = true;
        }
      },
      buttonStyle: 'button__authorize',
      type: 'button',
      label: 'Поменять'
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
