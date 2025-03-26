import { LoginResponseType, RedisResponseType } from "@/types/auth.types";
import httpExternalApi from "../common/http.external.service";
import httpInternalApi from "../common/http.internal.service";

class AuthAPI {


    getRedisValue = async (key: string): Promise<RedisResponseType> =>
        httpExternalApi.httpGet(`/redis`, new URLSearchParams({ key }));

    login = async (username: string, password: string): Promise<LoginResponseType> =>
        httpExternalApi.httpPost(`/auth/login`, { username: username, password: password });

    loginInternal = async (username: string, password: string): Promise<LoginResponseType> =>
        httpInternalApi.httpPostPublic(`/auth/login`, { username: username, password: password });
}

const authAPI = new AuthAPI();
export default authAPI;