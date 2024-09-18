import axios from 'axios';
import VueCookies from 'vue-cookies';

const api = axios.create({
    baseURL: 'http://localhost/api',
    withCredentials: true,
});

api.interceptors.request.use(config => {
    const token = VueCookies.get('auth_token');

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
});

export const sanctum = axios.create({
    baseURL: 'http://localhost/',
    withCredentials: true,
});

export default api;
