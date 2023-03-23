import instance from '@/utils/request';
import type { PostData } from './requestType';

interface queryTyep {
    page?: number,
    pageSize?: number,
    key?: string,
}
interface postResponse {
    readonly id: number,
    imgURL: string,
    title: string,
    author: string,
    summary: string,
    date: string,
    liveTotal: number,
    comentTotal: number,
}

const getPostList: PostData<queryTyep, postResponse[]> = (data) => instance.get('/post', { params: data });

export type {
    queryTyep,
    postResponse
}

export {
    getPostList
}