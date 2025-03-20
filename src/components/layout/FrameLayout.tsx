/* 프레임 레이아웃 */

/**
 * [TODO]
 * - stylus intro에선 없고, musicMe에서 나타나는 애니메이션 효과 적용(자연스러운모션 적용)
 */

import { styled } from 'styled-components';
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';

import { media } from '@/styles/mediaQuery';
import { BurgerMenuSVG } from '../../../public/icons/SVG';
import Marquee from './Marquee';
import MusicBar from '@/components/layout/MusicBar';
import ThemeButton from './ThemeButton';
import ArrowAnimation from '../modules/ArrowAnimation';
import CurrentMusic from './CurrentMusic';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FrameLayout = ({ children }: { children: ReactNode }) => {
  const [currentSection, setCurrentSection] = useState<string>('intro');
  const mainContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lpCover = document.querySelector('.lp-cover');
    const mainContainer = mainContentRef.current;
    if (!mainContainer) return;

    // 초기 상태 설정 (애니메이션 적용 전에)
    gsap.set(lpCover, { opacity: 1, display: 'block' });

    const sections = gsap.utils.toArray<HTMLElement>('.section');
    if (!lpCover || sections.length === 0) return;
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'top 50%',
            scrub: 1,
            toggleActions: 'play none none reverse', // ✅ 스크롤을 올리면 다시 적용되도록 설정
          },
        }
      );

      gsap.fromTo(
        section,
        { opacity: 0.3, y: 100 }, // 시작 상태: 약간 아래 위치 & 흐린 상태
        {
          opacity: 1,
          y: 0, // 부드럽게 원래 위치로 올라옴
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            scroller: mainContainer, // 스크롤 컨테이너 지정
            start: 'top 75%', // 뷰포트의 75% 지점에서 애니메이션 시작
            end: 'top 25%', // 25% 위치에서 종료
            scrub: 1, // ✅ 스크롤에 따라 부드럽게 이동
          },
        }
      );

      ScrollTrigger.create({
        trigger: section,
        scroller: mainContainer, // 스크롤 컨테이너 지정
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => {
          const sectionId = section.getAttribute('id');
          setCurrentSection(sectionId || '');
        },
        onEnterBack: () => {
          const sectionId = section.getAttribute('id');
          setCurrentSection(sectionId || '');
        },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  /** 특정 섹션으로 이동하는 함수 */
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const mainContainer = mainContentRef.current;

    if (section && mainContainer) {
      gsap.to(mainContainer, {
        duration: 1,
        scrollTo: { y: section.offsetTop, autoKill: false },
      });
    }
  };

  return (
    <Layout>
      {/* 1. 헤더(Header) */}
      <Header>
        <Marquee $arrow={'left'} />
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
            <MenuItem
              $active={currentSection === 'intro'}
              onClick={() => scrollToSection('intro')}
            >
              INTRO
            </MenuItem>
            <MenuItem
              $active={currentSection === 'musicMe'}
              onClick={() => scrollToSection('musicMe')}
            >
              MUSIC ME
            </MenuItem>
            <MenuItem
              $active={currentSection === 'projects'}
              onClick={() => scrollToSection('projects')}
            >
              PROJECTS
            </MenuItem>
            <MenuItem
              $active={currentSection === 'skills'}
              onClick={() => scrollToSection('skills')}
            >
              SKILLS
            </MenuItem>
            <MenuItem
              $active={currentSection === 'contact'}
              onClick={() => scrollToSection('contact')}
            >
              CONTACT
            </MenuItem>
            <div className="burger-menu">
              <BurgerMenuSVG />
            </div>
          </Menu>
        </Nav>
      </Header>

      {/* 2. 컨텐츠(children) */}
      <MainContent ref={mainContentRef}>{children}</MainContent>

      {/* 3. LP레코드고정 */}
      <LpRecode />
      {currentSection !== 'intro' && <LpStylus />}

      {/* 4. 현재뮤직표시 */}
      <CurrentMusic />

      {/* 5. 푸터(Footer) */}
      <Footer>
        <Info className="global-layout">
          <span style={{ color: '#9A9A9A' }}>
            © 2024. KIM HANBEEN All Rights Reserved
          </span>
          <span style={{ color: '#FF6297' }}>been.iruda@gmail.com</span>
        </Info>
        <Marquee $arrow={'right'} />
      </Footer>

      {currentSection === 'intro' && <ArrowAnimation />}

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
  position: relative;

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

/** 컨텐츠내부(children) */
const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
  z-index: 1004;
`;

/** 푸터 */
const Footer = styled.div`
  display: flex;
  flex-direction: column;

  height: 77px;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex: 1;

  font-size: 13px;
  font-weight: medium;
`;

const LpRecode = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50.3%, -50%);
  margin-top: 25px;

  width: 100%;
  height: calc(100% - 77px - 77px - 50px); //상위paddingTop만큼

  background-image: url('/images/lp-recode.png');
  background-size: contain;

  pointer-events: none;
`;

const LpStylus = styled.div`
  position: fixed;
  bottom: -30px;
  left: 60%;

  width: 360px;
  aspect-ratio: 363/418;

  background-image: url('/images/lp-stylus.png');
  background-size: contain;
`;
