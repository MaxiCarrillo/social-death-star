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
            <div className="flex justify-evenly gap-4 border-b border-white/15 ">
                <div className={`cursor-pointer py-2 ${tab === TabView.MESSAGES ? 'border-b-4 border-blue-500' : ''} `} onClick={() => setTab(TabView.MESSAGES)}>
                    Mensajes
                </div>
                <div className={`cursor-pointer py-2 ${tab === TabView.REPLIES ? 'border-b-4 border-blue-500' : ''} `} onClick={() => setTab(TabView.REPLIES)}>
                    Respuestas
                </div>
                <div className={`cursor-pointer py-2 ${tab === TabView.FOLLOWERS ? 'border-b-4 border-blue-500' : ''} `} onClick={() => setTab(TabView.FOLLOWERS)}>
                    Seguidores
                </div>
                <div className={`cursor-pointer py-2 ${tab === TabView.FOLLOWING ? 'border-b-4 border-blue-500' : ''} `} onClick={() => setTab(TabView.FOLLOWING)}>
                    Seguidos
                </div>
            </div >
            {
                tab === TabView.MESSAGES &&
                <div>
                    {messages.map((message, index) => (
                        <div key={index} className="border-b border-white/15 px-4 py-2">
                            <Message message={message} />
                        </div>
                    ))}
                </div>
            }
            {
                tab === TabView.REPLIES &&
                <div className="space-y-4">
                    {replies.map((reply, index) => (
                        <div key={index} className="border-b border-white/15 px-4 py-2">
                            <Message key={index} message={reply} />
                        </div>
                    ))}
                </div>
            }
            {
                tab === TabView.FOLLOWERS &&
                <ul className="flex flex-col">
                    {
                        followers.map((user, index) => (
                            <li key={index}>
                                <div key={index} className="border-b border-white/15 px-4 py-2">
                                    <UserCard user={user} layout={USER_CARD_LAYOUT.VERTICAL} />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            }
            {
                tab === TabView.FOLLOWING &&
                <ul className="flex flex-col">
                    {
                        following.map((user, index) => (
                            <li key={index}>
                                <div key={index} className="border-b border-white/15 px-4 py-2">
                                    <UserCard user={user} layout={USER_CARD_LAYOUT.VERTICAL} />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            }
        </>
    )
}
