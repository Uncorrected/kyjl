import instance from '@/utils/request';

interface LoginForm {
    username: string,
    password: string,
};
interface User {
    uuid: string,
    username: string,
    avatar: string,
    nickname: string,
    school: string,
    isAdmin: boolean,
}
interface LoginResponse {
    token: string;
    user: User;
}

interface RegisterForm {
    username: string,
    password: string,
    nickname: string,
    school: string,
};

const api = {
    login: '/auth/login',
    register: '/users',
};

const login = (data: LoginForm) => instance.post<LoginResponse>(api.login, data);
const register = (data: RegisterForm) => instance.post(api.register, data);

export {
    login,
    register,
}