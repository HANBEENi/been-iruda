'use client';

/* 다크모드 버튼 */

// 버튼 누르면 테마 변경 가능

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙 다크모드' : '☀️ 화이트모드'}
    </button>
  );
}
