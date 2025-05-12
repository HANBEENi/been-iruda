'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { media } from '@/styles/mediaQuery';

interface Props {
  albumCovers: string[];
  currentIndex: number;
  onClick: (index: number) => void;
}

const Slide = ({ albumCovers, currentIndex, onClick }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

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
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', onScroll);
    onScroll();

    return () => container?.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Wrapper>
      <CenterGuide ref={centerRef} />
      <ScrollWrapper ref={containerRef}>
        {albumCovers?.map((src, index) => (
          <AlbumItem
            key={index}
            className="album"
            $active={index === currentIndex}
            onClick={() => onClick(index)}
          >
            <img src={src} alt={`album-${index}`} />
          </AlbumItem>
        ))}
      </ScrollWrapper>
    </Wrapper>
  );
};

export default Slide;

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
  aspect-ratio: 51 / 50;
  transition: transform 0.4s ease, opacity 0.4s ease;
  transform: scale(${({ $active }) => ($active ? 1 : 0.75)});
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  z-index: ${({ $active }) => ($active ? 10 : 1)};
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
`;
