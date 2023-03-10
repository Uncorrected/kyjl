<script setup lang="ts">
import { showToast } from 'vant';

const showShare = ref(false);
const options = [
    { name: '微信', icon: 'wechat' },
    { name: '微博', icon: 'weibo' },
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
];
const onSelect = (option: any) => {
    showToast(option.name);
    showShare.value = false;
};
</script>

<template>
    <div>
        <div class="card van-hairline--bottom">
            <router-link :to="{ name: 'User' }">
                <LoginCard />
            </router-link>
            <div class="post-manage">
                <span>收藏</span>
                <span>0</span>
                <span>评论</span>
                <span>0</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.post-manage {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    gap: 6px;
}
</style>