'use client';

/* 다크모드 | 화이트모드 설정 */
// 다크모드 | 화이트모드 상태 저장
// LocalStorage에 저장하여 페이지 새로고침 시 유지
// HTML data-theme 속성으로 전역 테마 적용
import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { light, dark } from '@/styles/themes';
import GlobalStyle from '@/styles/GlobalStyle';

const ThemeContext = createContext({
  themeMode: 'light',
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedTheme =
      (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setThemeMode(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    if (!themeMode) return;

    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <StyledThemeProvider theme={themeMode === 'light' ? light : dark}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
