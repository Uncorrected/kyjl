import { AxiosRequestConfig } from 'axios';

export type PostData<D, R> = (data?: D, config?: AxiosRequestConfig<R>) => Promise<R>;