'use client';

import { Layout } from 'antd';

const { Content } = Layout;

type GlobalContentProps = {
  children: React.ReactNode;
};

export default function GlobalContent({ children }: GlobalContentProps) {
  return <Content style={{ margin: 16, overflow: 'initial' }}>{children}</Content>;
}
