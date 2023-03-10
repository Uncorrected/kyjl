<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/index';

const userStore = useUserStore();
const { token, user } = storeToRefs(userStore);
</script>

<template>
    <div>
        <div class="card">
            <van-image round fit="cover" width="4rem" height="4rem" :src="user.avatar" />
            <div class="info" v-if="token">
                <van-icon name="smile-o" />
                <span>{{ user.nickname }}</span>
                <van-icon name="location-o" />
                <span>{{ user.school }}</span>
            </div>
            <div class="info" v-else>登录/注册</div>
            <van-icon name="arrow" />
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    align-items: center;
    column-gap: 8px;
}

.info {
    flex: 1;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 6px;
}

.info>*:nth-child(2) {
    font-size: 14px;
}

.info>*:last-child {
    font-size: 12px;
    color: rgba(138, 145, 159, 1);
}
</style>