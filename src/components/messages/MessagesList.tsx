import useMessages from '@/contexts/message.context'
import { Message } from './Mesagges'

export const MessagesList = () => {

    const { messages } = useMessages();

    return (
        <div className="">
            {messages?.map((message, index) => (
                <div key={index} className='p-4 border-b border-white/15'>
                    <Message message={message} />
                </div>
            ))}
        </div>
    )
}
