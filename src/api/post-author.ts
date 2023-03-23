import instance from '@/utils/request';

const countLive = (postid: number) => instance.get(`/post_author/${postid}/live`, { params: { count: 1 } });
const countLiveMany = (postid: number) => instance.get(`/post_author/${postid}/live`, { params: { count: 1 } });
export {
    countLive,
    countLiveMany
}