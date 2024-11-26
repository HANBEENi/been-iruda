/* ----------------------------------------------------------------
 * 전역 레이아웃 정의
 *
 * - 기본 구조 html, body, 언어, 폰트 적용
 * - 테마모드(다크,화이트) 전역 상태 관리 적용
 * - SSR에서 스타일컴포넌트 렌더링 적용
 * ---------------------------------------------------------------- */

import "@/styles/globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BEEN.IRUDA",
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
        <ThemeProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
