'use client';

import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { BurgerMenuSVG } from '../../../public/icons/SVG';
import ThemeButton from '../ui/ThemeButton';
import Marquee from '../ui/Marquee';
import MusicBar from '../music/MusicBar';
import { media } from '@/styles/mediaQuery';
import { useSection } from '@/context/SectionContext';

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const { currentSection } = useSection();

  /** 섹션 스크롤 이동 */
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    const scrollElement = document.getElementById('main-scroll-container');
    if (!target || !scrollElement) return;

    gsap.to(scrollElement, {
      scrollTo: {
        y: target.offsetTop,
        autoKill: false,
      },
      duration: 1,
      ease: 'power2.out',
    });
  };

  return (
    <Layout>
      <Marquee $arrow="left" />

      <Nav className="global-layout">
        {/* 로고 & 다크모드 버튼 */}
        <LogoWrap>
          <Logo onClick={() => scrollToSection('intro')} />
          <ThemeButton />
        </LogoWrap>

        {/* 음악 바 */}
        <MusicBar />

        {/* 메뉴 */}
        <Menu>
          {['intro', 'musicMe', 'projects', 'skills', 'contact'].map((id) => (
            <MenuItem
              key={id}
              $active={currentSection === id}
              onClick={() => scrollToSection(id)}
            >
              {id.toUpperCase()}
            </MenuItem>
          ))}
          <div className="burger-menu">
            <BurgerMenuSVG />
          </div>
        </Menu>
      </Nav>
    </Layout>
  );
};

export default Header;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1005;

  width: 100%;
  height: 77px;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  position: relative;

  width: 100%;
  height: 70px;
  ${media.tablet} {
    height: 55px;
  }
  ${media.mobile} {
    height: 35px;
  }
`;

/** 로고 & 다크모드 버튼 */
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  flex: 1; /* ✅ 좌측 영역 확보 */
  gap: 20px;
  z-index: 1005;

  height: 100%;
`;

/** 로고 */
const Logo = styled.div`
  display: flex;
  align-items: center;
  max-width: 150px;
  min-width: 80px;
  width: 100%;
  height: 100%;

  /* background-image: url('/images/logo.png'); */
  background-image: ${({ theme }) => `url(${theme.logo})`};
  background-size: contain;

  cursor: pointer;
`;

/** 메뉴 */
const Menu = styled.ul`
  display: flex;
  flex: 1; /* ✅ 우측 영역 확보 */
  justify-content: flex-end; /* ✅ 오른쪽 정렬 */
  align-items: center;
  gap: 15px;
  white-space: nowrap;
  z-index: 1005;

  /* 반응형: 해상도가 줄어들면 메뉴 간격 조절 */
  ${media.tablet} {
    gap: 10px;
  }

  .burger-menu {
    display: none;

    width: 30px;
    cursor: pointer;

    ${media.tablet} {
      display: flex;
    }
  }
`;

const MenuItem = styled.li<{ $active: boolean }>`
  ${media.tablet} {
    display: none;
  }
  font-family: ${({ $active }) =>
    $active ? 'RockSalt, sans-serif' : 'inherit'};

  cursor: pointer;
`;
