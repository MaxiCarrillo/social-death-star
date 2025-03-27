import messageApi from "@/services/messages/messages.service";
import userAPI from "@/services/users/users.service";
import { headers } from "next/headers";
import IndexPageContainer from "./page.container";

const IndexPage = async ({ searchParams }: { searchParams?: { [key: string]: string } }) => {

    const accessToken = (await headers()).get('x-social-access-token') ?? '';
    const currentUser = accessToken ? await userAPI.getMeInternal(accessToken) : undefined;

    const query = searchParams?.query;

    const messagesResponse = query
        ? await messageApi.getMessagesByHash(searchParams.query, 0, 10)
        : await messageApi.getMessagesFeed(0, 10);

    return (
        <>
            <main className="flex flex-col bg-gray-800 p-8">
                <section className="flex flex-col gap-4 mb-8">
                    <IndexPageContainer
                        initialQuery={query}
                        messagesResponse={messagesResponse}
                        currentUser={currentUser}
                    />
                </section>
            </main>
        </>
    )
}

export default IndexPage