'use client';

import { styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LpCoverLayout from '../layout/LpCoverLayout';
import SectionLayout from '../layout/SectionLayout';
import ProjectsLpContentsLayout from '../ui/ProjectsLpContentsLayout';
import Slide from '../ui/Slide';

gsap.registerPlugin(ScrollTrigger);

const slideData = [
  { lpCover: '/images/lp-cover-effectsspace.png' },
  { lpCover: '/images/lp-cover-intermatch.png' },
  { lpCover: '/images/lp-cover-photeto.png' },
];

const Projects = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const snapToNearest = () => {
    const el = slideRef.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    const containerCenter = el.scrollLeft + el.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(childCenter - containerCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);

    el.scrollTo({
      left: children[closestIndex].offsetLeft,
      behavior: 'smooth',
    });
  };

  const onWheel = (e: React.WheelEvent) => {
    const el = slideRef.current;
    if (!el) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      e.preventDefault();

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        snapToNearest();
      }, 200);
    }
  };

  const disablePageScroll = () => {
    const container = document.querySelector(
      '#main-scroll-container'
    ) as HTMLElement;
    if (container) container.style.overflowY = 'hidden';
  };

  const enablePageScroll = () => {
    const container = document.querySelector(
      '#main-scroll-container'
    ) as HTMLElement;
    if (container) container.style.overflowY = 'scroll';
  };

  const scrollToSlide = (index: number) => {
    const el = slideRef.current;
    if (!el) return;

    const target = el.children[index] as HTMLElement;
    if (target) {
      el.scrollTo({
        left: target.offsetLeft,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;

    const slides = el.querySelectorAll('.slide');

    gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top top',
        end: () => `+=${el.scrollWidth}`,
        scrub: 1,
        snap: {
          snapTo: (progress: number) => {
            const threshold = 0.2;
            const totalSlides = slides.length;
            const index = progress * (totalSlides - 1);
            const rounded = Math.floor(index);
            return (
              (index - rounded > threshold ? rounded + 1 : rounded) /
              (totalSlides - 1)
            );
          },
          duration: 0.5,
          ease: 'power1.inOut',
        },
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <SectionLayout>
      <Slide
        albumCovers={slideData.map((s) => s.lpCover)}
        currentIndex={currentIndex}
        onClick={scrollToSlide}
      />
      <LpSlideWrap
        ref={slideRef}
        onWheel={onWheel}
        onMouseEnter={disablePageScroll}
        onMouseLeave={enablePageScroll}
      >
        {slideData.map((data, idx) => (
          <LpProjectCover
            key={idx}
            backgroundImage={data.lpCover}
            className="slide"
          />
        ))}
      </LpSlideWrap>
    </SectionLayout>
  );
};

export default Projects;

export const LpProjectCover = ({
  backgroundImage,
  className,
}: {
  backgroundImage: string;
  className?: string;
}) => {
  return (
    <LpCoverLayout backgroundImage={backgroundImage} className={className}>
      <ProjectsLpContentsLayout />
    </LpCoverLayout>
  );
};

const LpSlideWrap = styled.div`
  display: flex;
  gap: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 10px));
  z-index: 1003;

  height: 100%;
  aspect-ratio: 838.04/831;

  overflow-x: auto;

  .slide {
    flex: 0 0 auto;
  }
`;
