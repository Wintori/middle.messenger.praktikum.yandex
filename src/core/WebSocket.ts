import { chatAPI } from "../api/chat";
import { transformMessages, transformMessage } from "../utils/apiTransformers";
import { groupMessagesByDay } from "../utils/dateGrouping";


export default class WebSocketService {

  private socket!: WebSocket;
  private socketInterval: any;

  constructor() {
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleMassage = this.handleMassage.bind(this);
  }

  async open(chatId: number) {
    const tokenResponse = await chatAPI.getToken(chatId);
    const token = tokenResponse.token;
    const userId: number = window.store.getState().user!.id;

    if (this.socket) {
      this.delete();
    }

    this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
    this.socketInterval = setInterval(this.ping, 10000);

    this.addEvents();
  }

  private addEvents() {
    this.getSocket().addEventListener('open', this.handleOpen);
    this.getSocket().addEventListener('message', this.handleMassage);
    this.getSocket().addEventListener('error', this.handleError);
    this.getSocket().addEventListener('close', this.handleClose);
  }

  private removeEvents() {
    this.getSocket().removeEventListener('open', this.handleOpen);
    this.getSocket().removeEventListener('message', this.handleMassage);
    this.getSocket().removeEventListener('error', this.handleError);
    this.getSocket().removeEventListener('close', this.handleClose);
  }

  getSocket() {
    return this.socket;
  }

  sendMessage(content: string) {
    this.socket.send(JSON.stringify({
      content,
      type: 'message',
    }));
  }

  getOld(offset: string | number = '') {
    this.socket.send(JSON.stringify({
      content: offset,
      type: 'get old',
    }));
  }

  private ping = () => {
    this.socket.send(JSON.stringify({ type: "ping" }));
  }

  private handleOpen = () => {
    this.getOld();
  }

  private handleClose = (event: CloseEvent) => {
    if (event.wasClean) {
      console.log("Соединение закрыто чисто");
    } else {
      console.log("Обрыв соединения");
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  }

  private handleMassage = (event: MessageEvent) => {
    if (!event) {
      return
    }

    const data = JSON.parse(event.data);
    
    let messages = [...window.store.getState()?.messages];


    if (Array.isArray(data)) {
      if (!data.length || !data[0].hasOwnProperty("user_id")) {
        window.store.dispatch({ messages: [] });
        return
      }

      const transformedData = transformMessages(data)
      messages = groupMessagesByDay(transformedData)
      window.store.dispatch({ messages: messages });

    } else if (typeof data === "object" && data?.type === "message") {
      if (!data.hasOwnProperty("user_id")) {
        return;
      }
      const transformedData = transformMessage(data)

      if (messages && messages[0] && messages[0].messages.length) {
        messages[0].messages.unshift({ ...transformedData, chatId: window.store.getState().activeChat!.id, isRead: true })
      } else {

        // const date = new Date(transformedData.time);
        // const day = `${date.getDate()} ${Months[date.getMonth()]}`;
        messages = groupMessagesByDay(new Array({ ...transformedData, chatId: window.store.getState().activeChat!.id, isRead: true }))

      }

      window.store.dispatch({ messages: messages });
    }




  }

  private handleError = (event: Event) => {
    console.log("Ошибка", event);
  }

  public delete() {
    clearInterval(this.socketInterval);
    this.socket.close();
    this.removeEvents();
  }
}

const websocketService = new WebSocketService();
export { websocketService, WebSocketService };
