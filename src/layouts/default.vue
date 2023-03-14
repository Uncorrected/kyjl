<script setup lang="ts">
const show = ref(false);

const showNotify = () => {
    show.value = true;
    setTimeout(() => {
        show.value = false;
    }, 2000);
};


interface tabbarType {
    pageName: string,
    iconName: string,
    name: string,
}
const tabbars = ref<tabbarType[]>([
    {
        pageName: '/home',
        iconName: 'fire-o',
        name: '热门',
    }, {
        pageName: '/post',
        iconName: 'description',
        name: '文章',
    }, {
        pageName: '/share',
        iconName: 'guide-o',
        name: '分享',
    }, {
        pageName: '/club',
        iconName: 'friends-o',
        name: '圈子',
    }, {
        pageName: '/my',
        iconName: 'user-o',
        name: '我',
    }
]);
</script>

<template>
    <div class="main">
        <van-nav-bar title="考研吧" @click-right="showNotify">
            <template #right>
                <van-icon name="bell" color="gray" />
            </template>
        </van-nav-bar>
        <van-notify v-model:show="show" type="warning">
            <span>开发中...</span>
        </van-notify>

        <div class="container">
            <router-view v-slot="{ Component, route }">
                <keep-alive>
                    <suspense>
                        <template #default>
                            <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
                        </template>
                        <template #fallback> Loading... </template>
                    </suspense>
                </keep-alive>
            </router-view>
        </div>

        <van-tabbar route>
            <van-tabbar-item v-for="item in tabbars" :icon="item.iconName" :to="item.pageName" replace>{{
                item.name
            }}</van-tabbar-item>
        </van-tabbar>
        <!-- <div class="bottom-box"></div> -->
    </div>
</template>

<style scoped>
.main {
    height: 700px;
    display: flex;
    flex-direction: column;
}

.container {
    flex: 1;
    flex-direction: column;
    overflow: auto;
}

.bottom-box {
    height: 50px;
    flex-shrink: 0
}
</style>