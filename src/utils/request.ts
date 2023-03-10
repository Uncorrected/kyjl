import axios from 'axios';
import { useUserStore } from '@/stores';
import { useRouter } from 'vue-router'

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});
instance.interceptors.request.use(config => {
    const userStore = useUserStore();
    const { token } = userStore;
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    console.log('请求拦截器！', error);
})
instance.interceptors.response.use(response => {
    if (response.data.token) {
        const userStore = useUserStore();
        userStore.token = response.data.token;
    }
    return response;
}, error => {
    if (error.response.status == 401) {
        const userStore = useUserStore();
        userStore.$reset();
        const router = useRouter();
        router.replace('Login');
    }
    return Promise.reject(error.response.data);
})

export default instance;
