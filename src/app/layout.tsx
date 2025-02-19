import BasicLayout from '@/components/BasicLayout'; // 全局布局
import type { Metadata } from 'next';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'antd/dist/reset.css';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Next Admin',
  description: '基于 Ant Design Next.js 的后台管理系统',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <BasicLayout>{children}</BasicLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
