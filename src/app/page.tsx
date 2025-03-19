'use client';
/* 메인페이지 */
// GSAP ScrollTrigger를 사용하여 한 섹션씩 멈추는 풀스크롤 구현
// 한 화면씩 넘기는 듯한 모션 적용

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Intro from '@/components/sections/S1-Intro';
import MusicMe from '@/components/sections/S2-MusicMe';
import Projects from '@/components/sections/S3-Projects';
import Skills from '@/components/sections/S4-Skills';
import Contact from '@/components/sections/S5-Contact';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
    <div data-scroll-container>
      <Intro />
      <MusicMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
