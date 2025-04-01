'use client';

import { media } from '@/styles/mediaQuery';
/* 앨범 슬라이더 - PROJECTS,SKILLS 섹션에서 사용 */

/*
 * TODO:
 * - 슬라이더 스크롤 멈추면서 슬라이드가 가운데 자동으로 오도록 재정렬 이동
 */

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const albumCovers = [
  '/images/lp-cover-effectsspace.png',
  '/images/lp-cover-photeto.png',
  '/images/lp-cover-intermatch.png',
  '/images/lp-cover-portfolio.png',
  '/images/lp-cover-tinichat.png',
]; // 앨범 이미지 배열

const VerticalScrollAlbums = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null); // ✅ 중앙 기준점 ref
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current || !centerRef.current) return;

      const centerY = centerRef.current.getBoundingClientRect().top;

      const items = containerRef.current.querySelectorAll('.album');

      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - itemCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', onScroll);
    onScroll(); // 초기 실행

    return () => container?.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Wrapper>
      <CenterGuide ref={centerRef} />
      <ScrollWrapper ref={containerRef}>
        {albumCovers.map((src, index) => (
          <AlbumItem
            key={index}
            className="album"
            $active={index === centerIndex}
          >
            <img src={src} alt={`album-${index}`} />
          </AlbumItem>
        ))}
      </ScrollWrapper>
    </Wrapper>
  );
};

export default VerticalScrollAlbums;

const Wrapper = styled.div`
  position: absolute;
  z-index: 1004;
  right: 70px;

  width: fit-content;
  height: 100%;

  ${media.tablet} {
    display: none;
  }
  ${media.mobile} {
    display: none;
  }
`;

const ScrollWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding: 200px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenterGuide = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 0;
  border-top: 2px dashed #000000;
  pointer-events: none;
`;

const AlbumItem = styled.div<{ $active: boolean }>`
  height: 150px;
  aspect-ratio: 51/50;
  transition: transform 0.4s ease, opacity 0.4s ease;

  transform: scale(${({ $active }) => ($active ? 1 : 0.75)});
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  z-index: ${({ $active }) => ($active ? 10 : 1)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
`;
