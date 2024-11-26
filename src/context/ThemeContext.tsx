"use client";

/* 
----------------------------------------------------------------
 다크모드 | 화이트모드 설정
----------------------------------------------------------------
테마 모드 설정을 처음 구현해보는 프로젝트라서 해당 관련 주석을 자세히 작성하였습니다.
*/
import React, { createContext, useContext, useEffect, useState } from "react";

// 테마 종류 두 가지만 사용 지정 (light, dark)
type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme; // 현재 테마
  toggleTheme: () => void; // 테마 변경 함수
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // 브라우저 로컬 스토리지에서 테마값 가져오기
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      // 저장된 테마가 있으면 상태를 업데이트
      setTheme(savedTheme);
      // HTML 태그에 테마 속성 추가
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    // 현재 테마가 'light'면 'dark'로, 'dark'면 'light'로 전환
    const newTheme = theme === "light" ? "dark" : "light";
    // 상태 업데이트
    setTheme(newTheme);
    // 로컬 스토리지에 새로운 테마 저장
    localStorage.setItem("theme", newTheme);
    // HTML 태그에 새로운 테마 속성 추가
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  // ThemeContext의 값을 가져오기
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "반드시 ThemeProvider로 감싸진 컴포넌트 내에서만 useTheme를 호출해야 함"
    );
  }
  return context;
};
