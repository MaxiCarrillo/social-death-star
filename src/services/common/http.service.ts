import { URLSearchParams } from "url";
import { AccessDeniedError } from "./http.errors";

export class HttpBaseAPI {

    protected privateEndpoint: string;
    protected publicEndpointSuffix: string;

    constructor(privateEndpoint: string, publicEndpoint: string) {
        this.privateEndpoint = privateEndpoint;
        this.publicEndpointSuffix = publicEndpoint;
    }

    async httpGet<T>(endpointSuffix: string, params?: URLSearchParams, accessToken?: string): Promise<T> {
        const res = await fetch(`${this.privateEndpoint}${endpointSuffix}${params ? `?${params}` : ''}`,
            {
                headers: !accessToken ? { 'Content-Type': 'application/json' } :
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
            }
        )
        if (!res.ok) {
            throw new Error(`Failed to fetch ${endpointSuffix}`)
        }
        return res.json()
    }

    async httpGetPublic<T>(endpointSuffix: string, params?: URLSearchParams): Promise<T> {
        return this.httpGet(`${this.publicEndpointSuffix}${endpointSuffix}`, params)
    }

    async httpPost<T>(endpointSuffix: string, body: object, accessToken?: string): Promise<T> {
        const res = await fetch(`${this.privateEndpoint}${endpointSuffix}`, {
            method: 'POST',
            headers: !accessToken ? { 'Content-Type': 'application/json' } :
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
            body: JSON.stringify(body)
        })
        if (!res.ok) {
            if (res.status === 403) {
                throw new AccessDeniedError("User has no access to this resource");
            }
            throw new Error(`Failed to post ${endpointSuffix}`)
        }
        return res.json()
    }

    async httpPostPublic<T>(endpointSuffix: string, body: object): Promise<T> {
        return this.httpPost(`${this.publicEndpointSuffix}${endpointSuffix}`, body)
    }
}

