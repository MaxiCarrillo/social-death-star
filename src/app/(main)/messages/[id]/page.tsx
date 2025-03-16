import { Message } from "@/components/messages/Mesagges"
import { MessagePostForm } from "@/components/messages/MessagePostForm"
import messageApi from "@/services/messages/messages.service"
import MessagePageContainer from "./page.container"

const MessagePage = async ({ params }: { params: { id: string } }) => {

    const messagePromise = messageApi.getMessage(params.id)
    const repliesPageProomise = messageApi.getMessagesReplies(params.id, 0, 10)

    const [message, repliesPage] = await Promise.all([messagePromise, repliesPageProomise])

    return (
        <main>
            <MessagePageContainer
                message={message}
                repliesPage={repliesPage}
                parentId={params.id}
            />
        </main>
    )
}

export default MessagePage