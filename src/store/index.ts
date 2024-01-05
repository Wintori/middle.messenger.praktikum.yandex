import { Screens } from "../utils";
import { User, Chat } from "../utils/apiTransformers";
import { GroupedMessages } from "../utils/dateGrouping";

export interface AppState {
  loginFormError: string | null;
  user: User | null;
  appIsInited: boolean;
  screen: Screens | null;
  isLoading: boolean;
  chats: Chat[] | null;
  messages: GroupedMessages[],
  activeChat: Chat | null;
}

export const defaultState: AppState = {
  loginFormError: null,
  user: null,
  appIsInited: false,
  isLoading: false,
  screen: null,
  chats: null,
  messages: [],
  activeChat: null
};
