import messageApi from "@/services/messages/messages.service"
import userAPI from "@/services/users/users.service"
import { headers } from "next/headers"
import MessagePageContainer from "./page.container"

const MessagePage = async ({ params }: { params: { id: string } }) => {

    const accessToken = (await headers()).get('x-social-access-token') ?? '';
    const currentUser = accessToken ? await userAPI.getMeInternal(accessToken) : undefined;

    const messagePromise = messageApi.getMessage(params.id)
    const repliesPageProomise = messageApi.getMessagesReplies(params.id, 0, 10)

    const [message, repliesPage] = await Promise.all([messagePromise, repliesPageProomise])

    return (
        <main>
            <MessagePageContainer
                message={message}
                repliesPage={repliesPage}
                parentId={params.id}
                currentUser={currentUser}
            />
        </main>
    )
}

export default MessagePage