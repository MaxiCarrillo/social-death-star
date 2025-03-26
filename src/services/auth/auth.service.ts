import { AuthResponseType } from "@/types/auth.types";
import { createClient, RedisClientType } from "redis";
import { AccessDeniedError } from "../common/http.errors";
import { v4 as uuidv4 } from "uuid";
import authAPI from "./auth.api";


const TEN_MINUTE = 60 * 10;

class AuthService {

    private client: RedisClientType;

    constructor() {
        this.client = createClient({
            url: "redis://default:SocialNetwork123@localhost:6379"
        });

        this.client.connect().then(() => console.log("Connected to Redis"));
    }

    async authentica(username: string, password: string): Promise<AuthResponseType> {
        const loginResponse = await authAPI.loginInternal(username, password);
        const sessionId = uuidv4();

        const now = new Date();
        const expireAt = new Date(now.getTime() + TEN_MINUTE * 1000).toUTCString();

        this.client.set(sessionId, loginResponse.accessToken, {
            EX: TEN_MINUTE
        });

        return {
            sessionId: sessionId,
            user: loginResponse.user,
            expireAt: expireAt
        }

    }

    async getAccessToken(sessionId?: string): Promise<string> {
        if (!sessionId) throw new AccessDeniedError("SessionID is not valid");
        const accessToken = await this.client.get(sessionId);
        if (!accessToken) throw new AccessDeniedError("SessionID is not valid");
        return accessToken;
    }

    async getRedisValue(key: string): Promise<string | null> {
        return await this.client.get(key);
    }
}

const authService = new AuthService();
export default authService;