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

class ChatAPI {
    public chats(data?: GetAllChatsRequest) {
        return Fetch.get<APIRequest<ChatDTO[]>>('chats', { data });
    }

    public createChat(data: CreateChatRequest) {
        return Fetch.post<APIRequest<never>>('chats', { data });
    }

    public deleteChat(data: DeleteChatRequest) {
        return Fetch.delete<APIRequest<DeleteResponse>>('chats', { data });
    }

    // chatFiles (data: ChatFiles) {return Fetch.get<APIRequest>(`chats/${data}/files`);}

    public addUsersToChat(data: UserToChatRequest) {
        return Fetch.put<APIRequest<never>>('chats/users', { data });
    }

    public deleteUsersFromChat(data: UserToChatRequest) {
        return Fetch.delete<APIRequest<never>>('chats/users', { data });
    }

    public getToken(chatId: number) {
        return Fetch.post<APIRequest<tokenResponse>>(`chats/token/${chatId}`);
    }

    public avatar(data: FormData) {
        return Fetch.put<APIRequest<ChatDTO>>('chats/avatar', { data });
    }
};

const chatAPI = new ChatAPI();
export { chatAPI };
