import Link from 'next/link'
import React from 'react'
import { PostsCounter } from '../counters/PostsCounter'
import { TrendingHashtagType } from '@/types/hash.types'

interface MessageHashtagProps {
    hashtag: TrendingHashtagType;
}

export const MessageHashtag = ({ hashtag }: MessageHashtagProps) => {
    return (
        <>
            <Link href={`/?query=${hashtag.hash.replace("#", "")}&type=hash`}><h3>{hashtag.hash}</h3></Link>
            <PostsCounter count={hashtag.count} />
        </>
    )
}
