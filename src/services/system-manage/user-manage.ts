import { httpRequest } from '@/lib/request';

const BASE_URL = '/system-manage/user-manage';

/**
 * @description: 获取用户列表
 */
export const getUserList = (params?: App.SystemManage.UserSearchParams) => {
  return httpRequest.get<App.SystemManage.User[]>(BASE_URL, params);
};

/**
 * @description: 新增用户
 */
export const addUser = (params: App.SystemManage.UserSaveParams) => {
  return httpRequest.post<App.SystemManage.User>(BASE_URL, params);
};

/**
 * @description: 更新用户
 */
export const updateUser = ({ id, ...params }: App.SystemManage.UserSaveParams) => {
  return httpRequest.put<App.SystemManage.User>(`${BASE_URL}/${id}`, params);
};

/**
 * @description: 删除用户
 */
export const delUser = (id: string) => {
  return httpRequest.delete<App.SystemManage.User>(`${BASE_URL}/${id}`);
};
