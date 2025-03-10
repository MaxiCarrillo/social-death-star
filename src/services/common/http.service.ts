import { URLSearchParams } from "url";

export const API_URL = 'http://localhost:8080/api';
export const API_PUBLIC_URL = `${API_URL}/public`;

export const httpGetPublic = async<T>(endpoint: string, params?: URLSearchParams): Promise<T> => {
    const res = await fetch(`${API_PUBLIC_URL}${endpoint}${params ? `?${params}` : ''}`, {
        cache: 'no-cache'
    })
    if (!res.ok) {
        throw new Error(`Failed to fetch ${endpoint}`)
    }
    return res.json()
}

export const httpGet = async<T>(endpoint: string, params?: URLSearchParams): Promise<T> => {
    const res = await fetch(`${API_URL}${endpoint}${params ? `?${params}` : ''}`)
    if (!res.ok) {
        throw new Error(`Failed to fetch ${endpoint}`)
    }
    return res.json()
}
