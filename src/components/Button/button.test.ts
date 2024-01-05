import { expect } from "chai";
import sinon from 'sinon';
import { Button } from ".";

describe('Button component', () => {
    it('Should be clickable', () => {

        const callback = sinon.stub();

        const props = {
            label: 'Кнопка',
            events: {
                click: callback,
            },
        };

        const button = new Button(props);

        button.element?.click();

        expect(callback.calledOnce).to.eq(true);
    });

    it('Should has button class', () => {
        const callback = sinon.stub();

        const props = {
            label: 'Кнопка',
            events: {
                click: callback,
            },
        };

        const button = new Button(props);

        expect(button.element?.classList.contains('button')).to.eq(true);
    });

    it('Should has image component if has image attribute', () => {
        const callback = sinon.stub();

        const props = {
            label: 'Кнопка',
            events: {
                click: callback,
            },
            image: 'test'
        };

        const button = new Button(props);

        let isHasImgTag = false;

        for (const child of button.element!.children) {
            isHasImgTag = child.tagName === 'IMG';
        }

        expect(isHasImgTag).to.eq(true);
    });
});
