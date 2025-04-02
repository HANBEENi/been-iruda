'use client';

import { styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { BurgerMenuSVG, ExitSVG } from '../../../public/icons/SVG';
import ThemeButton from '../ui/ThemeButton';
import Marquee from '../ui/Marquee';
import MusicBar from '../music/MusicBar';
import { media } from '@/styles/mediaQuery';
import { useSection } from '@/context/SectionContext';

gsap.registerPlugin(ScrollToPlugin);

const Header = ({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) => {
  const { currentSection } = useSection();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    console.log('currentSection: ', currentSection);
  }, [currentSection]);

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
          <div className="burger-menu" onClick={() => setIsMenuOpen(true)}>
            <BurgerMenuSVG />
          </div>
        </Menu>
      </Nav>

      {/* 메뉴바 on/off */}
      <MenuBar $open={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
        <MenuContainer $open={isMenuOpen} onClick={(e) => e.stopPropagation()}>
          <div>
            <span>MENU</span>
            <span onClick={() => setIsMenuOpen(false)}>
              <ExitSVG />
            </span>
          </div>
          <ul>
            <li onClick={() => menuClick('intro')}>
              <Icon />
              <span>01. INTRO</span>
            </li>
            <li onClick={() => menuClick('musicMe')}>
              <Icon />
              <span>02. MUSIC ME</span>
            </li>
            <li onClick={() => menuClick('projects')}>
              <Icon />
              <span>03. PROJECTS</span>
            </li>
            <li onClick={() => menuClick('skills')}>
              <Icon />
              <span>04. SKILLS</span>
            </li>
            <li onClick={() => menuClick('contact')}>
              <Icon />
              <span>05. CONTACT</span>
            </li>
          </ul>
          <div className="copyright">
            © 2024. KIM HANBEEN All Rights Reserved
          </div>
        </MenuContainer>
        <BackgroundImage $open={isMenuOpen} />
        <BackgroundImage2 $open={isMenuOpen} />
      </MenuBar>
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
  z-index: 1003;

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
  z-index: 1004;

  /* 반응형: 해상도가 줄어들면 메뉴 간격 조절 */
  ${media.tablet} {
    gap: 10px;
  }

  .burger-menu {
    display: none;
    z-index: 1003;

    width: 30px;
    cursor: pointer;

    ${media.tablet} {
      display: flex;
    }

    svg {
      fill: ${({ theme }) => theme.color};
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

const MenuBar = styled.div<{ $open: boolean }>`
  display: none;
  justify-content: end;
  padding: 20px 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1005;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.8);

  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 0.5s ease;

  ${media.mobile} {
    display: flex;
  }
  ${media.tablet} {
    display: flex;
  }
`;
const MenuContainer = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;

  width: 80%;
  height: 100%;

  background: ${({ theme }) => theme.marquee.color};

  transform: translateX(${({ $open }) => ($open ? '0%' : '100%')});
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: all 1s ease-in-out;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 70px;

    font-weight: 700;

    svg {
      width: 16px;
      height: 16px;
      fill: '#000';
      cursor: pointer;
    }
  }
  .copyright {
    font-size: 13px;
    font-weight: 300;
    color: #9a9a9a;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0;
    position: relative;
    z-index: 1003;

    height: 100%;

    font-size: 20px;
    font-weight: 400;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.4s ease forwards;

      flex: 1;

      span {
        display: flex;
        align-items: center;
        height: 100%;
      }

      &:nth-child(1) {
        animation-delay: 0.2s;
      }
      &:nth-child(2) {
        animation-delay: 0.3s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
      &:nth-child(4) {
        animation-delay: 0.5s;
      }
      &:nth-child(5) {
        animation-delay: 0.6s;
      }

      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      div {
        display: none;
        height: fit-content;
        width: 30px;
        aspect-ratio: 1/1;
        background-image: url('images/menu-hover.png');
        background-size: contain;
      }

      &:hover {
        gap: 20px;
        padding-left: 20px;
        font-size: 22px;
        font-family: 'RockSalt';
        font-weight: bold;
        transition: all 0.3s ease;

        div {
          display: flex;
        }
      }

      cursor: pointer;
    }
  }
`;

const BackgroundImage = styled.div<{ $open: boolean }>`
  display: flex;
  justify-content: end;
  position: absolute;
  top: calc(50% + 25px);
  right: 0;
  transform: translate(0, -50%);
  z-index: 0;

  height: calc(100% - 60px - 18px - 50px);
  aspect-ratio: 305/608;

  transform: ${({ $open }) =>
    $open
      ? 'translateX(0%) translateY(-50%)'
      : 'translateX(100%) translateY(-50%)'};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: transform 1s ease, opacity 1.5s ease;

  background-image: url('/images/menu-background-lp.png');
  background-size: contain;
`;
const BackgroundImage2 = styled.div<{ $open: boolean }>`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 10%;
  z-index: 1;

  width: 230px;
  height: 230px;

  transform: ${({ $open }) => ($open ? 'translateX(0%)' : 'translateX(100%)')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: transform 1s ease, opacity 1.5s ease;

  background-image: url('images/menu-background-lp-pin.png');
  background-size: contain;
`;

const Icon = styled.div``;
