"use client";

import messageApi from "@/services/messages/messages.service";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Message } from "./Mesagges";

type MessagesFeedProps = {
    initialMessages: PageType<MessageType>
}

export const MessagesFeed = ({ initialMessages }: MessagesFeedProps) => {

    const [messagesResponse, setMessagesResponse] = useState<PageType<MessageType>>(initialMessages);
    const [messages, setMessages] = useState<MessageType[]>(initialMessages.content);
    const [hasMore, setHasMore] = useState<boolean>(!initialMessages.pagination.last);

    const fetchData = async () => {
        const page = messagesResponse.pagination.page + 1;
        const response = await messageApi.getMessagesFeed(page, 10);
        setMessagesResponse(response);
        setMessages([...messages, ...response.content]);
        setHasMore(!response.pagination.last);
    }

    const refresh = async () => {
        const response = await messageApi.getMessagesFeed(0, 10);
        setMessagesResponse(response);
        setMessages(response.content);
        setHasMore(!response.pagination.last);
    }

    return (
        <InfiniteScroll
            dataLength={messages.length} //This is important field to render the next data
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Cargando más mensajes...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! Has llegado al final</b>
                </p>
            }
            // below props only if you need pull down functionality
            refreshFunction={refresh}
            pullDownToRefresh={false}
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8595; Arrastrar hacia abajo para refrescar</h3>
            }
            releaseToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8593; Suelta para refrescar</h3>
            }
        >
            <div className="space-y-4">
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </div>
        </InfiniteScroll>
    )
}
