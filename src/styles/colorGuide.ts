// =======================================
// [디자인토큰] 컬러 가이드
//
// - C : 컬러 | B: 배경 | P : 프로젝트컬러
// - 숫자가 작을수록 연함, 숫자가 클수록 진하고 어두움
// - 50      (배경색, 박스배경)
// - 100~300 (버튼hover, 보조색)
// - 500     (포인트색(기본색상))
// - 700     (강조, 다크모드 배경 위 요소)
// =======================================

export const colorGuide = {
  C01_white: '#FFF',
  C02_black: '#000',
  C03_pink_700: '#FF6297',
  C04_pink_100: '#FFA6C4',
  C05_blue_500: '#1E92FF',
  C06_overlay_white: 'rgba(255,255,255,0.37)',
  C07_overlay_black: 'rgba(0,0,0,0.37)',

  B01_vinyle_white: '/images/background-vinyl-light.png',
  B02_vinyle_black: '/images/background-vinyl-dark.png',

  P01_ollim: '#00D869',
};

export const layoutGuide = {
  padding: {
    pc: '70px',
    tablet: '40px',
    mobile: '20px',
  },

  musicBar_height: {
    // pc_tablet: '51.92px',
    pc_tablet: '61.92px',
    mobile: '41.53px',
  },

  z_index: {
    Z_01: '1005',
    Z_02: '1004',
    Z_03: '1003',
  },
};
