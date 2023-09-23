import { chatAPI } from '../api/chat';
import { ChatDTO } from '../api/types';
import type { Dispatch } from '../core/Store';
import { AppState } from '../store';
import { apiHasError } from '../utils';
import { transformChats, transformChat } from '../utils/apiTransformers';
import { websocketService } from '../core/WebSocket';
import { router } from '../router'


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
    users: number[];
    chatId: number;
}

export const getAllChats = async (
    dispatch: Dispatch<AppState>,
    state: AppState,
    action: GetAllChats,
) => {
    dispatch({ isLoading: true });

    const response = await chatAPI.chats(action);

    if (apiHasError(response)) {
        dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
        router.go('/500');
        return;
    }

    dispatch({ isLoading: false, loginFormError: null });
    dispatch({ chats: transformChats(JSON.parse(response.response) as ChatDTO[]) });
}

export const createChat = async (
    dispatch: Dispatch<AppState>,
    state: AppState,
    action: CreateChat,
) => {
    dispatch({ isLoading: true });

    const response = await chatAPI.createChat(action);

    if (apiHasError(response)) {
        dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
        console.log(response.response.reason)
        console.log(response)
        router.go('/500');
        return;
    }

    dispatch({ isLoading: false });
}

export const removeChat = async (
    dispatch: Dispatch<AppState>,
    state: AppState,
    action: RemoveChat,
) => {
    dispatch({ isLoading: true });

    const response = await chatAPI.deleteChat(action);

    if (apiHasError(response)) {
        dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
        router.go('/500');
        return;
    }

    dispatch({ isLoading: false });
}

export const getOldMessages = async (
    dispatch: Dispatch<AppState>,
    _state: AppState,
    action: string
) => {

    if (!websocketService.getSocket) {
        return;
    }

    websocketService.getOld();
}

export const avatar = async (
    dispatch: Dispatch<AppState>,
    _state: AppState,
    action: FormData
) => {
    dispatch({ isLoading: true });

    const response = await chatAPI.avatar(action);

    if (apiHasError(response)) {
        dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
        router.go('/500');
        return;
    }

    dispatch({ isLoading: false, loginFormError: null });
    dispatch({ activeChat: transformChat(JSON.parse(response.response) as ChatDTO) });
}

export const addUser = async (
    dispatch: Dispatch<AppState>,
    _state: AppState,
    action: AddOrRemoveUsersPayload
) => {
    dispatch({ isLoading: true });

    const response = await chatAPI.addUsersToChat(action);

    if (apiHasError(response)) {
        dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
        router.go('/500');
        return;
    }

    dispatch({ isLoading: false, loginFormError: null });
}

export const removeUser = async (
    dispatch: Dispatch<AppState>,
    _state: AppState,
    action: AddOrRemoveUsersPayload
) => {
    dispatch({ isLoading: true });

    const response = await chatAPI.deleteUsersFromChat(action);

    if (apiHasError(response)) {
        dispatch({ isLoading: false, loginFormError: JSON.parse(response.response).reason });
        router.go('/500');
        return;
    }

    dispatch({ isLoading: false, loginFormError: null });
}
