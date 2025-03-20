/* 상하단 마퀴효과 및 헤더, 음악표시 */

import { styled } from 'styled-components';
import { ReactNode, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import Marquee from './Marquee';
import { BurgerMenuSVG } from '../../../public/icons/SVG';
import MusicBar from '@/components/layout/MusicBar';
import ThemeButton from './ThemeButton';
import { media } from '@/styles/mediaQuery';
import ArrowAnimation from '../modules/ArrowAnimation';

gsap.registerPlugin(ScrollTrigger);

const FrameLayout = ({ children }: { children: ReactNode }) => {
  const [isCurrentSection, setIsCurrentSection] = useState<string>('intro');

  // 섹션 데이터
  const sections = [
    { menuName: 'INTRO', sectionName: 'main' },
    { menuName: 'ABOUT ME', sectionName: 'resume' },
    { menuName: 'PROJECTS', sectionName: 'projects' },
    { menuName: 'SKILLS', sectionName: 'skills' },
    { menuName: 'CONTACT', sectionName: 'contact' },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          pin: true,
          scrub: 1,
          end: '+=100%',
        },
      });
    });
  }, []);

  return (
    <Layout data-scroll-container>
      {/* I. 헤더(Header) */}
      <Header>
        <Marquee arrow={'left'} />
        <Nav className="global-layout">
          {/* 좌측: 로고 & 다크모드 버튼 */}
          <LogoWrap>
            <Logo />
            <ThemeButton />
          </LogoWrap>

          {/* 중앙: 음악 바 */}
          <MusicBar />

          {/* 우측: 메뉴 */}
          <Menu>
            {sections.map((i, idx) => (
              <MenuItem
                key={idx}
                $isActive={isCurrentSection === i.sectionName}
              >
                {i.menuName}
              </MenuItem>
            ))}
            <div className="burger-menu">
              <BurgerMenuSVG />
            </div>
          </Menu>
        </Nav>
      </Header>

      {/* II. 컨텐츠(children) */}
      <MainContent>{children}</MainContent>

      {/* III. 푸터(Footer) */}
      <Footer>
        <Info className="global-layout">
          <span style={{ color: '#9A9A9A' }}>
            © 2024. KIM HANBEEN All Rights Reserved
          </span>
          <span style={{ color: '#FF6297' }}>been.iruda@gmail.com</span>
        </Info>
        <Marquee arrow={'right'} />
      </Footer>

      {isCurrentSection === 'intro' && <ArrowAnimation />}

      <div className="bottom-effect" />
    </Layout>
  );
};

export default FrameLayout;

/** 전체 레이아웃 */
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100vw;
  height: 100vh;

  .bottom-effect {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;

/** 헤더 */
const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

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

const MenuItem = styled.li<{ $isActive: boolean }>`
  ${media.tablet} {
    display: none;
  }
  font-family: ${({ $isActive }) =>
    $isActive ? 'RockSalt, sans-serif' : 'inherit'};

  cursor: pointer;
`;

/** 컨텐츠내부(children) */
const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
`;

/** 푸터 */
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 25px;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 13px;
  font-weight: medium;
`;
