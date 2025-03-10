"use client";
import { TrendingHashtagType } from "@/types/hash.types";
import { PageType } from "@/types/pagination.types";
import { TrendingUserType } from "@/types/user.types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MessageHashtag } from "../messages/MessageHashtag";
import { UserList } from "../users/UserList";
import { MessageHashtagList } from "../messages/MessageHashtagList";


enum TabView {
    HASHTAGS,
    USERS
}

interface ExploreTabsProps {
    hashtags: PageType<TrendingHashtagType>,
    users: PageType<TrendingUserType>,
    initialTab?: string
}

export const ExploreTabs = ({ hashtags, users, initialTab }: ExploreTabsProps) => {

    const searchParams = useSearchParams();
    const [tab, setTab] = useState<TabView>(initialTab ? TabView[initialTab as keyof typeof TabView] : TabView.HASHTAGS);

    useEffect(() => {
        const type = searchParams.get('type');
        setTab(type ? TabView[type as keyof typeof TabView] : tab)
    }, [searchParams])

    return (
        <>
            <div className="flex justify-evenly gap-4 mb-4">
                <Link href="/explore?type=HASHTAGS"
                    className={`cursor-pointer ${tab === TabView.HASHTAGS ? 'border-b-4 border-blue-500' : ''} `}
                >
                    Hashtags
                </Link>
                <Link href="/explore?type=USERS"
                    className={`cursor-pointer ${tab === TabView.USERS ? 'border-b-4 border-blue-500' : ''} `}
                >
                    Usuarios
                </Link>
            </div >
            {
                tab === TabView.HASHTAGS ?
                    <MessageHashtagList
                        initialHashtags={hashtags}
                    />
                    :
                    (
                        <UserList
                            initialUsers={users}
                        />
                    )
            }
        </>
    )
}
