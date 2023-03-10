import { defineStore } from "pinia";

interface userType {
    uuid: string,
    username: string,
    avatar: string,
    nickname: string,
    school: string,
    isAdmin: boolean,
}

export default defineStore('user', () => {
    const token = ref<string>('');
    const user = ref<userType>({
        uuid: '',
        username: '',
        avatar: '',
        nickname: '',
        school: '',
        isAdmin: false,
    });
    return {
        token,
        user
    }
}, {
    persist: true
})