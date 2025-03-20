'use client';

/* 다크모드 | 화이트모드 설정 */
import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { light, dark } from '@/styles/themes';

/** 📌 ThemeContext의 타입 정의 */
type ThemeContextType = {
  themeMode: 'light' | 'dark';
  toggleTheme: () => void;
};

/** 📌 ThemeContext 생성 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/** 📌 useTheme 커스텀 훅 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useTheme()는 반드시 <ThemeContextProvider> 내부에서 사용해야 합니다.'
    );
  }
  return context;
}

/** 📌 ThemeContextProvider */
export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light'); // ✅ 기본값을 'light'로 설정
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme =
        (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
      setThemeMode(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
      setIsLoaded(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  /** 📌 `isLoaded` 상태가 `false`일 때 로딩 UI를 표시하도록 변경 */
  if (!isLoaded) return <div>Loading Theme...</div>;

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <StyledThemeProvider theme={themeMode === 'light' ? light : dark}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
