import { expect } from 'chai';
import { Message } from './apiTransformers';
import { groupMessagesByDay } from './dateGrouping';

describe('dateGrouping', () => {

  it('Should correctly group the message by date and display the date correctly', () => {

    const message = {
      id: 1,
      userId: 1,
      chatId: 1,
      type: 'message',
      time: '0',
      content: 'message',
      isRead: true,
      file: null
    } as Message

    const day = groupMessagesByDay([message]);


    expect(day[0].day).to.eq('1 января');
  });
});
