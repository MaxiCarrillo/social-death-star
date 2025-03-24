import { HttpBaseAPI } from "./http.service";

export const API_URL = 'http://localhost:3000/api';
export const API_PUBLIC_URL = '/public';

class HttpExternalAPI extends HttpBaseAPI {
    constructor() {
        super(API_URL, API_PUBLIC_URL);
    }
}

const httpExternalApi = new HttpExternalAPI();
export default httpExternalApi;