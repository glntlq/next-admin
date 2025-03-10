/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2024-12-06 10:05:33
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2024-12-19 16:35:14
 * @Description: 布局文件
 */
import './globals.scss';

import { NextUIProvider } from '@nextui-org/react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import AppSideBar from '@/components/AppSideBar';
import FullLoading from '@/components/FullLoading'; // 全局 Loading
import GlobalFooter from '@/components/GlobalFooter';
import GlobalHeader from '@/components/GlobalHeader'; // 头部布局
import PageAnimatePresence from '@/components/PageAnimatePresence';
import ThemeProvider from '@/components/ThemeProvider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_PROJECT_NAME,
  description: process.env.NEXT_PUBLIC_PROJECT_DESC,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextUIProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="light">
              {/* 全局 Loading */}
              <FullLoading />
              <SidebarProvider>
                <AppSideBar />
                <SidebarInset>
                  {/* 头部布局 */}
                  <GlobalHeader />
                  <PageAnimatePresence>{children}</PageAnimatePresence> {/* 底部版权 */}
                  <GlobalFooter />
                </SidebarInset>
              </SidebarProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
          <Toaster position="top-center" />
        </NextUIProvider>
      </body>
    </html>
  );
}
