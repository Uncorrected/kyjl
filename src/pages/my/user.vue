<script setup lang="ts">
import { useUserStore } from '@/stores';
import { useRouter } from 'vue-router';
import { updateUser, alterPassword } from '@/api/user';
import { uploadImage } from '@/api/upload';
import { showFailToast, showToast, UploaderFileListItem } from 'vant';
import 'vant/es/toast/style';

const router = useRouter();
// 顶部
const onClickLeft = () => {
    router.replace({ name: 'My' });
};
const showBottom = ref(false)
const userStore = useUserStore();
const { user } = userStore;
const logout = () => {
    userStore.$reset();
    onClickLeft();
}

// 上传头像
const fileList = ref<UploaderFileListItem[]>([{
    url: userStore.user.avatar,
    status: '',
    message: '',
},]);
const upAvatar = async (files: any) => {
    try {
        let imgFile = new FormData();
        // imgFile.append("fileType", 'IMAGE');
        imgFile.append("avatar", files.file);
        console.log(imgFile, files.file)
        fileList.value[0].status = 'uploading';
        fileList.value[0].message = '上传中';
        const res = await uploadImage(imgFile);
        // console.log(res)
        user.avatar = res.avatar;
    } catch (error: any) {
        console.log(error)
        if (error.statusCode) {
            showFailToast(`${error.message}\n错误代码\n${error.statusCode}`);
        } else {
            showFailToast('未知错误！');
        }
    } finally {
        fileList.value[0].status = '';
        fileList.value[0].message = '';
    }
}

// 修改用户信息
const formdata = ref({
    nickname: user.nickname,
    school: user.school
});
const saveUser = async () => {
    try {
        await updateUser(formdata.value);
        userStore.$patch((state) => {
            Object.assign(state.user, formdata.value);
        })
        onClickLeft();
    } catch (error: any) {
        showFailToast(`${error.message}\n错误代码\n${error.statusCode}`);
    }
}

const passwordForm = ref();
const show = ref(false)
const password = ref<string>('')
const validator1 = (value: string) => /[0-9a-zA-Z]{1,32}/.test(value);
const validatePWD = ref<string>('')
const validator2 = (value: string) => value == password.value;

// 修改密码
const alterPWD = async (values: object) => {
    try {
        await alterPassword(password.value);
        showBottom.value = false;
        showToast('修改密码成功');
    } catch (error) {
        console.log(error);
    }
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
        <div>
            <van-dialog v-model:show="show" title="修改密码" show-cancel-button :show-confirm-button="false"
                @cancel="() => showBottom = false">
                <van-form ref="passwordForm" validate-trigger="onSubmit" @submit="alterPWD">
                    <van-cell-group inset>
                        <van-field v-model="password" required type="password" label="新密码" name="password" maxlength="32"
                            show-word-limit :rules="[{ validator: validator1, message: '必须是数字字符串' }]" />
                        <van-field v-model="validatePWD" required type="password" label="校验密码" name="validatePWD"
                            maxlength="32" show-word-limit :rules="[{ validator: validator2, message: '必须和新密码一致' }]" />
                    </van-cell-group>
                    <div style="text-align: center;">
                        <van-button type="primary" native-type="submit">
                            同意
                        </van-button>
                    </div>
                </van-form>
            </van-dialog>
            <van-button type="default" square block hairline @click="() => show = !show">修改密码</van-button>
        </div>
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
            <van-field label="用户名" v-model="user.username" placeholder="请不要这样做，这会破坏系统完整性" readonly />
            <van-field label="昵称" v-model="formdata.nickname" placeholder="我该怎么称呼您" />
            <van-field label="学校" v-model="formdata.school" placeholder="请输入高校名称" />
        </van-cell-group>
        <van-button type="primary" size="small" block @click="saveUser">保存信息</van-button>
    </van-space>
</template>

<style scoped></style>