'use client';

import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import MainSection from '@/components/sections/S1-Intro';
import ResumeSection from '@/components/sections/S2-AboutMe';
import SkillsSection from '@/components/sections/S3-Skills';
import ProjectsSection from '@/components/sections/S4-Projects';
import ContactSection from '@/components/sections/S5-Contact';
import Header from '@/components/layout/Header';
import TopButton from '@/components/layout/TopButton';
import Marquee from '@/components/layout/Marquee';
import { media } from '@/styles/mediaQuery';

const sections = ['main', 'resume', 'projects', 'skills', 'contact'];

const MainPage = () => {
  const [activeSection, setActiveSection] = useState<string>('main');
  const isScrolling = useRef(false); // 스크롤 잠금 플래그
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]); // 각 섹션의 ref 저장
  const [isToolbarHidden, setIsToolbarHidden] = useState(false); // ✅ Toolbar 숨김 상태 추가

  const handleScroll = (direction: 'up' | 'down') => {
    if (isScrolling.current) return; // 현재 스크롤 중이면 무시
    const currentIndex = sections.indexOf(activeSection);
    let nextIndex = currentIndex;

    if (direction === 'down' && currentIndex < sections.length - 1) {
      nextIndex = currentIndex + 1;
      setIsToolbarHidden(true);
    } else if (direction === 'up' && currentIndex > 0) {
      nextIndex = currentIndex - 1;
      setIsToolbarHidden(false);
    }

    const targetSection = sectionRefs.current[nextIndex];
    if (targetSection) {
      isScrolling.current = true; // 스크롤 잠금
      targetSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sections[nextIndex]);

      setTimeout(() => {
        isScrolling.current = false; // 애니메이션 끝난 후 잠금 해제
      }, 1500); // 애니메이션 시간 (scrollIntoView와 동일하게 설정)
    }
  };

  const handleWheel = (event: WheelEvent) => {
    const deltaY = event.deltaY;
    if (deltaY > 0) {
      handleScroll('down');
    } else if (deltaY < 0) {
      handleScroll('up');
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeSection]);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      isScrolling.current = true; // 스크롤 잠금
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);

      setTimeout(() => {
        isScrolling.current = false; // 애니메이션 끝난 후 잠금 해제
      }, 1500); // 애니메이션 시간
    }
  };

  return (
    <>
      {/**헤더*/}
      <Header
        onScrollTo={handleScrollTo}
        isToolbarHidden={isToolbarHidden}
        activeSection={activeSection}
      />

      {/**섹션*/}
      <Wrapper>
        {sections.map((id, index) => (
          <Section
            id={id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            key={id}
          >
            {getSectionContent(id, activeSection === id)}
          </Section>
        ))}
      </Wrapper>

      {/**탑버튼*/}
      {activeSection !== 'main' && <TopButton />}

      {/**보더라인*/}
      <BorderLine>
        <Footer>
          <span>© 2024. KIM HANBEEN All Rights Reserved</span>
          <div>
            <span>+82 10-1234-5678</span>
            <span>/</span>
            <span>been.iruda@gmail.com</span>
          </div>
        </Footer>
        <Marquee arrow="right" />
      </BorderLine>
    </>
  );
};

const getSectionContent = (id: string, isActive: boolean) => {
  switch (id) {
    case 'main':
      return <MainSection isActive={isActive} />;
    case 'resume':
      return <ResumeSection isActive={isActive} />;
    case 'projects':
      return <SkillsSection isActive={isActive} />;
    case 'skills':
      return <ProjectsSection isActive={isActive} />;
    case 'contact':
      return <ContactSection isActive={isActive} />;
    default:
      return null;
  }
};

export default MainPage;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden; /* 기본 스크롤 숨기기 */
`;

const Section = styled.div`
  display: flex;
  height: 150vh;
  scroll-snap-align: start; /* 스크롤 시작점 고정 */
  justify-content: center;
`;

const BorderLine = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 25px;

  background: #000;
`;

const Footer = styled.div`
  display: flex;
  position: absolute;
  top: -30px;
  justify-content: space-between;
  padding: 0 70px;
  white-space: nowrap;

  width: 100%;

  font-size: 13px;

  ${media.tablet} {
    padding: 0 40px;
  }

  ${media.mobile} {
    padding: 0 20px;
  }
  span {
    color: #9a9a9a;
  }
  div {
    display: flex;
    gap: 10px;

    span {
      color: #ff6297;
    }

    :nth-child(1),
    :nth-child(3) {
      cursor: pointer;
    }
  }
`;
