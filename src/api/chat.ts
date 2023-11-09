import { Fetch } from '../core';
import { APIRequest, ChatDTO } from './types';

export type CreateChatRequest = {
    title: string
}

export type DeleteChatRequest = {
    chatId: number;
}

export type ChatFiles = {
    id: number;
}

export type UserToChatRequest = {
    users: number[],
    chatId: number
}

export type GetAllChatsRequest = {
    offset?: number;
    limit?: number;
    title?: string;
}

type DeleteResponse = {
    userId: number,
    result: {
        id: number;
        title: string;
        avatar: string;
        created_by: number;
    }
}

type tokenResponse = {
    token: string
}

export const chatAPI = {
    chats: (data?: GetAllChatsRequest) => Fetch.get<APIRequest<ChatDTO[]>>('chats', { data }),

    createChat: (data: CreateChatRequest) => Fetch.post<APIRequest<never>>('chats', { data }),

    deleteChat: (data: DeleteChatRequest) => Fetch.delete<APIRequest<DeleteResponse>>('chats', { data }),

    // chatFiles: (data: ChatFiles) => Fetch.get<APIRequest>(`chats/${data}/files`),

    addUsersToChat: (data: UserToChatRequest) => Fetch.put<APIRequest<never>>('chats/users', { data }),

    deleteUsersFromChat: (data: UserToChatRequest) => Fetch.delete<APIRequest<never>>('chats/users', { data }),

    getToken: (chatId: number) => Fetch.post<APIRequest<tokenResponse>>(`chats/token/${chatId}`),

    avatar: (data: FormData) => Fetch.put<APIRequest<ChatDTO>>('chats/avatar', { data }),

};
