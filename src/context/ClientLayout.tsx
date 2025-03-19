'use client'; // ✅ 클라이언트 전용 컴포넌트

import { ThemeContextProvider } from '@/context/ThemeContext';
import GlobalStyle from '@/styles/GlobalStyle';
import StyledComponentsRegistry from '@/context/StyledComponentsRegistry';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </StyledComponentsRegistry>
  );
}
