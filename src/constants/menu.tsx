import { RiDashboardFill, RiInformationFill } from '@remixicon/react';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const MenuList: MenuItem[] = [
  {
    key: '/dashboard',
    icon: <RiDashboardFill size={16} />,
    label: '工作台',
  },
  {
    key: '/about',
    icon: <RiInformationFill size={16} />,
    label: '关于',
  },
];

export default MenuList;
