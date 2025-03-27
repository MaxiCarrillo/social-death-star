import { ExploreTrending } from "@/components/explore/ExploreTrending";
import { ExploreUsers } from "@/components/explore/ExploreUsers";
import { Menu } from "@/components/menu/Menu";
import exploreAPI from "@/services/explore/explore.service";
import { headers } from "next/headers";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const links = [
    {
        title: 'Inicio',
        href: '/'
    },
    {
        title: 'Explorar',
        href: '/explore'
    },
    {
        title: 'Perfil',
        href: '/profile'
    }
]

const UsersLayout: FC<PropsWithChildren> = async ({ children }) => {

    const accessToken = (await headers()).get('x-social-access-token') ?? '';
    const hashtagsPromise = exploreAPI.getTrendingHashtags(0, 3);
    const usersPromise = accessToken ? exploreAPI.getMyFollowRecommendations(0, 5, accessToken) : exploreAPI.getFollowRecommendations(0, 5);;


    const [hashtags, users] = await Promise.all([
        hashtagsPromise,
        usersPromise
    ])

    return (<>
        <section className="grid grid-cols-12 gap-4 px-4">
            <header className="col-span-2">
                <Menu links={links} />
            </header>
            <main className="col-span-6">
                {children}
            </main>
            <aside className="col-span-4 space-y-4">
                <ExploreTrending
                    hashtags={hashtags.content}
                />
                <ExploreUsers
                    users={users.content}
                />
                <Link href="/faq" className="link-primary block">
                    Preguntas Frecuentes
                </Link>
            </aside>
        </section>
    </>
    )
}

export default UsersLayout;