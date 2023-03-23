<script setup lang="ts">
import { login } from '@/api/auth';
import { register } from '@/api/user';
import { useUserStore } from '@/stores';
import { showFailToast, showToast } from 'vant';
import 'vant/es/toast/style';
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
    try {
        const res = await login(values);
        const userStore = useUserStore();
        userStore.$patch((state) => {
            state.token = res.token;
            state.user = res.user;
        });
        onBack();
    } catch (error: any) {
        if (error.status) {
            showFailToast(`${error.message}\n错误代码\n${error.status}`);
        } else {
            showFailToast(`登录失败,请检查账号密码!`);
        }
    }
};
const onRegister = async (values: any) => {
    const keyWithValue = Object.entries(values).filter(([k, v]) => v);
    const newObj = Object.fromEntries(keyWithValue);
    await register(newObj as unknown as formType);
    showToast('注册成功');
    active.value = 0;
};

const router = useRouter();
const route = useRoute();
const onBack = () => {
    router.back()
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
                        <van-field v-model="form.nickname" name="nickname" label="昵称" placeholder="我该怎么称呼您" />
                        <van-field v-model="form.school" name="school" label="学校" placeholder="我无从校验，请您确保它的真实性" />
                    </van-cell-group>
                    <van-button round block type="primary" native-type="submit">
                        注册
                    </van-button>
                </van-form>
            </van-tab>
        </van-tabs>
    </div>
</template>