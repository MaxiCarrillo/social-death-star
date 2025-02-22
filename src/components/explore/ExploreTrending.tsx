import Link from "next/link"
import { PostsCounter } from "../counters/PostsCounter"
import { HashtagType } from "@/types/hash.types";

interface ExploreTrendingProps {
    hashtags: HashtagType[];
}


export const ExploreTrending = ({ hashtags }: ExploreTrendingProps) => {

    if (!hashtags.length) return null;

    return (
        <div className="bg-gray-900 rounded-lg px-8 py-4">
            <h2>Trending Topics</h2>
            <ul className="flex flex-col gap-4 mt-4">
                {
                    hashtags.slice(0, 2).map((hashtag, index) => (
                        <li key={index}>
                            <Link href={`mensajes?query=${hashtag.hashtag}&type=hash`}><h3>#{hashtag.hashtag}</h3></Link>
                            <PostsCounter count={hashtag.count} />
                        </li>
                    ))
                }
                {
                    hashtags.length > 2 && <li className="text-white/50">
                        <Link href="/explorar?type=hash" className="link-primary">Ver más</Link>
                    </li>
                }
            </ul>
        </div >
    )
}
