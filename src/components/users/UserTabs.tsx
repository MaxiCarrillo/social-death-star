"use client";
import { MessageType } from "@/types/message.types";
import { TrendingUserType } from "@/types/user.types";
import { useState } from "react";
import { Message } from "../messages/Mesagges";
import { USER_CARD_LAYOUT, UserCard } from "./UserCard";


enum TabView {
    MESSAGES,
    REPLIES,
    FOLLOWERS,
    FOLLOWING
}

interface UserTabsProps {
    messages: MessageType[],
    replies: MessageType[],
    followers: TrendingUserType[],
    following: TrendingUserType[]
}

export const UserTabs = ({ messages, replies, followers, following }: UserTabsProps) => {

    const [tab, setTab] = useState<TabView>(TabView.MESSAGES)

    return (
        <>
            <div className="flex justify-evenly gap-4 mb-4">
                <div className={`cursor-pointer ${tab === TabView.MESSAGES ? 'border-b-4 border-blue-500' : ''} `} onClick={() => setTab(TabView.MESSAGES)}>
                    Mensajes
                </div>
                <div className={`cursor-pointer ${tab === TabView.REPLIES ? 'border-b-4 border-blue-500' : ''} `} onClick={() => setTab(TabView.REPLIES)}>
                    Respuestas
                </div>
                <div className={`cursor-pointer ${tab === TabView.FOLLOWERS ? 'border-b-4 border-blue-500' : ''} `} onClick={() => setTab(TabView.FOLLOWERS)}>
                    Seguidores
                </div>
                <div className={`cursor-pointer ${tab === TabView.FOLLOWING ? 'border-b-4 border-blue-500' : ''} `} onClick={() => setTab(TabView.FOLLOWING)}>
                    Seguidos
                </div>
            </div >
            {
                tab === TabView.MESSAGES &&
                <div className="space-y-4">
                    {messages.map((message, index) => (
                        <Message key={index} message={message} />
                    ))}
                </div>
            }
            {
                tab === TabView.REPLIES &&
                <div className="space-y-4">
                    {replies.map((reply, index) => (
                        <Message key={index} message={reply} />
                    ))}
                </div>
            }
            {
                tab === TabView.FOLLOWERS &&
                <ul className="flex flex-col gap-4 mt-4">
                    {
                        followers.map((user, index) => (
                            <li key={index}>
                                <UserCard user={user} layout={USER_CARD_LAYOUT.VERTICAL} />
                            </li>
                        ))
                    }
                </ul>
            }
            {
                tab === TabView.FOLLOWING &&
                <ul className="flex flex-col gap-4 mt-4">
                    {
                        following.map((user, index) => (
                            <li key={index}>
                                <UserCard user={user} layout={USER_CARD_LAYOUT.VERTICAL} />
                            </li>
                        ))
                    }
                </ul>
            }
        </>
    )
}
