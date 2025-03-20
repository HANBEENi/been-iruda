/* 상단 뮤직바 (셔플,이전노래,노래재생정지,다음노래,반복) */

import { styled } from 'styled-components';
import {
  AfterMusicSVG,
  BeforMusicSVG,
  MusicBarSVG,
  RepeatSVG,
  ShuffleSVG,
  StopPlaySVG,
} from '../../../public/icons/SVG';
import { useState } from 'react';
import { media } from '@/styles/mediaQuery';

const MusicBar = () => {
  const [isMusicBarOpen, setIsMusicBarHidden] = useState<boolean>(false);

  return (
    <Layout $isMusicBarOpen={isMusicBarOpen}>
      <div className="background">
        <MusicBarSVG />
      </div>
      <MusicControls>
        <button>
          <ShuffleSVG />
        </button>
        <button>
          <BeforMusicSVG />
        </button>
        <button className="stop-play">
          <StopPlaySVG />
        </button>
        <button>
          <AfterMusicSVG />
        </button>
        <button>
          <RepeatSVG />
        </button>
      </MusicControls>
    </Layout>
  );
};

export default MusicBar;

const Layout = styled.div<{ $isMusicBarOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  /* min-width: 400px; */
  /* height: fit-content; */

  transition: transform 0.8s ease-in-out, opacity 0.6s ease-in-out;
  transform-origin: top; /* ✅ 아래에서 위로 줄어들도록 설정 */
  /* transform: ${({ $isMusicBarOpen }) =>
    $isMusicBarOpen ? 'scaleY(0)' : 'scaleY(1)'}; */

  ${media.mobile} {
    min-width: 300px;
  }

  .background {
    max-width: 450px;
    height: 100%;

    svg {
      width: 100%;
      height: 100%;
    }

    ${media.tablet} {
      max-width: 400px;
    }
    ${media.mobile} {
      max-width: 300px;
    }
  }
`;

const MusicControls = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  gap: 30px;
  padding-bottom: 5px;
  z-index: 1006;

  ${media.tablet} {
    gap: 25px;
  }
  ${media.mobile} {
    gap: 20px;
  }

  button {
    height: 14px;

    ${media.mobile} {
      height: 12px;
    }
    cursor: pointer;
  }

  .stop-play {
    height: 40px;

    ${media.mobile} {
      height: 30px;
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
