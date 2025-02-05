import { Key, ReactNode, useState } from 'react';
import type { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];

const useDefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const getItem = (label: ReactNode, key: Key, icon?: ReactNode, children?: MenuItem[]): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  };

  return {
    collapsed,
    setCollapsed,
    getItem,
  };
};

export default useDefaultLayout;
