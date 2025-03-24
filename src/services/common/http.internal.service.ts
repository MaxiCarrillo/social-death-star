import { HttpBaseAPI } from "./http.service";

export const API_URL = 'http://localhost:8080/api';
export const API_PUBLIC_URL = '/public';

class HttpInternalAPI extends HttpBaseAPI {
    constructor() {
        super(API_URL, API_PUBLIC_URL);
    }
}

const httpInternalApi = new HttpInternalAPI();
export default httpInternalApi;