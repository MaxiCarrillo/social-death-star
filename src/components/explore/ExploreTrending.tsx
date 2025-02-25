import Link from "next/link"
import { PostsCounter } from "../counters/PostsCounter"
import { TrendingHashtagType } from "@/types/hash.types";
import { MessageHashtag } from "../messages/MessageHashtag";

interface ExploreTrendingProps {
    hashtags: TrendingHashtagType[];
}


export const ExploreTrending = ({ hashtags }: ExploreTrendingProps) => {

    if (!hashtags || !hashtags.length) return null;

    return (
        <div className="bg-gray-900 rounded-lg px-8 py-4">
            <h2>Trending Topics</h2>
            <ul className="flex flex-col gap-4 mt-4">
                {
                    hashtags.slice(0, 2).map((hashtag, index) => (
                        <li key={index}>
                            <MessageHashtag hashtag={hashtag} />
                        </li>
                    ))
                }
                {
                    hashtags.length > 2 && <li className="text-white/50">
                        <Link href="/explore?type=HASHTAGS" className="link-primary">Ver más</Link>
                    </li>
                }
            </ul>
        </div >
    )
}
