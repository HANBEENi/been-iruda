// src/components/common/music/MusicBar.tsx

// =======================================
// 헤더 뮤직바 (배경&버튼셋)
//
// - 버튼셋 (셔플,이전노래,노래재생|정지,다음노래,반복)
// =======================================

/**
 * [TODO]
 * - 음악재생|재생정지 버튼 아이콘 설정 + 기능동작
 * - 셔플취소|셔플적용 버튼 아이콘 설정 + 기능동작
 * - 반복취소|반복적용 버튼 아이콘 설정 + 기능동작
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

export const MusicControls = () => {
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
    <ControlLayout>
      <ControlBtn onClick={() => setIsShuffle(!isShuffle)} $active={isShuffle}>
        <ShuffleSVG />
      </ControlBtn>

      <ControlBtn onClick={playPrevTrack}>
        <BackSVG />
      </ControlBtn>

      <ControlBtn className="stop-play" onClick={togglePlayPause}>
        {isPlaying ? <PlaySVG /> : <StopSVG />}
      </ControlBtn>

      <ControlBtn onClick={playNextTrack}>
        <NextSVG />
      </ControlBtn>

      <ControlBtn onClick={cycleRepeatMode} $active={repeatMode === 'none'}>
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
  left: 0;
  top: 25px;

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
      width: 100%;
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
    height: 100%;
    position: absolute;
    padding: 7px 0;
  }
`;

/** MusicBar 배경 */
const MusicBarBackground = styled(MusicBarBackgroundSVG)``;

/* 뮤직컨트롤버튼셋 스타일 ----------------------------------------------------- */
const ControlLayout = styled.div`
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
    height: 100%;

    svg {
      circle {
        fill: ${({ theme }) => theme.marquee.text};
      }
      path {
        fill: ${({ theme }) => theme.marquee.background};
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
const ControlBtn = styled.div<{ $active?: boolean }>`
  svg {
    color: ${({ theme }) => theme.marquee.text};
    opacity: ${({ $active }) => ($active ? 0.5 : 1)};
    transition: opacity 0.2s ease;
  }
  z-index: 1003;

  cursor: pointer;
`;
