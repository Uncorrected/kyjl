<script setup lang="ts">
import { getPostList, queryTyep } from '@/api/post';

const searchValue = ref<string>('');
const onSearch = async (value: string) => {
    const res = await loadingPost({ key: value });
    console.log(res);
}
const changeValue = (() => {
    let timer: number;
    return function (value: string) {
        clearTimeout(timer);
        timer = setTimeout(async () => {
            const res = await loadingPost({ key: value });
            console.log(res);
        }, 1500);
    }
})()

const notice = ref('无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。');

interface post {
    readonly uuid: string,
    imgURL: string,
    title: string,
    author: string,
    summary: string,
    date: string,
}
const list = ref<post[]>();
const loadingPost = async ({ page, pageSize, key }: queryTyep) => {
    const res = await getPostList({ page, pageSize, key });
    console.log(res);
    list.value = res.data.postList;
}
loadingPost({});

const isLoading = ref(false);
const onRefresh = async () => {
    await loadingPost({});
    isLoading.value = false;
};
</script>

<template>
    <van-sticky>
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" @search="onSearch" @update:model-value="changeValue"
            @clear="loadingPost" />
    </van-sticky>

    <van-notice-bar left-icon="volume-o" mode="closeable" :text="notice" />

    <van-pull-refresh class="pull-refresh" v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
        <van-card v-for="item in list" :title="item.title" :thumb="item.imgURL">
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
                        <span>446</span>
                    </span>
                    <span>
                        <van-icon name="chat-o" />
                        <span>49</span>
                    </span>
                </van-space>
            </template>
        </van-card>
    </van-pull-refresh>
    <van-back-top right="6vw" bottom="8vh" />
</template>

<style scoped>
.notice-swipe {
    height: 80px;
    line-height: 80px;
}

.pull-refresh {
    flex: 1;
}

.desc {
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}
</style>