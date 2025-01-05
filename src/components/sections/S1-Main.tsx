"use client";

/**
 * [TODO]
 * 반응형 작업 해야함(PC, 태블릿, 모바일)
 *
 * - Slide01에서 화살표+KIM HANBEEN 크기 조절
 * - 반응형 해야할것 살펴보고 작업하기
 */

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import MainSlide01 from "../sections_modules/S1-Main/Slide01";
import MainSlide02 from "../sections_modules/S1-Main/Slide02";

// 배경 이미지 배열
const backgroundImages = [
  "/images/I02_BackgroundColor/color00.png",
  "/images/I02_BackgroundColor/color01.png",
  "/images/I02_BackgroundColor/color03.png",
  "/images/I02_BackgroundColor/color06.png",
  "/images/I02_BackgroundColor/color07.png",
];

// 슬라이드 배열
const slides = [<MainSlide01 key="1" />, <MainSlide02 key="2" />];

const MainSection = ({ isActive }: { isActive: boolean }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  // 배경이미지 슬라이드
  useEffect(() => {
    const preloadImage = (url: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
      });
    };

    const transitionImages = async () => {
      setFadeOut(true); // 현재 이미지를 서서히 사라지게 설정
      await preloadImage(
        backgroundImages[(currentImageIndex + 1) % backgroundImages.length]
      );

      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
        setFadeOut(false); // 새 이미지 페이드인
      }, 1000); // 페이드아웃 완료 후 이미지 교체
    };

    const interval = setInterval(transitionImages, 3000);
    return () => clearInterval(interval); // 클린업
  }, [currentImageIndex]);

  // 메인슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000); // 7초마다 슬라이드 변경
    return () => clearInterval(interval); // 클린업
  }, []);

  return (
    <Layout>
      <BackgroundLayer
        $image={backgroundImages[currentImageIndex]}
        $fadeOut={fadeOut}
      />
      <AnimatePresence initial={false}>
        {slides.map(
          (slide, index) =>
            index === currentSlideIndex && (
              <SlideContainer
                key={index}
                initial={{ x: "100%", opacity: 1 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{
                  x: { type: "tween", duration: 3.5, ease: "easeInOut" },
                  opacity: { duration: 3.5 },
                }}
              >
                {slide}
              </SlideContainer>
            )
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default MainSection;

const Layout = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  overflow: hidden;

  width: 100vw;
  height: 100%;
`;
const BackgroundLayer = styled.div<{ $image: string; $fadeOut: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${(props) => (props.$fadeOut ? 0 : 1)};
  transition: opacity 1.5s ease-in-out;
  z-index: 0;
`;

const SlideContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;
