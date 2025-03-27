import { MessagePostForm } from '@/components/messages/MessagePostForm'
import { MessagesFeed } from '@/components/messages/MessagesFeed'
import { SearchBar } from '@/components/search/SearchBar'
import { MessageProvider } from '@/contexts/message.context';
import { MessageType } from '@/types/message.types';
import { PageType } from '@/types/pagination.types';
import { UserType } from '@/types/user.types';
import React from 'react'

interface IndexPageProps {
    initialQuery?: string;
    messagesResponse: PageType<MessageType>;
    currentUser?: UserType
}

const IndexPageContainer = ({ initialQuery, messagesResponse, currentUser }: IndexPageProps) => {
    return (
        <MessageProvider
            initialPage={messagesResponse}
        >
            <SearchBar initialQuery={initialQuery} />
            <MessagePostForm currentUser={currentUser} />
            <MessagesFeed />
        </MessageProvider>
    )
}

export default IndexPageContainer