import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/reset.css';
import '@/assets/css/global.css';
import router from '@/router';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import resetStore from '@/stores/reset-store';
const pinia = createPinia();
pinia.use(resetStore);
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');