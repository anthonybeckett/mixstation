import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from "@/views/TestView.vue";
import {useAuthStore} from "@/stores/AuthStore.js";
import VueCookies from 'vue-cookies'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/test',
            name: 'test',
            component: TestView
        },
    ]
})

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();

    if (!authStore.isAuthenticated && VueCookies.get('auth_token') && !authStore.token) {
        await authStore.fetchUser();
        authStore.token = VueCookies.get('auth_token');

        next();
    } else {
        next();
    }
});

export default router
