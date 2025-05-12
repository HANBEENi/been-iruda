'use client';

import styled, { keyframes } from 'styled-components';
import { ArrowDownSVG } from '../../../public/icons/SVG';

const ArrowAnimation = () => {
  return (
    <ArrowContainer>
      <Arrow className="main" />
      <Arrow className="ghost1" />
      <Arrow className="ghost2" />
    </ArrowContainer>
  );
};

export default ArrowAnimation;

/* 🔥 화살표 이동 애니메이션 (잔상이 점진적으로 나타났다 사라지도록 개선) */
const moveDown = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(50px); /* 🔥 이동 거리 증가 */
    opacity: 0;
  }
`;

const ghostMoveDown = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 0; /* ✅ 처음부터 안 보이도록 설정 */
  }
  30% {
    opacity: 0.1; /* ✅ 중간에서 나타나기 시작 */
  }
  80% {
    opacity: 0.05; /* ✅ 점점 사라짐 */
  }
  100% {
    transform: translateY(40px); /* 🔥 이동 거리 증가 */
    opacity: 0;
  }
`;

/* 🔹 화살표 전체 감싸는 컨테이너 */
const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1005;

  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0);

  width: 160px;
  height: 250px;

  svg {
    color: ${({ theme }) => theme.arrowDown.color};
  }
`;

/* 🔹 SVG 화살표 스타일 */
const Arrow = styled(ArrowDownSVG)`
  position: absolute;
  width: 100px;
  aspect-ratio: 161/165;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out; /* 🔥 부드러운 흐름 */

  /* ✅ 기본적으로 모든 화살표를 처음에는 안 보이게 설정 */
  opacity: 0;

  /* ✅ 메인 화살표 */
  &.main {
    animation-name: ${moveDown};
    animation-duration: 2.5s;
    opacity: 1; /* ✅ main은 처음부터 보이게 */
  }

  /* ✅ 잔상 1 (중간에 서서히 나타났다 사라지도록) */
  &.ghost1 {
    animation-name: ${ghostMoveDown};
    animation-duration: 2.5s;
    animation-delay: 0.4s; /* 🔥 더 늦게 시작 */
  }

  /* ✅ 잔상 2 (가장 늦게 나타남) */
  &.ghost2 {
    animation-name: ${ghostMoveDown};
    animation-duration: 2.5s;
    animation-delay: 0.8s; /* 🔥 가장 늦게 시작 */
  }
`;
