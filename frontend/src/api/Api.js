import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/api',
    withCredentials: true,
});

export const sanctum = axios.create({
    baseURL: 'http://localhost/',
    withCredentials: true,
});

export default api;
