// src/components/sections/S01.Intro.tsx

import { LpCoverLayout } from '@/components/layout/LpCoverLayout';
import { colorGuide, layoutGuide } from '@/styles/colorGuide';
import { styled } from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContentsLayout } from '@/components/layout/ContentsLayout';
import gsap from 'gsap';
import LpCoverImage from '/public/images/cover-01.png';
import { media } from '@/styles/mediaQuery';
import { useEffect, useRef } from 'react';

export const S01_Intro = () => {
  return (
    <ContentsLayout>
      <LpCoverLayout isHome backgroundImageUrl={LpCoverImage.src}>
        <Contents>
          <Title className="title">
            <span>BEENIRUDA</span>
            <span>KIM HANBEEN</span>
            <img src="images/arrow.png" />
          </Title>
          <Image className="image" src={'images/cover-content.png'} />
        </Contents>
      </LpCoverLayout>
      <WhatIsBeenIruda />
    </ContentsLayout>
  );
};

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  position: relative;

  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  position: absolute;
  top: 13%;
  left: 50%;
  transform: translate(-50%, 0%);
  height: 100%;

  font-family: 'RockSalt';
  :nth-child(1) {
    font-size: 30px;
    color: ${colorGuide.C04_pink_100};
    ${media.mobile} {
      font-size: 25px;
    }
  }
  :nth-child(2) {
    font-size: 20px;
    color: ${colorGuide.C01_white};
    ${media.mobile} {
      font-size: 15px;
    }
  }

  & > img {
    position: absolute;
    top: 10%;
    left: 7%;
    transform: translate(-50%, 0%);

    width: 38px;

    ${media.mobile} {
      top: 12%;
      width: 30px;
    }
  }

  ${media.mobile} {
    gap: 20px;
  }
`;

const Image = styled.img`
  height: 90%;
`;

const WhatIsBeenIruda = styled.div`
  position: fixed;
  bottom: ${layoutGuide.padding.pc};
  right: ${layoutGuide.padding.pc};

  ${media.tablet} {
    right: ${layoutGuide.padding.tablet};
  }

  ${media.mobile} {
    right: ${layoutGuide.padding.mobile};

    width: 30%;
  }

  height: 200px;
  aspect-ratio: 334/328;

  background-image: url(${({ theme }) => theme.images.whatIsBeeniruda});
  background-size: contain;

  cursor: pointer;
`;
