"use client";
import { MessageType } from "@/types/message.types"
import { useState } from "react"
import { Message } from "../messages/Mesagges"


enum TabView {
    MESSAGES,
    REPLIES
}

interface UserTabsProps {
    messages: MessageType[],
    replies: MessageType[],
}

export const UserTabs = ({ messages, replies }: UserTabsProps) => {

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
            </div >
            {
                tab === TabView.MESSAGES ?
                    <div className="space-y-4">
                        {messages.map((message, index) => (
                            <Message key={index} message={message} />
                        ))}
                    </div>
                    :
                    <div className="space-y-4">
                        {replies.map((reply, index) => (
                            <Message key={index} message={reply} />
                        ))}
                    </div>
            }
        </>
    )
}
