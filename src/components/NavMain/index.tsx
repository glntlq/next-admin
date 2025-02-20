'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { MenuIconMap, MenuList } from '@/constants/MenuConfig';
import { map } from 'lodash-es';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NavMain() {
  const t = useTranslations('Route');
  // 路由跳转
  const router = useRouter();
  // 当前激活的菜单
  const pathname = usePathname();
  const [activeKey, setActiveKey] = useState(pathname);
  // 判断当前菜单是否激活
  const isActive = (path: string) => activeKey === path;
  // 点击菜单回调
  const handleMenuClick = (path: string, hasChdilren = false) => {
    if (hasChdilren) {
      return;
    }
    router.push(path);
    setActiveKey(path);
  };
  return (
    <SidebarGroup>
      <SidebarMenu>
        {map(MenuList, ({ path, name, children = [] }) => (
          <Collapsible key={path} asChild defaultOpen={activeKey === path} className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={t(name)}
                  isActive={isActive(path)}
                  onClick={() => handleMenuClick(path, !!children.length)}
                >
                  {MenuIconMap[name]}
                  <span>{t(name)}</span>
                  {children?.length ? (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  ) : null}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {map(children, (subItem) => (
                    <SidebarMenuSubItem key={subItem.path}>
                      <SidebarMenuSubButton
                        asChild
                        isActive={isActive(subItem.path)}
                        onClick={() => handleMenuClick(subItem.path, !!subItem.children?.length)}
                      >
                        <a
                          onClick={() => handleMenuClick(subItem.path, !!subItem.children?.length)}
                          className="cursor-pointer"
                        >
                          {MenuIconMap[subItem.name]}
                          <span>{t(subItem.name)}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
