import instance from '@/utils/request';

const api = {
    upload: '/upload/image'
}
const config = {
    timeout: 0,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}
const upImg = (file: any) => instance.post(api.upload, file, config);

export {
    upImg
}