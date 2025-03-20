/* 전역 레이아웃 설정 + 다크모드 적용 */

// 기본 구조 html, body, 언어, 폰트 적용
// 테마모드(다크,화이트) 전역 상태 관리 적용
// SSR에서 스타일컴포넌트 렌더링 적용

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientLayout from '@/context/ClientLayout';
import '@/styles/locomotive.css';
import { MusicProvider } from '@/context/MusicContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BEEN.IRUDA | 김한빈 포트폴리오',
  description: "BEEN.IRUDA: '빈, 이루다.' 포트폴리오 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ClientLayout>
          <MusicProvider>{children}</MusicProvider>
        </ClientLayout>
      </body>
    </html>
  );
}
