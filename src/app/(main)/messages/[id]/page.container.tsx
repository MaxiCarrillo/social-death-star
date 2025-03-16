"use client";

import { Message } from "@/components/messages/Mesagges";
import { MessagePostForm } from "@/components/messages/MessagePostForm";
import { MessageProvider } from "@/contexts/message.context";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";

interface MessagePageProps {
    repliesPage: PageType<MessageType>;
    message: MessageType;
    parentId?: string;
}

const MessagePageContainer = ({ repliesPage, message, parentId }: MessagePageProps) => {
    return (
        <MessageProvider>
            <section>
                <Message message={message} />
            </section>
            <section>
                <h2 className="mt-4 mb-4">Respuestas</h2>
                <MessagePostForm parentId={parentId} />
                <div className="space-y-4">
                    {repliesPage.content.map((message, index) => (
                        <Message key={index} message={message} />
                    ))}
                </div>
            </section>
        </MessageProvider>
    )
}

export default MessagePageContainer