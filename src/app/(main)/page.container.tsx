import { MessagePostForm } from '@/components/messages/MessagePostForm'
import { MessagesFeed } from '@/components/messages/MessagesFeed'
import { SearchBar } from '@/components/search/SearchBar'
import { MessageProvider } from '@/contexts/message.context';
import { MessageType } from '@/types/message.types';
import { PageType } from '@/types/pagination.types';
import React from 'react'

interface IndexPageProps {
    initialQuery?: string;
    messagesResponse: PageType<MessageType>;
}

const IndexPageContainer = ({ initialQuery, messagesResponse }: IndexPageProps) => {
    return (
        <MessageProvider>
            <SearchBar initialQuery={initialQuery} />
            <MessagePostForm />
            <MessagesFeed initialMessages={messagesResponse} />
        </MessageProvider>
    )
}

export default IndexPageContainer