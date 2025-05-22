'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    /* Pretendard 폰트 로드 */
    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-Regular.otf') format('opentype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-Regular.otf') format('opentype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-Regular.otf') format('opentype');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-Regular.otf') format('opentype');
        font-weight: 700;
        font-style: normal;
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

  @font-face {
    font-family: 'LibreBarcode128';
    src: url('/fonts/LibreBarcode128-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        /*스크롤숨김*/
        scrollbar-width: none; //Firefox
        -ms-overflow-style: none; //IE, Edge

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        letter-spacing: -1%;

    }

    /* Chrome, Safari, Opera */
    *::-webkit-scrollbar {
        display: none; 
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    body {
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${({ theme }) => theme.background.primary};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    ul, li {
        list-style: none;
    }
`;

export default GlobalStyle;
