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

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { setCurrentSection } = useSection();

  useEffect(() => {
    const sections = scrollRef.current?.querySelectorAll('.section') ?? [];

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scroller: scrollRef.current,
        onEnter: () => setCurrentSection(section.id),
        onEnterBack: () => setCurrentSection(section.id),
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [setCurrentSection]);

  return (
    <>
      <FrameLayout />
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
