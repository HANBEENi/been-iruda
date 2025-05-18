// src/styles/theme.ts

// =======================================
// - 테마 설정(light/dark)
// - 색상 파레트 정의
// =======================================

'use client';

import { colorGuide } from './colorGuide';

const lightTheme = {
  mode: 'light',

  // 기본 설정
  background: {
    primary: colorGuide.C01_white,
    overlay: colorGuide.C06_overlay_white,
  },
  text: colorGuide.C02_black,
  logo: '',

  // 마퀴 설정
  maquee: {
    background: colorGuide.C03_pink_700,
    text: colorGuide.C02_black,
  },

  // 테마 버튼
  themeBtn: {
    backgroundImage: '/images/theme-button-background.png',
    icon: '/images/theme-button-icon.png',
  },
};

const darkTheme = {
  mode: 'dark',

  // 기본 설정
  background: {
    primary: colorGuide.C02_black,
    overlay: colorGuide.C07_overlay_black,
  },
  text: colorGuide.C01_white,
  logo: '',

  // 마퀴 설정
  maquee: {
    background: colorGuide.C02_black,
    text: colorGuide.C03_pink_700,
  },

  // 테마 버튼
  themeBtn: {
    backgroundImage: '/images/theme-button-background-dark.png',
    icon: '/images/theme-button-icon-dark.png',
  },
};

export const theme = {
  lightMode: lightTheme,
  darkMode: darkTheme,
};

export type Theme = typeof lightTheme;
