/* [1] Light 모드 설정 --------------------------------------------------------- */

export const light = {
  // 기본 설정
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(237, 237, 237, 0.9) 100%)',
  text: '#000000',
  logo: '/images/logo.png',
  boxshadow: '0 4px 10px rgba(255, 255, 255, 0.5)',

  // 테마 버튼
  themeButton: {
    backgroundImage: '/images/theme-button-background.png',
    icon: '/images/theme-button-icon.png',
  },
  // 마퀴 라인
  marquee: {
    color: '#fff',
    background: '#000',
  },
  // 뮤직 바
  musicBar: {
    background: '#000',
    iconColor: '#fff',
  },
  // 아래 화살표
  arrowDown: {
    color: '#000',
  },
  // 알림 배너
  noticeBanner: {
    color: '#ffe1eb',
  },
};

/* [1] Dark 모드 설정 ---------------------------------------------------------- */

export const dark = {
  // 기본 설정
  background:
    'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(26, 26, 26, 0.9) 100%)',
  text: '#ffffff',
  logo: '/images/logo-dark.png',
  boxshadow: '0 4px 10px rgba(0, 0, 0, 0.5)',

  // 테마 버튼
  themeButton: {
    backgroundImage: '/images/theme-button-background-dark.png',
    icon: '/images/theme-button-icon-dark.png',
  },
  // 마퀴 라인
  marquee: {
    color: '#000',
    background: '#fff',
  },
  // 뮤직 바
  musicBar: {
    background: '#fff',
    iconColor: '#000',
  },
  // 아래 화살표
  arrowDown: {
    color: '#FF6297',
  },
  // 알림 배너
  noticeBanner: {
    color: '#ffa6c4',
  },
};

export const theme = { light, dark };
