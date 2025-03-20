/* [1] Light 모드 설정 --------------------------------------------------------- */

export const light = {
  /* 기본설정 */
  background: 'linear-gradient(180deg, #FFFFFF 0%, #EDEDED 100%)',
  text: '#000000',
  logo: '/images/logo.png',

  /* 테마버튼 */
  themeButton: {
    backgroundImage: '/images/theme-button-background.png',
    icon: '/images/theme-button-icon.png',
  },
  /* 마퀴라인 */
  marquee: {
    color: '#fff',
    background: '#000',
  },
  /* 뮤직바 */
  musicBar: {
    background: '#000',
    iconColor: '#fff',
  },
  /* 아래화살표 */
  arrowDown: {
    color: '#000',
  },
};

/* [1] Dark 모드 설정 ---------------------------------------------------------- */

export const dark = {
  /* 기본설정 */
  background: '#000000',
  text: '#ffffff',
  logo: '/images/logo-dark.png',

  /* 테마버튼 */
  themeButton: {
    backgroundImage: '/images/theme-button-background-dark.png',
    icon: '/images/theme-button-icon-dark.png',
  },
  /* 마퀴라인 */
  marquee: {
    color: '#000',
    background: '#fff',
  },
  /* 뮤직바 */
  musicBar: {
    background: '#fff',
    iconColor: '#000',
  },
  /* 아래화살표 */
  arrowDown: {
    color: '#FF6297',
  },
};

export const theme = { light, dark };
