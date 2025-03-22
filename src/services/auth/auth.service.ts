import { LoginResponseType } from "@/types/auth.types";
import { httpPostPublic } from "../common/http.service";

class AuthAPI {
    login = async (username: string, password: string): Promise<LoginResponseType> =>
        httpPostPublic(`/auth/login`, { username:username, password:password });
}

const authAPI = new AuthAPI();
export default authAPI;