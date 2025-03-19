/* 상하단 마퀴효과 및 헤더, 음악표시 */

import { styled } from 'styled-components';
import { ReactNode, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import Marquee from './Marquee';
import { LogoSVG, MusicBarSVG } from '../../../public/icons/SVG';
import { theme } from '@/styles/themes';
import MusicBar from '@/components/layout/MusicBar';

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
          <Logo>
            <LogoSVG />
          </Logo>
          <MusicBar />
          <Menu>
            {sections.map((i, idx) => (
              <MenuItem
                key={idx}
                $isActive={isCurrentSection === i.sectionName}
              >
                {i.menuName}
              </MenuItem>
            ))}
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

  width: 100%;
  height: 77px;
`;
const Nav = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 100%;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;

  width: 150px;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  white-space: nowrap;
`;

const MenuItem = styled.li<{ $isActive: boolean }>`
  font-family: ${({ $isActive }) =>
    $isActive ? 'RockSalt, sans-serif' : 'inherit'};
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
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 13px;
  font-weight: medium;
`;
