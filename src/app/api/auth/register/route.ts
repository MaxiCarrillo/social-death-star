import RegisterScheme from "@/schemes/register.scheme";
import authService from "@/services/auth/auth.service";
import { AccessDeniedError, ConflictError } from "@/services/common/http.errors";
import { cookies } from "next/headers";

export async function POST(request: Request) {

    const { username, password, name, photoUrl } = await RegisterScheme.validate(await request.json());

    try {
        const registerResponse = await authService.register(username, password, name, photoUrl);

        (await cookies()).set('SocialSessionId', registerResponse.sessionId, {
            expires: registerResponse.expireAt,
            secure: true,
            httpOnly: true,
            domain: 'localhost',
            path: '/'
        });

        (await cookies()).set('SocialUsername', registerResponse.user.username, {
            expires: registerResponse.expireAt,
            secure: true,
            httpOnly: false,
            domain: 'localhost',
            path: '/'
        });

        return new Response(JSON.stringify(registerResponse.user), {
            status: 200,
        });
    } catch (e) {
        if (e instanceof ConflictError) {
            return new Response(JSON.stringify({ error: `User ${username} already exists` }), { status: 409 });
        } else {
            return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
        }
    }
}