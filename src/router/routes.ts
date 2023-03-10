import { RouteRecordRaw } from 'vue-router';
import main from './main';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'layout',
        redirect: '/home',
        component: () => import('@/layouts/default.vue'),
        children: main,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/my/Login.vue'),
    }, {
        path: '/user',
        name: 'User',
        component: () => import('@/pages/my/user.vue'),
        meta: {
            requiresAuth: true,
        },
    }, {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/other/NotFound.vue')
    },
];

export default routes;