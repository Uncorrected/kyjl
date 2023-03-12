<script setup lang="ts">
import { login, register } from '@/api/auth';
import { useUserStore } from '@/stores';
import { showToast } from 'vant';
import { useRoute, useRouter } from 'vue-router';

interface formType {
    username: string,
    password: string,
    nickname?: string,
    school?: string,
};
const form = ref<formType>({
    username: '',
    password: '',
    nickname: '',
    school: '',
});
const onLogin = async (values: any) => {
    const res = await login(values);
    // console.log(res);
    const userStore = useUserStore();
    userStore.$patch((state) => {
        state.token = res.token;
        state.user = res.user;
    });
    onBack();
};
const onRegister = async (values: any) => {
    const res = await register(values);
    showToast('注册成功');
};

const router = useRouter();
const route = useRoute();
const onBack = () => {
    router.replace(route.query.origin as string)
};
const active = ref(0);
</script>

<template>
    <div>
        <van-nav-bar title="开启新大陆" left-text="返回" left-arrow @click-left="onBack" />
        <van-tabs v-model:active="active">
            <van-tab title="登录">
                <van-form @submit="onLogin">
                    <van-cell-group inset>
                        <van-field v-model="form.username" name="username" label="用户名" placeholder="它是你的唯一凭证"
                            :rules="[{ required: true, message: '请填写用户名' }]" required />
                        <van-field v-model="form.password" type="password" name="password" label="密码"
                            placeholder="你可以通过特殊手段找回它" :rules="[{ required: true, message: '请填写密码' }]" required />
                    </van-cell-group>
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </van-form>
            </van-tab>

            <van-tab title="注册">
                <van-form @submit="onRegister">
                    <van-cell-group inset>
                        <van-field v-model="form.username" name="username" label="用户名" placeholder="它是你的唯一凭证"
                            :rules="[{ required: true, message: '请填写用户名' }]" required />
                        <van-field v-model="form.password" type="password" name="password" label="密码"
                            placeholder="你可以通过特殊手段找回它" :rules="[{ required: true, message: '请填写密码' }]" required />
                        <van-field v-model="form.nickname" name="nickname" label="昵称" placeholder="取个好听的外号吧"
                            :rules="[{ message: '请填写昵称' }]" />
                        <van-field v-model="form.school" name="school" label="学校" placeholder="我无从校验，请您确保它的真实性"
                            :rules="[{ message: '请填写所属学校' }]" />
                    </van-cell-group>
                    <van-button round block type="primary" native-type="submit">
                        注册
                    </van-button>
                </van-form>
            </van-tab>
        </van-tabs>
    </div>
</template>

<style scoped></style>