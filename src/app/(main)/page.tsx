import { MessagePostForm } from "@/components/messages/MessagePostForm";
import { MessagesFeed } from "@/components/messages/MessagesFeed";
import messageApi from "@/services/messages/messages.service";

const IndexPage = async () => {

    const messagesResponse = await messageApi.getMessagesFeed(0, 10);

    return (
        <>
            <main className="flex flex-col bg-gray-800 p-8">
                <section className="flex flex-col gap-4 mb-8">
                    <MessagePostForm />
                    <MessagesFeed initialMessages={messagesResponse} />
                </section>
            </main>
        </>
    )
}

export default IndexPage