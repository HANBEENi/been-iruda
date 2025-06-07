// src/app/page.tsx

'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Header from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { S01_Intro } from '@/components/sections/S01.Intro';
import { S02_MusicMe } from '@/components/sections/S02.MusicMe';
import { S03_Projects } from '@/components/sections/S03.Projects';
import { S04_Skills } from '@/components/sections/S04.Skills';
import { S05_Contact } from '@/components/sections/S05.Contact';
import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HomePage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    const sections = scrollEl.querySelectorAll('.section');
    const TOLERANCE = 10;

    ScrollTrigger.defaults({
      scroller: scrollEl,
    });

    // 스크롤 트리거 생성
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 90%',
        end: 'bottom 10%',
        onEnter: () => {
          const targetTop = (section as HTMLElement).offsetTop;
          if (
            Math.abs(scrollEl.scrollTop - targetTop) > TOLERANCE &&
            !isAnimating.current
          ) {
            isAnimating.current = true;
            gsap.to(scrollEl, {
              scrollTo: { y: targetTop },
              duration: 1.1,
              ease: 'power2.out',
              onComplete: () => {
                isAnimating.current = false;
              },
            });
          }
        },
        onEnterBack: () => {
          const targetTop = (section as HTMLElement).offsetTop;
          if (
            Math.abs(scrollEl.scrollTop - targetTop) > TOLERANCE &&
            !isAnimating.current
          ) {
            isAnimating.current = true;
            gsap.to(scrollEl, {
              scrollTo: { y: targetTop },
              duration: 1.1,
              ease: 'power2.out',
              onComplete: () => {
                isAnimating.current = false;
              },
            });
          }
        },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Layout ref={scrollRef}>
      <Header />
      <Section className="section" id="intro">
        <S01_Intro />
      </Section>
      <Section className="section" id="music">
        <S02_MusicMe />
      </Section>
      <Section className="section" id="projects">
        <S03_Projects />
      </Section>
      <Section className="section" id="skills">
        <S04_Skills />
      </Section>
      <Section className="section" id="contact">
        <S05_Contact />
      </Section>
      <Footer />
    </Layout>
  );
};

export default HomePage;

// 스타일드 컴포넌트
const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: auto;
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
