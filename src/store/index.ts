import { create } from 'zustand';

type Store = {
  userInfo: Record<string, any>; // 用户信息
};

const useStore = create<Store>((set, get) => ({
  userInfo: {},
}));

export default useStore;
