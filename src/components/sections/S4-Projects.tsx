"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import ProjectView from "../sections_modules/S3-Projects/ProjectView";
import Carousel from "../sections_modules/S3-Projects/Carousel";

// 슬라이드에 표시될 컴포넌트들
const Slide1 = () => <ProjectView></ProjectView>;
const Slide2 = () => <ProjectView></ProjectView>;
const Slide3 = () => <ProjectView></ProjectView>;

const ProjectsSection = ({ isActive }: { isActive: boolean }) => {
  const laptopRef = useRef<HTMLDivElement | null>(null);
  const [displayStyle, setDisplayStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const adjustDisplay = () => {
      if (laptopRef.current) {
        const rect = laptopRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // 디스플레이 비율 계산
        const displayWidth = (920.14 / 692.04) * height; // 디스플레이의 가로 비율 계산
        const displayHeight = (593.48 / 692.04) * height; // 디스플레이의 세로 비율 계산
        const displayTop = (30 / 692.04) * height; // 디스플레이의 상단 위치 비율
        const displayLeft = (width - displayWidth) / 2 + 3; // 디스플레이가 가운데로 오도록 계산

        setDisplayStyle({
          top: displayTop,
          left: displayLeft,
          width: displayWidth,
          height: displayHeight,
        });
      }
    };

    adjustDisplay(); // 초기 계산
    window.addEventListener("resize", adjustDisplay); // 창 크기 변경 시 재계산

    return () => {
      window.removeEventListener("resize", adjustDisplay);
    };
  }, []);

  return (
    <Layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Contents>
        <Laptop
          ref={laptopRef}
          animate={
            isActive
              ? { scale: 1, opacity: 1 } // 활성화 시 애니메이션
              : { scale: 1.5, opacity: 0.5 } // 비활성화 시 애니메이션
          } // 최종 크기 설정
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <Display
            style={{
              top: `${displayStyle.top}px`,
              left: `${displayStyle.left}px`,
              width: `${displayStyle.width}px`,
              height: `${displayStyle.height}px`,
            }}
          >
            <Carousel
              components={[
                <Slide1 />,
                <Slide2 />,
                <Slide3 />,
                <Slide3 />,
                <Slide3 />,
              ]}
            />
          </Display>
        </Laptop>
      </Contents>
    </Layout>
  );
};

export default ProjectsSection;

const Layout = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: linear-gradient(45deg, #fff 0%, #e2e2e2 100%);
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;

  width: 100%;
  height: 100vh;
`;

const Laptop = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-height: 100%;
  aspect-ratio: 1539/895;

  background-image: url("images/I11_Etc/notebook.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Display = styled.div`
  display: flex;
  position: absolute;
`;

const SLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: #ff8b8b;
`;
