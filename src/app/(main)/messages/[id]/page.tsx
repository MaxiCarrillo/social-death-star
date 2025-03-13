import { Message } from "@/components/messages/Mesagges"
import { MessagePostForm } from "@/components/messages/MessagePostForm"
import messageApi from "@/services/messages/messages.service"

const MessagePage = async ({ params }: { params: { id: string } }) => {

    const messagePromise = messageApi.getMessage(params.id)
    const repliesPageProomise = messageApi.getMessagesReplies(params.id, 0, 10)

    const [message, repliesPage] = await Promise.all([messagePromise, repliesPageProomise])

    return (
        <main>
            <section>
                <Message message={message} />
            </section>
            <section>
                <h2 className="mt-4 mb-4">Respuestas</h2>
                <MessagePostForm parentId={params.id} />
                <div className="space-y-4">
                    {repliesPage.content.map((message, index) => (
                        <Message key={index} message={message} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default MessagePage