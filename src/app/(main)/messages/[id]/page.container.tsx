"use client";

import { Message } from "@/components/messages/Mesagges";
import { MessagePostForm } from "@/components/messages/MessagePostForm";
import { MessagesList } from "@/components/messages/MessagesList";
import useMessages, { MessageProvider } from "@/contexts/message.context";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { UserType } from "@/types/user.types";

interface MessagePageProps {
    repliesPage: PageType<MessageType>;
    message: MessageType;
    parentId?: string;
    currentUser?: UserType;
}

const MessagePageContainer = ({ repliesPage, message, parentId, currentUser }: MessagePageProps) => {
    return (
        <MessageProvider
            initialPage={repliesPage}
            initialMessage={message}
        >
            <MessageContainer />
            <section>
                <h2 className="mt-4 mb-4">Respuestas</h2>
                <MessagePostForm parentId={parentId} currentUser={currentUser} />
                <MessagesList />
            </section>
        </MessageProvider>
    )
}

const MessageContainer = () => {
    const { message } = useMessages();
    if (!message) return null;
    return <section>
        <Message message={message} />
    </section>
}

export default MessagePageContainer