import instance from '@/utils/request';
import type { PostData } from './requestType';

const config = {
    timeout: 0,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}
const uploadImage: PostData<any, string> = (file) => {
    return instance.post('/upload/image', file, config);
}

export {
    uploadImage
}