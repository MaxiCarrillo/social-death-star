import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import authAPI from './services/auth/auth.api';
import { AccessDeniedError } from './services/common/http.errors';

// Tener en cuenta que los middleware no funcionan con websocket
// Fucionan con APIs webs (una api fetch), redis trabaja con sockets entonces por eso creamos otro servicio
// para poder hacer la llamada a redis

// El unico problema es que este endpoint es publico, por lo cual una persona puede ir pegando distintas keys
// Hasta que encuentre una que le de acceso a algo que no deberia tener acceso

// Por eso podemos usar los headers para implementar seguridad (Se visualiza en el endpoint de Redis)
export async function middleware(request: NextRequest) {
  try {
    const sessionId = request.cookies.get("SocialSessionId")?.value ?? "";
    if (!sessionId) throw new AccessDeniedError("SessionID is not valid");
    const accessToken = await getAccessToken(sessionId);
    if (!accessToken) throw new AccessDeniedError("SessionID is not valid");
    return getAuthenticationHeaders(request, accessToken);
  } catch (error) {
    if (error instanceof AccessDeniedError) {
      if (!request.url.endsWith("/profile")) {
        return NextResponse.next();
      }
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

const getAccessToken = async (sessionId: string): Promise<string> => {
  return (await authAPI.getRedisValue(sessionId)).value;

}

const getAuthenticationHeaders = (request: NextRequest, accessToken: string) => {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-social-access-token', accessToken);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/', '/messages/:path*', '/profile', '/api/proxy/:path*']
}