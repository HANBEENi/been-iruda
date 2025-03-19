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

const MusicBar = () => {
  const [isMusicBarOpen, setIsMusicBarHidden] = useState<boolean>(false);

  return (
    <Layout $isMusicBarOpen={isMusicBarOpen}>
      <MusicBarSVG />
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
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 676px;
  height: fit-content;

  transition: transform 0.8s ease-in-out, opacity 0.6s ease-in-out;
  transform-origin: top; /* ✅ 아래에서 위로 줄어들도록 설정 */
  /* transform: ${({ $isMusicBarOpen }) =>
    $isMusicBarOpen ? 'scaleY(0)' : 'scaleY(1)'}; */

  svg {
    width: 100%;
    height: 55px;
  }
`;

const MusicControls = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  gap: 30px;
  padding-bottom: 5px;

  button {
    height: 14px;
    cursor: pointer;
  }

  .stop-play {
    height: 44px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
