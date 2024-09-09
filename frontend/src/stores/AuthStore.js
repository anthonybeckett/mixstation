import { defineStore } from 'pinia';
import api from '@/services/api';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
    }),
    actions: {
        async login(credentials) {
            try {
                await api.get('/sanctum/csrf-cookie');  // For CSRF protection
                const { data } = await api.post('/login', credentials);
                this.user = data;
            } catch (error) {
                console.error('Login failed:', error);
            }
        },
        async register(userData) {
            try {
                await api.post('/register', userData);
            } catch (error) {
                console.error('Registration failed:', error);
            }
        },
        async logout() {
            try {
                await api.post('/logout');
                this.user = null;
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
        isAuthenticated: (state) => !!state.user,
    },
});
