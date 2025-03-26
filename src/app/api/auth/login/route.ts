import authService from "@/services/auth/auth.service";
import { AccessDeniedError } from "@/services/common/http.errors";
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().required("El usuario es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria")
}).required();

export async function POST(request: Request) {

    const { username, password } = await schema.validate(await request.json());

    try {
        const loginResponse = await authService.authentica(username, password);
        const authCookie = `SocialSessionId=${loginResponse.sessionId}; Expires=${loginResponse.expireAt}; Domain=localhost; Secure; HttpOnly; Path=/`;

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