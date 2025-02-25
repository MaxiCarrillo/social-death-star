import { ExploreTabs } from "@/components/explore/ExploreTabs";
import exploreAPI from "@/services/explore/explore.service";

const ExplorePage = async ({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) => {

    const hashtagsPromise = exploreAPI.getTrendingHashtags(0, 20);
    const usersPromise = exploreAPI.getFollowRecommendations(0, 20);

    const [hashtags, users] = await Promise.all([
        hashtagsPromise,
        usersPromise
    ])

    return (
        <>
            <main className="flex flex-col bg-gray-800 p-8">
                <section className="flex flex-col gap-4 mb-8">
                    <ExploreTabs
                        hashtags={hashtags.content}
                        users={users.content}
                        initialTab={searchParams?.type}
                    />
                </section>
            </main>
        </>
    )
}

export default ExplorePage