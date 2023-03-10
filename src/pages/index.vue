<script setup lang="ts">
const searchValue = ref<string>('');

const noticeList = ref([
    {
        uuid: 'a',
        text: '广东考研分数查询通道已开启，请留言相关资讯文章'
    }, {
        uuid: 'b',
        text: '某高校一名考生作弊，以及被劝退'
    }, {
        uuid: 'c',
        text: '复试即将开始，请通过官方入口完成'
    }
]);

interface post {
    readonly id: number,
    imgURL: string,
    title: string,
    author: string,
    summary: string,
    date: string,
}
const list = ref<post[]>([
    {
        id: 1,
        title: '第一篇文章',
        imgURL: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        author: '张三',
        summary: '只是单纯记录一下最近维护了几个项目之后的感触，也只是在自己现在水平上面的一些感觉。发发牢骚，水水文章,只是单纯记录一下最近维护了几个项目之后的感触，也只是在自己现在水平上面的一些感觉。发发牢骚，水水文章只是单纯记录一下最近维护了几个项目之后的感触，也只是在自己现在水平上面的一些感觉。发发牢骚，水水文章,只是单纯记录一下最近维护了几个项目之后的感触，也只是在自己现在水平上面的一些感觉。发发牢骚，水水文章',
        date: '2022-11-16',
    }, {
        id: 2,
        title: '第二篇文章',
        imgURL: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        author: '李四',
        summary: '加油',
        date: '2022-11-18',
    }
]);
</script>

<template>
    <div>
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" />

        <van-notice-bar left-icon="volume-o" :scrollable="false" mode="closeable">
            <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
                <van-swipe-item v-for="item in noticeList">{{ item.text }}</van-swipe-item>
            </van-swipe>
        </van-notice-bar>

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
    </div>
</template>

<style scoped>
.notice-swipe {
    height: 40px;
    line-height: 40px;
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