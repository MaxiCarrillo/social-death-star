import { NextResponse } from "next/server";
import { createClient } from "redis";

const client = createClient({
    url: "redis://default:SocialNetwork123@localhost:6379"
});

client.connect().then(() => console.log("Connected to Redis"));

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key") ?? '';

    try {
        const value = await client.get(key);
        return NextResponse.json({ key, value });
    } catch (error) {
        console.error("Error in Redis GET:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}