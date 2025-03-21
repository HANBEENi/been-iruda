/*  */

import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useMusic } from '@/context/MusicContext';

const MusicTimeLine = () => {
  const { audioRef } = useMusic();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // 시간 포맷 함수 (초 -> MM:SS)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // 슬라이더 드래그 시 현재 재생 위치 변경
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
      setProgress(Number(e.target.value));
    }
  };

  // 오디오 재생 진행률 업데이트
  useEffect(() => {
    if (!audioRef.current) return;

    const updateProgress = () => {
      setProgress(audioRef.current?.currentTime || 0);
      setDuration(audioRef.current?.duration || 0);
      requestAnimationFrame(updateProgress);
    };

    requestAnimationFrame(updateProgress);
  }, [audioRef]);

  return (
    <Layout>
      <TimeLine
        type="range"
        min="0"
        max={duration}
        value={progress}
        onChange={handleSeek}
      />
      <Time>
        <span>{formatTime(progress)}</span>
        <span>{formatTime(duration)}</span>
      </Time>
    </Layout>
  );
};

export default MusicTimeLine;

/** 스타일 */
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;

  span {
    font-size: 10px;
    color: #aaa;
  }
`;

const TimeLine = styled.input`
  width: 100%;
  appearance: none;

  height: 1px;

  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;

  outline: none;

  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;
