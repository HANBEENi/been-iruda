'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { styled } from 'styled-components';

import FrameLayout from '@/components/layout/FrameLayout';
import Intro from '@/components/sections/S1-Intro';
import MusicMe from '@/components/sections/S2-MusicMe';
import Projects from '@/components/sections/S3-Projects';
import Skills from '@/components/sections/S4-Skills';
import Contact from '@/components/sections/S5-Contact';
import { useSection } from '@/context/SectionContext';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const isAnimatingRef = { current: false };

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { setCurrentSection } = useSection();

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const sections = scrollEl?.querySelectorAll('.section') ?? [];
    const TOLERANCE = 10;

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 90%',
        end: 'bottom 10%',
        scroller: scrollEl,
        onEnter: () => {
          const scrollTop = scrollEl?.scrollTop ?? 0;
          const targetTop = (section as HTMLElement).offsetTop;

          // 너무 많이 차이나면 이동
          if (
            Math.abs(scrollTop - targetTop) > TOLERANCE &&
            !isAnimatingRef.current
          ) {
            isAnimatingRef.current = true;
            setCurrentSection(section.id);

            gsap.to(scrollEl, {
              scrollTo: { y: targetTop },
              duration: 1,
              ease: 'power2.out',
              onComplete: () => {
                isAnimatingRef.current = false;
              },
            });
          }
        },
        onEnterBack: () => {
          const scrollTop = scrollEl?.scrollTop ?? 0;
          const targetTop = (section as HTMLElement).offsetTop;

          // 너무 많이 차이나면 이동
          if (
            Math.abs(scrollTop - targetTop) > TOLERANCE &&
            !isAnimatingRef.current
          ) {
            isAnimatingRef.current = true;
            setCurrentSection(section.id);

            gsap.to(scrollEl, {
              scrollTo: { y: targetTop },
              duration: 1,
              ease: 'power2.out',
              onComplete: () => {
                isAnimatingRef.current = false;
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
  }, [setCurrentSection]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    setCurrentSection(id);
    const scrollElement = scrollRef.current;
    if (!target || !scrollElement) return;

    isAnimatingRef.current = true;
    gsap.to(scrollElement, {
      scrollTo: {
        y: target.offsetTop,
        autoKill: false,
      },
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });
  };

  return (
    <>
      <FrameLayout scrollToSection={scrollToSection} />
      <PageLayout id="main-scroll-container" ref={scrollRef}>
        <Section id="intro" className="section">
          <Intro />
        </Section>
        <Section id="musicMe" className="section">
          <MusicMe />
        </Section>
        <Section id="projects" className="section">
          <Projects />
        </Section>
        <Section id="skills" className="section">
          <Skills />
        </Section>
        <Section id="contact" className="section">
          <Contact />
        </Section>
      </PageLayout>
    </>
  );
}

const PageLayout = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 100vh;

  overflow-y: scroll;
  scroll-behavior: smooth;

  background: ${({ theme }) => theme.background};
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
