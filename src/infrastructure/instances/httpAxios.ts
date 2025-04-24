import axios from 'axios';
import { type Http } from '$domain/repositories/Http';
import { BASE_URL } from '$config';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json'
  },
});

export const httpAxios: Http = {
  get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await api.get(path, {
      ...config,
      params: params,
    });
    return response.data as T;
  },
  post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await api.post(path, { ...params }, { ...config });
    return response.data as T;
  },
  put: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await api.put(path, { ...params }, { ...config });
    return response.data as T;
  },
  delete: async <T>(path: string, params?: any, config?: any) => {
    const response = await api.delete(path, {
      ...config,
      params: params,
    });
    return response.data as T;
  },
};