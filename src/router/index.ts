import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
import { useUserStore } from '@/stores';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from) => {
    const userStore = useUserStore();
    if (to.meta.requiresAuth && !userStore.token && to.name !== 'Login') {
        return { name: 'Login', query: { origin: from.fullPath } };
    }
});

export default router;