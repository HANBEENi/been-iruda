"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TintEffectPage: React.FC = () => {
  const [hue, setHue] = useState(0); // 색조 값을 관리

  // 색조를 일정 시간마다 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prevHue) => (prevHue + 30) % 360); // 색조 값 증가 및 360도 순환
    }, 500); // 0.5초마다 색조 변경

    return () => clearInterval(interval); // 클린업 함수
  }, []);

  return (
    <Wrapper>
      <Heading>Tint Animation Example</Heading>
      <TintImage
        src="images/backgroundColor/colorDark.png" // 이미지 경로를 실제 경로로 변경하세요
        alt="Tint Effect"
        hue={hue}
      />
    </Wrapper>
  );
};

export default TintEffectPage;

const TintImage = styled.img<{ hue: number }>`
  width: 100%;
  height: auto;
  filter: hue-rotate(${(props) => props.hue}deg); /* 색조 회전 필터 */
  transition: filter 0.5s ease-in-out; /* 부드러운 전환 효과 */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #111; /* 다크 배경 */
  color: #fff;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;
