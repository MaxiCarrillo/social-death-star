import { TrendingHashtagType } from "@/types/hash.types";
import { PageType } from "@/types/pagination.types";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { MessageHashtag } from "./MessageHashtag";
import exploreAPI from "@/services/explore/explore.service";

interface MessageHashtagProps {
    initialHashtags: PageType<TrendingHashtagType>;
}

export const MessageHashtagList = ({ initialHashtags }: MessageHashtagProps) => {

    const [page, setPage] = useState<PageType<TrendingHashtagType>>(initialHashtags);
    const [hashtags, setHashtags] = useState<TrendingHashtagType[]>(initialHashtags.content);

    const fetchData = async () => {
        const pageNumber = page.pagination.page + 1;
        const response = await exploreAPI.getTrendingHashtags(pageNumber, 20);
        setPage(response);
        setHashtags([...hashtags, ...response.content]);
    }

    const refresh = async () => {
        const response = await exploreAPI.getTrendingHashtags(0, 20);
        setPage(response);
        setHashtags(response.content);
    }

    return (
        <InfiniteScroll
            dataLength={hashtags.length} //This is important field to render the next data
            next={fetchData}
            hasMore={!page.pagination.last}
            loader={<h4>Cargando más mensajes...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! Has llegado al final</b>
                </p>
            }
            // below props only if you need pull down functionality
            refreshFunction={refresh}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8595; Arrastrar hacia abajo para refrescar</h3>
            }
            releaseToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8593; Suelta para refrescar</h3>
            }
        >
            <ul className="flex flex-col gap-4">
                {
                    hashtags.map((hashtag, index) => (
                        <li key={index}>
                            <MessageHashtag hashtag={hashtag} />
                        </li>
                    ))
                }
            </ul>

        </InfiniteScroll>
    )
}
