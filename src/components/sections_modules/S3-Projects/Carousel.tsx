"use client";

/**
 * 아이폰 알람 시간 설정 UI 스타일 구현
 */

import React, { useState, useRef, useEffect, ReactNode } from "react";
import styled from "styled-components";

const Carousel: React.FC<{
  components: ReactNode[];
}> = ({ components }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: WheelEvent) => {
    const { deltaY } = event;

    // 이벤트 전파 차단 (내부 슬라이드 이동)
    event.preventDefault();
    event.stopPropagation(); // 상위로 이벤트 전파를 막음

    if (deltaY > 0) {
      // 아래로 스크롤: 다음 항목
      setActiveIndex((prevIndex) =>
        prevIndex < components.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else {
      // 위로 스크롤: 이전 항목
      setActiveIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  const handleNavigation = (index: number) => {
    setActiveIndex(index); // 클릭한 항목으로 이동
  };

  return (
    <Layout ref={containerRef}>
      <Contents>
        {components.map((Component, index) => {
          const offset = index - activeIndex; // 현재 항목과의 상대적 거리
          return (
            <Item key={index} offset={offset} isActive={index === activeIndex}>
              {Component}
            </Item>
          );
        })}
      </Contents>
      <Navigation>
        {components.map((_, index) => (
          <NavButton
            key={index}
            isActive={index === activeIndex}
            onClick={() => handleNavigation(index)}
          >
            {index + 1}
          </NavButton>
        ))}
      </Navigation>
    </Layout>
  );
};

export default Carousel;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 100px; /* 원근 효과 */

  background: #ffb1b1;
`;

const Contents = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  background: #ffffff;
`;

const Item = styled.div<{ offset: number; isActive: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    ${({ offset }) => `
      scale(${1 - Math.abs(offset) * 0.3}) /* 크기 축소 */
      translateX(${offset * 400}px) /* 좌우 간격 */
      rotateY(${-offset * 10}deg) /* 회전 */
    `};
  opacity: ${({ offset }) =>
    Math.abs(offset) < 5 ? 1 - Math.abs(offset) * 0.1 : 1}; /* 투명도 */
  z-index: ${({ isActive, offset }) =>
    isActive ? 100 : 100 - Math.abs(offset) - 1}; /* 활성화된 슬라이드가 위로 */
  transition: transform 1.5s ease, opacity 1.5s ease;

  color: #fff;
  font-size: 18px;
  text-align: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1539/895;
`;

const Navigation = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  gap: 10px;
  z-index: 1005;
`;

const NavButton = styled.button<{ isActive: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ isActive }) => (isActive ? "#007bff" : "#ddd")};
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;
