import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { httpGetPublic } from "../common/http.service";

class MessageAPI {
    getMessagesFeed = async (page: number, size: number): Promise<PageType<MessageType>> => httpGetPublic(`/messages/feed`, new URLSearchParams({ page: String(page), size: String(size) }));
}

const messageApi = new MessageAPI();
export default messageApi;