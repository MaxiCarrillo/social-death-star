import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { httpGetPublic, httpPost } from "../common/http.service";

class MessageAPI {
    getMessage = async (id: string): Promise<MessageType> => httpGetPublic(`/messages/${id}`);
    getMessagesFeed = async (page: number, size: number): Promise<PageType<MessageType>> => httpGetPublic(`/messages/feed`, new URLSearchParams({ page: String(page), size: String(size) }));
    getMessagesReplies = async (id: string, page: number, size: number): Promise<PageType<MessageType>> => httpGetPublic(`/messages/${id}/replies`, new URLSearchParams({ page: String(page), size: String(size) }));
    postMessage = async (message: string, parentId?: string): Promise<MessageType> => httpPost(`/messages`, { message, parentId });
    getMessagesByHash = async (hashtag: string, page: number, size: number) : Promise<PageType<MessageType>> => httpGetPublic(`/messages/hash/${hashtag}`, new URLSearchParams({ page: String(page), size: String(size) }));
}

const messageApi = new MessageAPI();
export default messageApi;