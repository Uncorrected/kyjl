<script setup lang="ts">
import type { ListInstance } from 'vant';
import { getPostList, queryTyep, postResponse } from '@/api/post';

// 搜索
const searchValue = ref<string>('');
const changeValue = (() => {
    let timer: number;
    return function (value: string) {
        clearTimeout(timer);
        timer = setTimeout(async () => {
            const res = await loadingPost({ key: value });
            list.value = res;
            listRef.value?.check();
        }, 1500);
    }
})()

// 公告
const notice = ref('无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。');

// 获取文章列表
const list = ref<postResponse[]>([]);
const loadingPost = async ({ page = 1, pageSize = 10, key = '' }: queryTyep) => {
    return await getPostList({ page, pageSize, key });
}

// 下拉刷新
const listRef = ref<ListInstance>();
const isLoading = ref(false);
const onRefresh = async () => {
    const res = await loadingPost({});
    list.value = res;
    isLoading.value = false;
    listRef.value?.check();
};

// 底部加载
const bottomLoading = ref(false);
const finished = ref(false);
const onLoad = async () => {
    // 异步更新数据
    const res = await getPostList({ key: searchValue.value });
    list.value.push(...res);

    // 加载状态结束
    bottomLoading.value = false;
};
</script>

<template>
    <van-sticky>
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" @update:model-value="changeValue" />
    </van-sticky>

    <van-notice-bar left-icon="volume-o" mode="closeable" :text="notice" />

    <van-pull-refresh class="pull-refresh" v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
        <van-list ref="listRef" v-model:loading="bottomLoading" :finished="finished" finished-text="没有更多了" @load="onLoad">
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
                            <span>{{ item.liveTotal }}</span>
                        </span>
                        <span>
                            <van-icon name="chat-o" />
                            <span>{{ item.comentTotal }}</span>
                        </span>
                    </van-space>
                </template>
            </van-card>
        </van-list>
    </van-pull-refresh>
    <van-back-top right="6vw" bottom="8vh" />
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