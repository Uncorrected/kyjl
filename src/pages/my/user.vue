<script setup lang="ts">
import { useUserStore } from '@/stores';
import { useRouter } from 'vue-router';
import { updateUser } from '@/api/user';
import { upImg } from '@/api/upload';
import user from '@/stores/user';

const router = useRouter();
// 顶部
const onClickLeft = () => {
    router.back();
};
const showBottom = ref(false)
const userStore = useUserStore();
const logout = () => {
    userStore.$reset();
    onClickLeft();
}

// 上传头像
const fileList = ref([{ url: userStore.user.avatar }]);
const upAvatar = async (file: any) => {
    const res = await upImg(file);
    userStore.user.avatar = res.data.avatar;
}

// 修改用户信息
const formdata = ref({ ...userStore.user });
const saveUser = async () => {
    await updateUser(formdata.value);
    userStore.$patch((state) => {
        Object.assign(state.user, formdata);
    })
    onClickLeft();
}
</script>

<template>
    <van-nav-bar title="个人中心" left-text="返回" left-arrow @click-left="onClickLeft"
        @click-right="$evnet => showBottom = true">
        <template #right>
            <van-icon name="ellipsis" />
        </template>
    </van-nav-bar>
    <van-popup v-model:show="showBottom" position="bottom">
        <van-button type="default" square block hairline>重置密码</van-button>
        <van-button type="default" square block hairline @click="logout">退出登录</van-button>
    </van-popup>
    <van-space direction="vertical" fill size="24px">
        <van-cell-group>
            <van-cell center title="头像" clickable>
                <template #right-icon>
                    <!-- <van-image round fit="cover" width="4rem" height="4rem" :src="avatar" /> -->
                    <van-uploader :after-read="upAvatar" preview-size="6rem" :preview-full-image="false" v-model="fileList"
                        :max-count="1" />
                </template>
            </van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-field label="用户名" v-model="formdata.username" placeholder="请不要这样做，这会破坏系统完整性" />
            <van-field label="昵称" v-model="formdata.nickname" placeholder="我该怎么称呼您" />
            <van-field label="学校" v-model="formdata.school" placeholder="请输入高校名称" />
        </van-cell-group>
        <van-button type="primary" size="small" block @click="saveUser">保存信息</van-button>
    </van-space>
</template>

<style scoped></style>