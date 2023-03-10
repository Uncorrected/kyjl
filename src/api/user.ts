import instance from '@/utils/request';

interface updateForm {
    avatar?: string,
    username?: string,
    nickname?: string,
    school?: string,
};

const api = {
    user: '/users'
};

const updateUser = (data: updateForm, uuid: string = '') => instance.patch(`${api.user}/${uuid}`, data);

export {
    updateUser
}