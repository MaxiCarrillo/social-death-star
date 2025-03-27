import { TrendingHashtagType } from "@/types/hash.types";
import { PageType } from "@/types/pagination.types";
import { TrendingUserType } from "@/types/user.types";
import httpInternalApi from "../common/http.internal.service";

class ExploreAPI {
    getTrendingHashtags = async (page: number, size: number): Promise<PageType<TrendingHashtagType>> =>
        httpInternalApi.httpGetPublic(`/explore/trending`, new URLSearchParams({ page: String(page), size: String(size) }));
    getFollowRecommendations = async (page: number, size: number): Promise<PageType<TrendingUserType>> =>
        httpInternalApi.httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({ page: String(page), size: String(size) }));
    getMyFollowRecommendations = async (page: number, size: number, accessToken: string): Promise<PageType<TrendingUserType>> =>
        httpInternalApi.httpGet(`/explore/follow-recommendations`, new URLSearchParams({ page: String(page), size: String(size) }), accessToken);
}

const exploreAPI = new ExploreAPI();
export default exploreAPI;