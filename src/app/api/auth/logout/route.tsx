import authService from "@/services/auth/auth.service";
import { cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const authCookie = request.cookies.get("SocialSessionId");
        if (authCookie) {
            const sessionId = authCookie.value;
            await authService.logout(sessionId);
        }
        // const expireDate = new Date(1970, 1, 1, 1, 1, 1).toUTCString();

        (await cookies()).delete('SocialSessionId');
        (await cookies()).delete('SocialUsername');

        return new Response(JSON.stringify({}), {
            status: 200,
        });
    } catch (e) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}