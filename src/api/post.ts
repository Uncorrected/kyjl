import instance from '@/utils/request';
interface queryTyep {
    page?: number,
    pageSize?: number,
    key?: string,
}

const api = {
    post: '/post'
};

const getPostList = ({ page = 1, pageSize = 10, key }: queryTyep) => instance.get(api.post, { params: { page, pageSize, key } });

export type {
    queryTyep
}

export {
    getPostList
}