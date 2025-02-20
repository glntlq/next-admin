import { httpRequest } from '@/utils/request';

const BASE_URL = '/system-manage/internationalization';

/**
 * @description: 获取国际化列表
 */
export const getInternalizationList = (params?: App.SystemManage.InternalizationSearchParams) => {
  return httpRequest.get<App.SystemManage.Internalization[]>(BASE_URL, params);
};

/**
 * @description: 新增国际化
 */
export const addInternalization = (params: App.SystemManage.InternalizationSaveParams) => {
  return httpRequest.post<App.SystemManage.Internalization>(BASE_URL, params);
};

/**
 * @description: 更新国际化
 */
export const updateInternalization = ({ id, ...params }: App.SystemManage.InternalizationSaveParams) => {
  return httpRequest.put<App.SystemManage.Internalization>(`${BASE_URL}/${id}`, params);
};

/**
 * @description: 删除国际化
 */
export const delInternalization = (id: string) => {
  return httpRequest.delete<App.SystemManage.Internalization>(`${BASE_URL}/${id}`);
};
