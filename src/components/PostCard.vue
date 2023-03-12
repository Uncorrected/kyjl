<script setup lang="ts">
import { postResponse } from '@/api/post';

const props = defineProps<{ item: postResponse }>();
const item = ref(props.item);
</script>

<template>
    <van-card :title="item.title" :thumb="item.imgURL">
        <template #desc>
            <div class="desc">
                {{ item.summary }}
            </div>
        </template>
        <template #price>
            <van-space>
                <span>{{ item.author }}</span>
                <span>{{ item.date }}</span>
            </van-space>
        </template>
        <template #num>
            <van-space>
                <span>
                    <van-icon name="good-job-o" />
                    <span>{{ item.liveTotal }}</span>
                </span>
                <span>
                    <van-icon name="chat-o" />
                    <span>{{ item.comentTotal }}</span>
                </span>
            </van-space>
        </template>
    </van-card>
</template>
<style scoped>
.desc {
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}
</style>