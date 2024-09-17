import { defineStore } from 'pinia';
import api, { sanctum } from '../api/Api';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
    }),
    actions: {
        async login(credentials) {
            try {
                await sanctum.get('/sanctum/csrf-cookie');
                const results = await api.post('/login', credentials);

                if (results.status === 201) {
                    this.user = results.data.user;
                    this.token = results.data.token;

                    return true;
                }
            } catch (error) {
                console.error('Login failed:', error);
            }

            return false;
        },
        async register(userData) {
            try {
                let results = await api.post('/register', userData);

                if (results.status === 201) {
                    this.user = results.data.user;
                    this.token = results.data.token;

                    return true;
                }
            } catch (error) {
                console.error('Registration failed:', error);
            }

            return false;
        },
        async logout() {
            try {
                await api.post('/logout');
                this.user = null;
                this.token = null;
            } catch (error) {
                console.error('Logout failed:', error);
            }
        },
        async fetchUser() {
            try {
                const { data } = await api.get('/user');
                this.user = data;
            } catch (error) {
                this.user = null;
            }
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
});
