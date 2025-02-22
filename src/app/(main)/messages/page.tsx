import { Message } from "@/components/messages/Mesagges"

const MessagesPage = () => {

    const messages = [
        {
            name: 'Han Solo',
            username: 'han',
            messages: 'Chewie, estamos en casa',
            repliesCount: 3,
        },
        {
            name: 'Anakin Skywalker',
            username: 'anakin',
            messages: 'Obi-Wan, eres un traidor',
            repliesCount: 2,
        }
    ]

    return (
        <>
            <main className="flex flex-col bg-gray-800 p-8">
                <section className="flex flex-col gap-4 mb-8">
                    {messages.map((message, index) => (
                        <Message key={index} message={message} />
                    ))}
                </section>
            </main>
        </>
    )
}

export default MessagesPage