import RegisterScheme from "@/schemes/register.scheme";
import authService from "@/services/auth/auth.service";
import { AccessDeniedError, ConflictError } from "@/services/common/http.errors";

export async function POST(request: Request) {

    const { username, password, name, photoUrl } = await RegisterScheme.validate(await request.json());

    try {
        const registerResponse = await authService.register(username, password, name, photoUrl);
        const authCookie = `SocialSessionId=${registerResponse.sessionId}; Expires=${registerResponse.expireAt}; Domain=localhost; Secure; HttpOnly; Path=/`;

        return new Response(JSON.stringify(registerResponse.user), {
            status: 200,
            headers: {
                "Set-Cookie": authCookie
            }
        });
    } catch (e) {
        if (e instanceof ConflictError) {
            return new Response(JSON.stringify({ error: `User ${username} already exists` }), { status: 409 });
        } else {
            return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
        }
    }
}