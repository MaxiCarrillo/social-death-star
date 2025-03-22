import messageApi from "@/services/messages/messages.service";
import IndexPageContainer from "./page.container";

const IndexPage = async ({ searchParams }: { searchParams?: { [key: string]: string } }) => {

    const messagesResponse =
        searchParams?.query ?
            await messageApi.getMessagesByHash(searchParams.query, 0, 10)
            :
            await messageApi.getMessagesFeed(0, 10);

    return (
        <>
            <main className="flex flex-col bg-gray-800 p-8">
                <section className="flex flex-col gap-4 mb-8">
                    <IndexPageContainer
                        initialQuery={searchParams?.query}
                        messagesResponse={messagesResponse}
                    />
                </section>
            </main>
        </>
    )
}

export default IndexPage