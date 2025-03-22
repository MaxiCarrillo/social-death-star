"use client";

import messageApi from "@/services/messages/messages.service";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type MessageStates = {
    messages: MessageType[];
    message?: MessageType;
    messagePage: PageType<MessageType>;
    postMessages: (message: string, parentId?: string) => void;
    fetchNextPage: () => void;
    refresh: () => void;
}

const MessageContext = createContext<MessageStates | undefined>(undefined);

interface MessageProviderProps extends PropsWithChildren {
    initialPage: PageType<MessageType>;
    initialMessage?: MessageType;
}

export const MessageProvider: FC<MessageProviderProps> = ({ children, initialPage, initialMessage }) => {

    const [messages, setMessages] = useState<MessageType[]>(initialPage.content);
    const [messagePage, setMessagePage] = useState<PageType<MessageType>>(initialPage);
    const [messageState, setMessageState] = useState<MessageType | undefined>(initialMessage);

    useEffect(() => {
        setMessagePage(initialPage);
        setMessages(initialPage.content);
    }, [initialPage]);

    const postMessages = useCallback(async (message: string, parentId?: string) => {
        const response = await messageApi.postMessage(message, parentId);
        setMessages([response, ...messages]);
        if (messageState && messageState?.id === parentId) {
            setMessageState({
                ...messageState,
                repliesCount: messageState.repliesCount + 1
            })
        }
    }, [messagePage, messageState]);



    const fetchNextPage = useCallback(async () => {
        const page = messagePage.pagination.page + 1;
        const response = await messageApi.getMessagesFeed(page, 10);
        setMessagePage(response);
        setMessages([...messages, ...response.content]);
    }, [messagePage.pagination.page, messages]);

    const refresh = useCallback(async () => {
        const response = await messageApi.getMessagesFeed(0, 10);
        setMessagePage(response);
        setMessages(response.content);
    }, [])

    const value = useMemo(() => ({
        messagePage,
        postMessages,
        message: messageState,
        messages,
        fetchNextPage,
        refresh
    }), [messagePage, postMessages, messageState, messages, fetchNextPage, refresh]);

    return (
        <MessageContext.Provider value={value}>
            {children}
        </MessageContext.Provider>
    )
}

const useMessages = (): MessageStates => {
    const context = useContext(MessageContext);

    if (!context) {
        throw new Error('useMessages must be used within a MessageProvider');
    }

    return context;
}

export default useMessages;