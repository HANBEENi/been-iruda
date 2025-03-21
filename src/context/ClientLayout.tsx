'use client'; // ✅ 클라이언트 전용 컴포넌트

import { ThemeContextProvider, useTheme } from '@/context/ThemeContext';
import GlobalStyle from '@/styles/GlobalStyle';
import StyledComponentsRegistry from '@/context/StyledComponentsRegistry';
import { SectionProvider } from './SectionContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeContextProvider>
        <SectionProvider>
          <GlobalStyle />
          {children}
        </SectionProvider>
      </ThemeContextProvider>
    </StyledComponentsRegistry>
  );
}
