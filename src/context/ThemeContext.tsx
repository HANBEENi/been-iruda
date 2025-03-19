'use client';

/* 다크모드 | 화이트모드 설정 */

// 다크모드/화이트모드 상태 저장
// LocalStorage에 저장하여 페이지 새로고침 시 유지
// HTML data-theme 속성으로 전역 테마 적용

import React, { createContext, useContext, useEffect, useState } from 'react';

// 테마 종류 (light, dark)
type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme; // 현재 테마
  toggleTheme: () => void; // 테마 변경 함수
}

// ThemeContext의 값을 가져오기
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      '반드시 ThemeProvider로 감싸진 컴포넌트 내에서만 useTheme를 호출해야 함'
    );
  }
  return context;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // 브라우저 로컬 스토리지에서 테마값 가져오기
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      // 저장된 테마가 있으면 상태를 업데이트
      setTheme(savedTheme);
      // HTML 태그에 테마 속성 추가
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    // 현재 테마가 'light'면 'dark'로, 'dark'면 'light'로 전환
    const newTheme = theme === 'light' ? 'dark' : 'light';
    // 상태 업데이트
    setTheme(newTheme);
    // 로컬 스토리지에 새로운 테마 저장
    localStorage.setItem('theme', newTheme);
    // HTML 태그에 새로운 테마 속성 추가
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
