"use client";

import { MessageType } from '@/types/message.types';
import { useRouter } from 'next/navigation';
import { RepliesCounter } from '../counters/RepliesCounter';
import { USER_CARD_LAYOUT, UserCard } from '../users/UserCard';

interface MessageProps {
    message: MessageType;
}

export const Message = ({ message }: MessageProps) => {

    const router = useRouter();

    return (
        <UserCard user={message.user} layout={USER_CARD_LAYOUT.HORIZONTAL}>
            <p>{message.message}</p>
            <RepliesCounter
                count={message.repliesCount}
                onClick={() => router.push(`/messages/${message.id}`)}
            />
        </UserCard>
    )
}