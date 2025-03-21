/* 글로벌 스타일 */
// 글로벌 스타일 + 다크,화이트모드 + 반응형레이아웃 적용

import { createGlobalStyle } from 'styled-components';
import { media } from '@/styles/mediaQuery';

const GlobalStyle = createGlobalStyle`

  /* 📌 기본 스타일 초기화 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-position:center;
    background-repeat: no-repeat;
  }

  @font-face {
    font-family: 'GmarketSans';
    src: url('/fonts/GmarketSansLight.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSans';
    src: url('/fonts/GmarketSansMedium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSans';
    src: url('/fonts/GmarketSansBold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'RockSalt';
    src: url('/fonts/RockSalt-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  /* 📌 전역 스타일 */
  html,body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s, color 0.3s;

    overflow-x: hidden;
    overflow:hidden;

    font-family: 'GmarketSans', sans-serif;
    font-weight: 500;

  /* ✅ 크롬, 사파리, 엣지에서 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  /* ✅ 파이어폭스에서 스크롤바 숨기기 */
  html {
    scrollbar-width: none;
  }
  }
  /* ✅ Chrome, Safari에서 스크롤바 숨기기 */
  body::-webkit-scrollbar {
    display: none; 
  }

  /* 📌 리스트 기본 스타일 제거 */
  ol,
  ul {
    list-style: none;
  }

  /* 📌 링크 스타일 기본값 */
  a {
    color: inherit;
    text-decoration: none;
  }

  /** 버튼 스타일 기본값 */
  button{
    background: none;
    border:none;
    cursor: pointer;
  }

  /* 📌 반응형 적용 */
  .global-layout{
    padding: 0 70px;

    ${media.tablet()} {
      padding: 0 70px;
    }
  
    ${media.mobile()} {
      padding: 0 20px;
    }
  }

`;

export default GlobalStyle;
