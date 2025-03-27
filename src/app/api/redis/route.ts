import authService from "@/services/auth/auth.service";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

// Implementamos Headers para tener un poco de seguridad
export async function GET(request: Request) {

    const headerList = headers();
    const authorization = (await headerList).get('Authorization');
    if (authorization !== `Bearer ${process.env.REDIS_API_TOKEN}`) {
        return new Response(JSON.stringify({ error: `Unauthorized` }), { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key") ?? '';

    try {
        const value = await authService.getRedisValue(key);
        return NextResponse.json({ value });
    } catch (error) {
        console.error("Error in Redis GET:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}