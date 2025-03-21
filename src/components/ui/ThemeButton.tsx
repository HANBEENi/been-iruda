'use client';

/* 다크모드 버튼 */
// 버튼을 클릭하면 테마 변경 + 아이콘 애니메이션 효과

import { useTheme } from '@/context/ThemeContext';
import { media } from '@/styles/mediaQuery';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ThemeButton = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <ButtonContainer
      onClick={() => {
        console.log('Clicked! Current theme:', themeMode);
        toggleTheme();
      }}
    >
      <IconWrapper
        layout
        animate={{ x: themeMode === 'light' ? 2 : 22 }} // ✅ 아이콘 이동
        transition={{ type: 'spring', stiffness: 200, damping: 20 }} // ✅ 부드러운 스프링 효과
      >
        <span>{themeMode === 'light' ? '🌙' : '☀️'}</span>
      </IconWrapper>
    </ButtonContainer>
  );
};

export default ThemeButton;

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* ✅ 아이콘이 좌측에서 시작 */
  padding: 5px;
  position: relative;
  overflow: hidden;

  width: 80px;
  aspect-ratio: 95/55;

  border-radius: 50px;
  background-image: ${({ theme }) =>
    `url(${theme.themeButton.backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.tablet} {
    display: none;
  }

  cursor: pointer;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; /* ✅ 버튼 내부에서 움직이도록 */
  left: 10px; /* ✅ 기본 위치 */
  top: 6.5px;

  width: 45px;
  aspect-ratio: 1/1;

  background-image: ${({ theme }) => `url(${theme.themeButton.icon})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  font-size: 13px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 7px;
    padding-right: 5px;
  }
`;
