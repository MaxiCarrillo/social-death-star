import authAPI from "@/services/auth/auth.service";
import { AccessDeniedError } from "@/services/common/http.errors";
import { NextResponse } from "next/server";
import { createClient } from "redis";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

const schema = yup.object({
    username: yup.string().required("El usuario es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria")
}).required();

const client = createClient({
    url: "redis://default:SocialNetwork123@localhost:6379"
});

client.connect().then(() => console.log("Connected to Redis"));

const TEN_MINUTE = 60 * 10;

export async function POST(request: Request) {
    const { username, password } = await schema.validate(await request.json());
    try {
        const loginResponse = await authAPI.loginInternal(username, password);
        const sessionId = uuidv4();

        const now = new Date();
        const expireAt = new Date(now.getTime() + TEN_MINUTE * 1000).toUTCString();
      
        client.set(sessionId, loginResponse.accessToken, {
            EX: TEN_MINUTE
        });

        const authCookie = `SocialSessionId=${sessionId}; Expires=${expireAt}; Domain=localhost; Secure; HttpOnly`;

        return new Response(JSON.stringify(loginResponse.user), {
            status: 200,
            headers: {
                "Set-Cookie": authCookie
            }
        });
    } catch (e) {
        if (e instanceof AccessDeniedError) {
            return new Response(JSON.stringify({ error: `Invalid credentials for user: ${username}` }), { status: 403 });
        } else {
            return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
        }
    }
}