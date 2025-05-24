// src/components/common/music/MusicBar.tsx

// =======================================
// 헤더 뮤직바 (배경&버튼셋)
//
// - 버튼셋 (셔플,이전노래,노래재생|정지,다음노래,반복)
// =======================================

/**
 * [TODO]
 * - 음악 재생 상태에 따라 재생버튼 아이콘 변화시키기(현재 가사 클릭해서 노래 재생되고있을때 재생아이콘 변화없음)
 */

import { styled, useTheme } from 'styled-components';

import { useState } from 'react';
import { media } from '@/styles/mediaQuery';
import { useMusic } from '@/context/MusicContext';
import {
  BackSVG,
  MusicBarBackgroundSVG,
  NextSVG,
  PlaySVG,
  ReapeatOneSVG,
  RepeatSVG,
  ShuffleSVG,
  StopSVG,
} from '../../../../public/icons/MusicBarSVG';

// ---------------------------------------
// [1] 뮤직바(배경이미지 + 컨트롤버튼셋)
// ---------------------------------------

const MusicBar = () => {
  return (
    <Layout>
      {/* 배경이미지 */}
      <div className="background">
        <MusicBarBackground />
      </div>

      {/* 컨트롤버튼셋 */}
      <div className="music-controls">
        <MusicControls />
      </div>
    </Layout>
  );
};

export default MusicBar;

// ---------------------------------------
// [2] 컨트롤 버튼셋 (셔플,이전,재생|정지,다음,반복)
// ---------------------------------------

export const MusicControls = ({
  isNotHeader = false,
}: {
  isNotHeader?: boolean;
}) => {
  const {
    togglePlayPause,
    playNextTrack,
    playPrevTrack,
    isPlaying,
    isShuffle,
    setIsShuffle,
    repeatMode,
    setRepeatMode,
  } = useMusic();

  const theme = useTheme();

  const cycleRepeatMode = () => {
    const next =
      repeatMode === 'none' ? 'one' : repeatMode === 'one' ? 'all' : 'none';
    setRepeatMode(next);
  };

  return (
    <ControlLayout $isNotHeader={isNotHeader}>
      <ControlBtn
        onClick={() => setIsShuffle(!isShuffle)}
        $active={isShuffle}
        $isNotHeader={isNotHeader}
      >
        <ShuffleSVG />
      </ControlBtn>

      <ControlBtn onClick={playPrevTrack} $isNotHeader={isNotHeader}>
        <BackSVG />
      </ControlBtn>

      <ControlBtn
        className="stop-play"
        onClick={togglePlayPause}
        $isNotHeader={isNotHeader}
        style={{ backgroundImage: `url('/images/test123.png')` }}
      >
        {/* <div
          style={{
            borderRadius: '50px',
            width: '40px',
            height: '40px',
            backgroundImage: `url('/images/test123.png')`,
            boxShadow: '4px 4px 10px 0 rgba(0,0,0,0.25)',
          }}
        ></div> */}
        {isPlaying ? <PlaySVG /> : <StopSVG />}
      </ControlBtn>

      <ControlBtn onClick={playNextTrack} $isNotHeader={isNotHeader}>
        <NextSVG />
      </ControlBtn>

      <ControlBtn
        onClick={cycleRepeatMode}
        $active={repeatMode === 'none'}
        $isNotHeader={isNotHeader}
      >
        {repeatMode === 'all' || repeatMode === 'none' ? (
          <RepeatSVG />
        ) : (
          <ReapeatOneSVG color={theme.marquee.background} />
        )}
      </ControlBtn>
    </ControlLayout>
  );
};

/* 뮤직바 스타일 ------------------------------------------------------------ */
const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  position: absolute;
  left: -3%;
  top: 25px;
  top: -2px;

  width: 100%;

  transition: transform 0.8s ease-in-out, opacity 0.6s ease-in-out;
  transform-origin: top; //아래에서 위로 줄어들도록 설정

  ${media.mobile} {
    min-width: 300px;
  }

  .background {
    max-width: 450px;
    height: 100%;

    svg {
      width: 120%;
      height: 100%;
    }

    path {
      fill: ${({ theme }) => theme.marquee.background};
    }

    ${media.mobile} {
      max-width: 360px;
    }
  }
  .music-controls {
    height: 50%;
    position: absolute;
    left: 50%;
    top: 25px;
    transform: translateX(-30%);
    padding: 7px 0;
  }
`;

/** MusicBar 배경 */
const MusicBarBackground = styled(MusicBarBackgroundSVG)``;

/* 뮤직컨트롤버튼셋 스타일 ----------------------------------------------------- */
const ControlLayout = styled.div<{ $isNotHeader: boolean }>`
  display: flex;
  align-items: center;
  gap: 30px;
  padding-bottom: 5px;

  height: 100%;
  max-height: 60px;

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
    height: 100%;

    svg {
      circle {
        fill: ${({ theme, $isNotHeader }) =>
          !$isNotHeader ? theme.marquee.text : theme.text};
      }
      path {
        fill: ${({ theme, $isNotHeader }) =>
          !$isNotHeader ? theme.marquee.background : theme.background.primary};
      }
    }

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
const ControlBtn = styled.div<{ $active?: boolean; $isNotHeader: boolean }>`
  svg {
    color: ${({ theme, $isNotHeader }) =>
      !$isNotHeader ? theme.marquee.text : theme.text};
    opacity: ${({ $active }) => ($active ? 0.5 : 1)};
    transition: opacity 0.2s ease;
  }
  z-index: 1003;

  cursor: pointer;
`;
