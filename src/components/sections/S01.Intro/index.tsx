import { LpCoverLayout } from '@/components/layout/LpCoverLayout';
import { colorGuide, layoutGuide } from '@/styles/colorGuide';
import { styled } from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContentsLayout } from '@/components/layout/ContentsLayout';
import gsap from 'gsap';
import LpCoverImage from '/public/images/cover-01.png';
import { media } from '@/styles/mediaQuery';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
// ✅ 애니메이션 정의
const introScrollAnimation = (
  sectionRef: React.RefObject<HTMLElement>,
  contentRef: React.RefObject<HTMLElement>
) => {
  if (!sectionRef.current || !contentRef.current) return;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
      },
    })
    .to(contentRef.current, {
      y: '100vh',
      ease: 'none',
    });
};

export const S01_Intro = () => {
  const sectionRef = useRef<HTMLElement>(null); // ✅ 섹션 참조
  const contentRef = useRef<HTMLDivElement>(null); // ✅ 움직일 앨범 콘텐츠 참조

  useEffect(() => {
    introScrollAnimation(sectionRef, contentRef);
  }, []);

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

// ✅ 섹션 감싸는 요소 (pin 대상)
const Section = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

// ✅ 실제 이동 대상 콘텐츠
const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
`;

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
  position: absolute;
  bottom: ${layoutGuide.padding.pc};
  right: ${layoutGuide.padding.pc};

  ${media.tablet} {
    right: ${layoutGuide.padding.tablet};
  }

  ${media.mobile} {
    right: ${layoutGuide.padding.mobile};

    width: 30%;
  }

  height: 30%;
  aspect-ratio: 334/328;

  background-image: url(${({ theme }) => theme.images.whatIsBeeniruda});
  background-size: contain;

  cursor: pointer;
`;
