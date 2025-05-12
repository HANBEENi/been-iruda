/* 상단 뮤직바 (셔플,이전노래,노래재생정지,다음노래,반복) */

/*[TODO] 
- 애니메이션 동작 넣을지 여부에 따른 기능 구현
- useTheme()오류해결, 뮤직재생버튼 색상 적용
- 재생 아이콘 SVG 추가 필요
*/

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
import { useMusic } from '@/context/MusicContext';

/* 뮤직바(배경+버튼셋) ------------------------------------------------------- */
const MusicBar = () => {
  const [isMusicBarOpen, setIsMusicBarHidden] = useState<boolean>(false);

  return (
    <Layout $isMusicBarOpen={isMusicBarOpen}>
      <div className="background">
        <MusicBarBackground />
      </div>
      <div className="music-controls">
        <MusicControls />
      </div>
    </Layout>
  );
};

export default MusicBar;

/* 뮤직컨트롤버튼셋 ---------------------------------------------------------- */

export const MusicControls = () => {
  const { togglePlayPause, playNextTrack, playPrevTrack, isPlaying } =
    useMusic();

  const [repeat, setRepeat] = useState(false); //반복재생여부
  const [shuffle, setShuffle] = useState(false); //셔플여부

  return (
    <MusicControlsLayout>
      <MusicIcon onClick={() => setShuffle(!shuffle)} $active={shuffle}>
        <ShuffleSVG />
      </MusicIcon>
      <MusicIcon onClick={playPrevTrack}>
        <BeforMusicSVG />
      </MusicIcon>
      <MusicIcon className="stop-play" onClick={togglePlayPause}>
        {isPlaying ? <StopPlaySVG /> : <StopPlaySVG />}
      </MusicIcon>
      <MusicIcon onClick={playNextTrack}>
        <AfterMusicSVG />
      </MusicIcon>
      <MusicIcon onClick={() => setRepeat(!repeat)} $active={repeat}>
        <RepeatSVG />
      </MusicIcon>
    </MusicControlsLayout>
  );
};

/* 뮤직바 스타일 ------------------------------------------------------------ */
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
  .music-controls {
    height: 100%;
    position: absolute;
    padding: 7px 0;
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

/* 뮤직컨트롤버튼셋 스타일 ----------------------------------------------------- */
const MusicControlsLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding-bottom: 5px;

  height: 100%;

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
    /* height: 40px; */
    height: 100%;

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
const MusicIcon = styled.div<{ $active?: boolean }>`
  svg {
    color: ${({ theme }) => theme.musicBar.iconColor};
  }
  z-index: 1003;

  cursor: pointer;
`;
