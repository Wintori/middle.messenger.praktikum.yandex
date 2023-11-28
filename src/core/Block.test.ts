import proxyquire from 'proxyquire';
import { expect } from 'chai';
import sinon from 'sinon';
import type BlockType from './Block';

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
};

const { default: Block } = proxyquire('./Block', {
  './EventBus': {
    default: class {
      emit = eventBusMock.emit;
      on = eventBusMock.on;
    },
  },
}) as { default: typeof BlockType };

describe('Block', () => {
  class ComponentMock extends Block {};

  it('Should dispatch init event after initialization', () => {
    new ComponentMock({});

    expect(eventBusMock.emit.calledWith(ComponentMock.EVENTS.INIT)).to.eq(true);
  });
});
