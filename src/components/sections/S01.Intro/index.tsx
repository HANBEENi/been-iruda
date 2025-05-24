import { LpCoverLayout } from '@/components/layout/LpCoverLayout';
import { colorGuide } from '@/styles/colorGuide';
import { styled } from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ContentsLayout } from '@/components/layout/ContentsLayout';
import gsap from 'gsap';
import LpCoverImage from '/public/images/cover-01.png';
import { media } from '@/styles/mediaQuery';

gsap.registerPlugin(ScrollTrigger);

export const S01_Intro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
