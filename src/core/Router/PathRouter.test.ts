


// import sinon from "sinon";
// import PathRouter, { TRouteConstructor } from "./PathRouter";
// import Block from "../Block";
// import { expect } from "chai";

// describe('Router', () => {
//     let BlockMock: Block;

//     const originalForward = window.history.forward;
//     const originalBack = window.history.back;

//     let getContentFake = sinon.stub();
//     let router: PathRouter;

//     before(() => {
//         getContentFake.returns(document.createElement('div'))


//         BlockMock = class {
//             getContent = getContentFake
//         } as unknown as Block
//     })

//     beforeEach(() => {
//         router = new PathRouter('#app');
//         window.history.forward = sinon.fake();
//         window.history.back = sinon.fake();
//     })

//     it('метод use должен вернуть инстанс роутера', () => {
//         const result = router.use('/', BlockMock);

//     expect(result).to.eq(router);
//     })

//     describe('back()', () => {
//         it('Должен отрисовать страницу после запуска роутера', () => {
//             const params: TRouteConstructor = {
//                 block: BlockMock,
//                 exact: true,
//                 needAuth: true,
//                 onUnautorized: () => true,
//                 pathname: '/',
//                 props: {},
//                 redirectPath: '/'
//             }
//             router.use(params).start();

//             expect(getContentFake.callCount).to.eql(1);
//         })
//     })

// });


import PathRouter, { TRouteConstructor } from './PathRouter';
import { expect } from 'chai';
import sinon from 'sinon';
import Block from '../Block';

describe('PathRouter', () => {
    let router: PathRouter;
    const originalForward = window.history.forward;
    const originalBack = window.history.back;
    const getContentFake = sinon.fake.returns(document.createElement('div'));
    const BlockMock = class {
        getContent = getContentFake;
    } as unknown as Block;

    beforeEach(() => {
        router = new PathRouter('#app');
        window.history.forward = sinon.fake();
        window.history.back = sinon.fake();
    });

    after(() => {
        window.history.forward = originalForward;
        window.history.back = originalBack;
    });

    it('use() should return Router instance', () => {
        const params: TRouteConstructor = {
            block: BlockMock,
            exact: true,
            needAuth: true,
            onUnautorized: () => true,
            pathname: '/',
            props: {},
            redirectPath: '/'
        }
        const result = router.use(params);

        expect(result).to.eq(router);
    });

    it('Should render page on start', () => {
        const params: TRouteConstructor = {
            block: BlockMock,
            exact: true,
            needAuth: true,
            onUnautorized: () => true,
            pathname: '/',
            props: {},
            redirectPath: '/'
        }

        router.use(params).start();

        expect(getContentFake.callCount).to.eq(1);
    });

    it('Forward should loads the next URL', () => {
        router.forward();

        expect((window.history.forward as any).callCount).to.eql(1);
    });

    it('Back should loads the previous URL', () => {
        router.back();

        expect((window.history.back as any).callCount).to.eql(1);
    });
});
