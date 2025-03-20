'use client';
/* 메인페이지 */
// GSAP ScrollTrigger를 사용하여 한 섹션씩 멈추는 풀스크롤 구현
// 한 화면씩 넘기는 듯한 모션 적용

import Intro from '@/components/sections/S1-Intro';
import MusicMe from '@/components/sections/S2-MusicMe';
import Projects from '@/components/sections/S3-Projects';
import Skills from '@/components/sections/S4-Skills';
import Contact from '@/components/sections/S5-Contact';
import FrameLayout from '@/components/layout/FrameLayout';
import { styled } from 'styled-components';

export default function Home() {
  return (
    <Layout>
      <FrameLayout>
        <div id="intro" className="section">
          <Intro />
        </div>
        <div id="musicMe" className="section">
          <MusicMe />
        </div>
        <div id="projects" className="section">
          <Projects />
        </div>
        <div id="skills" className="section">
          <Skills />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>
      </FrameLayout>
    </Layout>
  );
}

const Layout = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background: ${({ theme }) => theme.background};
  transition: background 0.3s ease-in-out;
`;
