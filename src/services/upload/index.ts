import { httpRequest } from '@/lib/request';

/**
 * @description: 文件上传
 */
export const uploadFile = (params: FormData) => {
  return httpRequest.post('/upload', params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
