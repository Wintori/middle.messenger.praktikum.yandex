import { chatAPI } from '../api/chat';
import { ChatDTO, UserDTO } from '../api/types';
import type { Dispatch } from '../core/Store';
import { AppState } from '../store';
import { apiHasError } from '../utils';
import { transformChats, transformChat, Chat } from '../utils/apiTransformers';
import { websocketService } from '../core/WebSocket';
import { router } from '../router'
import { userAPI } from '../api/user';


type ChangePayload = {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
}

type GetAllChats = {
    offset?: number;
    limit?: number;
    title?: string;
}

type CreateChat = {
    title: string;
}

type RemoveChat = {
    chatId: number;
}

type AddOrRemoveUsersPayload = {
    users: string[];
    chatId: number;
}

export const getAllChats = async (
    dispatch: Dispatch<AppState>,
    state: AppState,
    action: GetAllChats,
) => {
    dispatch({ isLoading: true });

    try {
        const response = await chatAPI.chats(action);

        if (apiHasError(response)) {
            dispatch({ isLoading: false, loginFormError: response.reason });
            router.go('/500');
            return;
        }

        dispatch({ isLoading: false, loginFormError: null });
        dispatch({ chats: transformChats(response) });
    } catch (error: any) {
        dispatch({ isLoading: false, loginFormError: error });
        router.go('/500');
    }
}

export const createChat = async (
    dispatch: Dispatch<AppState>,
    state: AppState,
    action: CreateChat,
) => {
    dispatch({ isLoading: true });

    try {
        const response = await chatAPI.createChat(action);

        if (apiHasError(response)) {
            dispatch({ isLoading: false, loginFormError: response.reason });
            router.go('/500');
            return;
        }

        dispatch({ isLoading: false, loginFormError: null });
        const currentChats = window.store.getState().chats;
        const newChat = {
            id: response.id,
            avatar: "",
            createdBy: window.store.getState().user?.id,
            lastMessage: "",
            title: action.title,
            unreadCount: 0
        } as Chat;

        currentChats?.unshift(newChat)

        dispatch({ chats: currentChats });
    } catch (error: any) {
        dispatch({ isLoading: false, loginFormError: error });
        router.go('/500');
    }
}

export const removeChat = async (
    dispatch: Dispatch<AppState>,
    state: AppState,
    action: RemoveChat,
) => {
    dispatch({ isLoading: true });

    try {

        const response = await chatAPI.deleteChat(action);

        if (apiHasError(response)) {
            dispatch({ isLoading: false, loginFormError: response.reason });
            router.go('/500');
            return;
        }

        dispatch({ isLoading: false, loginFormError: null });
        const newChatList = window.store.getState().chats?.filter((chat) => chat.id !== action.chatId);

        dispatch({ chats: newChatList });
    } catch (error: any) {
        dispatch({ isLoading: false, loginFormError: error });
        router.go('/500');
    }
}

export const getOldMessages = async (
    dispatch: Dispatch<AppState>,
    _state: AppState,
    action: string
) => {
    try {
        if (!websocketService.getSocket) {
            return;
        }

        websocketService.getOld();
    } catch (error: any) {
        dispatch({ isLoading: false, loginFormError: error });
        router.go('/500');
    }
}

export const avatar = async (
    dispatch: Dispatch<AppState>,
    _state: AppState,
    action: FormData
) => {
    dispatch({ isLoading: true });

    try {
        const response = await chatAPI.avatar(action);

        if (apiHasError(response)) {
            dispatch({ isLoading: false, loginFormError: response.reason });
            router.go('/500');
            return;
        }

        dispatch({ isLoading: false, loginFormError: null });
        dispatch({ activeChat: transformChat(response) });
    } catch (error: any) {
        dispatch({ isLoading: false, loginFormError: error });
        router.go('/500');
    }
}

export const addUser = async (
    dispatch: Dispatch<AppState>,
    _state: AppState,
    action: AddOrRemoveUsersPayload
) => {
    dispatch({ isLoading: true });

    try {
        const responseSearch = await userAPI.search({ login: action.users[0] });

        if (apiHasError(responseSearch)) {
            dispatch({ isLoading: false, loginFormError: responseSearch.reason });
            router.go('/500');
            return;
        }

        const userId = Number((responseSearch[0] as UserDTO).id);
        const response = await chatAPI.addUsersToChat({ users: [userId], chatId: action.chatId });

        if (apiHasError(response)) {
            dispatch({ isLoading: false, loginFormError: response.reason });
            router.go('/500');
            return;
        }


        dispatch({ isLoading: false, loginFormError: null });
    } catch (error: any) {
        dispatch({ isLoading: false, loginFormError: error });
        router.go('/500');
    }
}

export const removeUser = async (
    dispatch: Dispatch<AppState>,
    _state: AppState,
    action: AddOrRemoveUsersPayload
) => {
    dispatch({ isLoading: true });

    try {
        const responseSearch = await userAPI.search({ login: action.users[0] });

        if (apiHasError(responseSearch)) {
            dispatch({ isLoading: false, loginFormError: responseSearch.reason });
            router.go('/500');
            return;
        }

        const userId = Number((responseSearch[0] as UserDTO).id);
        const response = await chatAPI.deleteUsersFromChat({ users: [userId], chatId: action.chatId });

        if (apiHasError(response)) {
            dispatch({ isLoading: false, loginFormError: response.reason });
            router.go('/500');
            return;
        }

        dispatch({ isLoading: false, loginFormError: null });
    } catch (error: any) {
        dispatch({ isLoading: false, loginFormError: error });
        router.go('/500');
    }
}
