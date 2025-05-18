// src/components/common/ThemeButton.tsx

// =======================================
// 테마모드(light/dark) 변경 버튼
// =======================================

'use client';

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
  justify-content: flex-start; //아이콘 왼쪽에서 시작
  padding: 5px;
  position: relative;
  overflow: hidden;

  width: 80px;
  aspect-ratio: 95/55;

  border-radius: 50px;
  background-image: ${({ theme }) => `url(${theme.themeBtn.backgroundImage})`};
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
  position: absolute; // 버튼 내부에서 움직임
  left: 10px; // 기본 위치 설정
  top: 6.5px;

  width: 45px;
  aspect-ratio: 1/1;

  background-image: ${({ theme }) => `url(${theme.themeBtn.icon})`};
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
