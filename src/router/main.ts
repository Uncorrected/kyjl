import { RouteRecordRaw } from 'vue-router';

const mainRoutes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/index.vue'),
    }, {
        path: '/post',
        name: 'Post',
        component: () => import('@/pages/post.vue'),
    }, {
        path: '/share',
        name: 'Share',
        component: () => import('@/pages/share.vue'),
    }, {
        path: '/word',
        name: 'Word',
        component: () => import('@/pages/word.vue'),
    }, {
        path: '/my',
        name: 'My',
        component: () => import('@/pages/my/index.vue'),
    },
];

export default mainRoutes;