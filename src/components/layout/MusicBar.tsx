/* 상단 뮤직바 (셔플,이전노래,노래재생정지,다음노래,반복) */

/*[TODO: useTheme()오류해결, 뮤직재생버튼 색상 적용] */
/*[TODO: 애니메이션 동작 넣을지 여부에 따른 기능 구현] */

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
        <MusicBarBackground />
      </div>
      <MusicControls>
        <MusicIcon>
          <ShuffleSVG />
        </MusicIcon>
        <MusicIcon>
          <BeforMusicSVG />
        </MusicIcon>
        <MusicIcon className="stop-play">
          <StopPlaySVG />
        </MusicIcon>
        <MusicIcon>
          <AfterMusicSVG />
        </MusicIcon>
        <MusicIcon>
          <RepeatSVG />
        </MusicIcon>
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

  transition: transform 0.8s ease-in-out, opacity 0.6s ease-in-out;
  transform-origin: top; /* ✅ 아래에서 위로 줄어들도록 설정 */

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

/** MusicBar 배경 */
const MusicBarBackground = styled(MusicBarSVG)`
  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) =>
      theme.musicBar.background}; /* ✅ 다크모드 시 흰색 */
    fill: ${({ theme }) => theme.musicBar.iconColor}; /* ✅ 다크모드 시 검정 */
  }
`;

/** 컨트롤 버튼셋 */
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

/** 컨트롤 버튼 */
const MusicIcon = styled.div`
  svg {
    color: ${({ theme }) => theme.musicBar.iconColor};
  }
`;
