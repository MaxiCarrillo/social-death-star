import { TrendingHashtagType } from "@/types/hash.types";
import { PageType } from "@/types/pagination.types";
import { TrendingUserType } from "@/types/user.types";
import { httpGetPublic } from "../common/http.service";

class ExploreAPI {
    getTrendingHashtags = async (page: number, size: number): Promise<PageType<TrendingHashtagType>> =>
        httpGetPublic(`/explore/trending`, new URLSearchParams({ page: String(page), size: String(size) }));
    getFollowRecommendations = async (page: number, size: number): Promise<PageType<TrendingUserType>> =>
        httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({ page: String(page), size: String(size) }));
}

const exploreAPI = new ExploreAPI();
export default exploreAPI;