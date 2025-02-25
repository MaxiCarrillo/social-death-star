import { MessageType } from '@/types/message.types';
import { USER_CARD_LAYOUT, UserCard } from '../users/UserCard';

interface MessageProps {
    message: MessageType;
}

export const Message = ({ message }: MessageProps) => {
    return (
        <UserCard user={message.user} layout={USER_CARD_LAYOUT.HORIZONTAL}>
            <p>{message.message}</p>
            <p>{message.repliesCount} Respuestas</p>
        </UserCard>
    )
}