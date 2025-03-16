"use client";

import messageApi from "@/services/messages/messages.service";
import { createContext, FC, PropsWithChildren, useContext, useMemo } from "react"

export type MessageStates = {

}

const MessageContext = createContext<MessageStates | undefined>(undefined);

interface MessageProviderProps extends PropsWithChildren {

}

export const MessageProvider: FC<MessageProviderProps> = ({ children }) => {

    const postMessages = async (message: string, parentId: string) => {
        const response = await messageApi.postMessage(message, parentId);
        
    }

    const value = useMemo(() => ({

    }), []);

    return (
        <MessageContext.Provider value={undefined}>
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