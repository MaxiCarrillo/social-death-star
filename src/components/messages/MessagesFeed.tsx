"use client";

import useMessages from "@/contexts/message.context";
import InfiniteScroll from "react-infinite-scroll-component";
import { Message } from "./Mesagges";

export const MessagesFeed = () => {
    const { messagePage, messages, fetchNextPage, refresh } = useMessages();

    return (
        <InfiniteScroll
            dataLength={messages.length}
            next={fetchNextPage}
            hasMore={!messagePage.pagination.last}
            loader={<h4>Cargando más mensajes...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Ups! Has llegado al final</b>
                </p>
            }
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
            {messages.map((message, index) => (
                <div key={index} className="border-b border-white/15 p-4">
                    <Message message={message} />
                </div>
            ))}
        </InfiniteScroll>
    )
}
