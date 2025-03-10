"use client";

import exploreAPI from "@/services/explore/explore.service";
import { PageType } from "@/types/pagination.types";
import { TrendingUserType } from "@/types/user.types";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { USER_CARD_LAYOUT, UserCard } from "./UserCard";

interface UserListProps {
    initialUsers: PageType<TrendingUserType>;
}

export const UserList = ({ initialUsers }: UserListProps) => {

    const [page, setPage] = useState<PageType<TrendingUserType>>(initialUsers);
    const [users, setUsers] = useState<TrendingUserType[]>(initialUsers.content);

    const fetchData = async () => {
        const pageNumber = page.pagination.page + 1;
        const response = await exploreAPI.getFollowRecommendations(pageNumber, 20);
        setPage(response);
        setUsers([...users, ...response.content]);
    }

    const refresh = async () => {
        const response = await exploreAPI.getFollowRecommendations(0, 20);
        setPage(response);
        setUsers(response.content);
    }

    return (
        <InfiniteScroll
            dataLength={users.length} //This is important field to render the next data
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
            <div className="space-y-4">
                {users.map((user, index) => (
                    <UserCard
                        key={index}
                        user={user}
                        layout={USER_CARD_LAYOUT.VERTICAL}
                    />
                ))}
            </div>
        </InfiniteScroll>

    )
}
