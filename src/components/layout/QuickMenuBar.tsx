"use client";

import { media } from "@/styles/mediaQuery";
import { useRef, useState } from "react";
import { keyframes, styled } from "styled-components";

const QuickMenuBar = () => {
  const [hearts, setHearts] = useState<number[]>([]);
  const [clover, setClover] = useState<number[]>([]);

  // 하트 생성 함수
  const handleHeartAnimation = () => {
    const newHeartId = Date.now();
    setHearts((prev) => [...prev, newHeartId]);

    // 2초 후 하트 제거
    setTimeout(() => {
      setHearts((prev) => prev.filter((id) => id !== newHeartId));
    }, 2000);
  };
  // 네잎클로버 생성 함수
  const handleCloverAnimation = () => {
    const newCloverId = Date.now();
    setClover((prev) => [...prev, newCloverId]);

    // 2초 후 네잎클로버 제거
    setTimeout(() => {
      setClover((prev) => prev.filter((id) => id !== newCloverId));
    }, 2000);
  };

  return (
    <Layout>
      <QuickMenu>
        <Title className="title">
          <span>다크모드</span>
        </Title>
        <Icon>
          <div
            style={{
              backgroundImage: "url(images/I04_QuickMenubar/M01_darkmode.png)",
            }}
          />
        </Icon>
      </QuickMenu>
      <QuickMenu onClick={handleCloverAnimation}>
        <Title className="title">
          <span style={{ color: "#00bf30" }}>행운의 가챠 뽑기</span>
        </Title>
        <Icon>
          <div
            style={{
              backgroundImage: "url(images/I04_QuickMenubar/M02_gachya.png)",
            }}
          />
        </Icon>
        {/* 네잎클로버 애니메이션 렌더링 */}
        {clover.map((id) => (
          <Imogi
            key={id}
            style={{
              left: "50%", // 버튼의 중앙
              top: "-20px", // 버튼 바로 위
              backgroundImage: "url(images/I04_QuickMenubar/M02_gachya.png)",
            }}
          />
        ))}
      </QuickMenu>
      <QuickMenu>
        <Title className="title">
          <span style={{ color: "#848484" }}>이력서 보기</span>
        </Title>
        <Icon>
          <div
            style={{
              backgroundImage: "url(images/I04_QuickMenubar/M03_resume.png)",
            }}
          />
        </Icon>
      </QuickMenu>
      <QuickMenu>
        <Title className="title">
          <span style={{ color: "#848484" }}>바로가기 모음</span>
        </Title>
        <Icon>
          <div
            style={{
              backgroundImage: "url(images/I04_QuickMenubar/M04_linkset.png)",
            }}
          />
        </Icon>
      </QuickMenu>
      <QuickMenu onClick={handleHeartAnimation}>
        <Title className="title">
          <span style={{ color: "#FF4EA1" }}>응원해요!</span>
        </Title>
        <Icon>
          <div
            style={{
              backgroundImage: "url(images/I04_QuickMenubar/M05_heart.png)",
            }}
          />
        </Icon>
        {/* 하트 애니메이션 렌더링 */}
        {hearts.map((id) => (
          <Imogi
            key={id}
            style={{
              left: "50%", // 버튼의 중앙
              top: "-20px", // 버튼 바로 위
              backgroundImage: "url(images/I04_QuickMenubar/M05_heart.png)",
            }}
          />
        ))}
      </QuickMenu>
    </Layout>
  );
};

export default QuickMenuBar;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding: 12px;
  position: fixed;
  right: 70px;
  top: 50%;
  transform: translate(20%, -50%);
  gap: 20px;
  z-index: 1004;

  width: 70px;
  height: fit-content;

  border-radius: 100px;

  background: #efefef8f;

  ${media.tablet} {
    right: 40px;
    width: 55px;
    gap: 15px;
  }
  ${media.mobile} {
    display: none;

    /* right: 20px;
    width: 55px;
    gap: 15px; */
  }
`;

const QuickMenu = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  width: 100%;
  aspect-ratio: 1/1;

  border-radius: 100px;

  &:hover {
    .title {
      display: flex;
    }
  }

  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 50px;
  overflow: hidden;
  opacity: 0;

  height: 100%;
  width: 0;

  border-radius: 100px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);

  transition: width 0.4s ease, opacity 0.3s ease, transform 0.3s ease;

  span {
    display: inline-block;
    transform: translateX(0px); /* 텍스트 오른쪽에서 시작 */
    opacity: 0;
    transition: transform 0.3s ease 0.1s, opacity 0.3s ease 0.1s;
  }

  ${QuickMenu}:hover & {
    background: #fff;
    opacity: 1; /* hover 시 타이틀 나타남 */
    transform: translateX(-10px); /* 자연스럽게 제자리로 이동 */
    width: fit-content;

    span {
      transform: translateX(0); /* 텍스트 제자리로 이동 */
      opacity: 1; /* 텍스트 투명도 */
    }
  }
`;

const Icon = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  width: 100%;
  aspect-ratio: 1/1;

  background: #fff;
  border-radius: 100px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);

  & > div {
    width: 70%;
    aspect-ratio: 1/1;

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

/* 하트 애니메이션 */
const clickImogiAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(-50px) scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100px) scale(0.8);
    opacity: 0;
  }
`;

const Imogi = styled.div`
  position: absolute;
  left: 50%; /* "응원해요" 버튼의 중앙 기준 */
  top: 0; /* 버튼 바로 위 */
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${clickImogiAnimation} 2s ease-out forwards;
  pointer-events: none;
  transform: translate(-50%, -50%);
`;
