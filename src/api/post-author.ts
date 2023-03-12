import instance from '@/utils/request';

const countLive = (postUUID: string) => instance.get(`/post_author/${postUUID}/live`, { params: { count: 1 } });
const countLiveMany = (postUUID: string) => instance.get(`/post_author/${postUUID}/live`, { params: { count: 1 } });
export {
    countLive,
    countLiveMany
}