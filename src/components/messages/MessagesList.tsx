import useMessages from '@/contexts/message.context'
import { Message } from './Mesagges'

export const MessagesList = () => {

    const { messages } = useMessages();

    return (
        <div className="space-y-4">
            {messages?.map((message, index) => (
                <Message key={index} message={message} />
            ))}
        </div>
    )
}
