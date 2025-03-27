import LoginScheme from "@/schemes/login.scheme";
import authService from "@/services/auth/auth.service";
import { AccessDeniedError } from "@/services/common/http.errors";
import { cookies } from "next/headers";

export async function POST(request: Request) {

    const { username, password } = await LoginScheme.validate(await request.json());

    try {
        const loginResponse = await authService.authentica(username, password);

        (await cookies()).set('SocialSessionId', loginResponse.sessionId, {
            expires: loginResponse.expireAt,
            secure: true,
            httpOnly: true,
            domain: 'localhost',
            path: '/'
        });

        (await cookies()).set('SocialUsername', loginResponse.user.username, {
            expires: loginResponse.expireAt,
            secure: true,
            httpOnly: false,
            domain: 'localhost',
            path: '/'
        });

        return new Response(JSON.stringify(loginResponse.user), {
            status: 200,
        });
    } catch (e) {
        if (e instanceof AccessDeniedError) {
            return new Response(JSON.stringify({ error: `Invalid credentials for user: ${username}` }), { status: 403 });
        } else {
            return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
        }
    }
}