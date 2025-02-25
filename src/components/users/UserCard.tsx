import { TrendingUserType, UserType } from '@/types/user.types';
import Image from 'next/image'
import Link from 'next/link';
import React, { PropsWithChildren } from 'react'

export enum USER_CARD_LAYOUT {
    HORIZONTAL,
    VERTICAL
}

const sectionClasses = {
    [USER_CARD_LAYOUT.HORIZONTAL]: 'flex gap-1 items-center',
    [USER_CARD_LAYOUT.VERTICAL]: 'flex gap-1 items-start flex-col'
}

interface UserCardProps extends PropsWithChildren {
    user: TrendingUserType | UserType;
    layout: USER_CARD_LAYOUT;
}

export const UserCard = ({ user, children, layout }: UserCardProps) => {
    return (
        <article className="flex gap-4">
            <figure className="flex-shrink-0 mb-2 aspect-square rounded-full bg-gray-700 w-14 h-14 overflow-hidden relative flex items-center justify-center ">
                <Image
                    src={user.photoUrl}
                    alt="Picture of the user who posted the message"
                    className='object-cover'
                    fill
                    sizes='64px'
                />
            </figure>
            <section>
                <div className={sectionClasses[layout]}>
                    <h3>{user.name}</h3>
                    <p className="text-white/60 ">
                        @<Link href={`/users/${user.username}`}>{user.username}</Link>
                    </p>
                </div>
                {children}
            </section>
        </article>
    )
}
