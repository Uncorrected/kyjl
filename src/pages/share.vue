<script setup lang="ts">
const images = [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
];
</script>

<template>
    <van-swipe :autoplay="3000" lazy-render :height="200">
        <van-swipe-item v-for="image in images" :key="image">
            <van-image fit="fill" :src="image" height="100%" width="100%" />
        </van-swipe-item>
    </van-swipe>
</template>