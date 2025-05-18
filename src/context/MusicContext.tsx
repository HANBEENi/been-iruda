// src/context/MusicContext.tsx

// =======================================
// 전역 음악 재생 정보 관리
// =======================================

'use client';

/* 전역 음악 재생 정보 */

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { musicList } from '@/data/musicData';

interface MusicContextProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  currentTrackIndex: number;
  setCurrentTrackIndex: React.Dispatch<React.SetStateAction<number>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  togglePlayPause: () => void;
  playNextTrack: () => void;
  playPrevTrack: () => void;
  isShuffle: boolean;
  setIsShuffle: React.Dispatch<React.SetStateAction<boolean>>;
  repeatMode: 'none' | 'one' | 'all';
  setRepeatMode: React.Dispatch<React.SetStateAction<'none' | 'one' | 'all'>>;
}

const MusicContext = createContext<MusicContextProps | undefined>(undefined);

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const currentTrack = musicList[currentTrackIndex];

  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(true);
  const [repeatMode, setRepeatMode] = useState<'none' | 'one' | 'all'>('all');

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // 셔플 반영
  const getNextIndex = () => {
    if (isShuffle) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * musicList.length);
      } while (randomIndex === currentTrackIndex); // 현재곡과 다르면
      return randomIndex;
    }

    return (currentTrackIndex + 1) % musicList.length;
  };

  // 다음곡 재생
  const playNextTrack = () => {
    const nextIndex = getNextIndex();
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
  };

  // 이전곡 재생
  const playPrevTrack = () => {
    if (isShuffle) {
      const prev = getNextIndex();
      setCurrentTrackIndex(prev);
    } else {
      setCurrentTrackIndex(
        (prev) => (prev - 1 + musicList.length) % musicList.length
      );
    }
    setIsPlaying(true);
  };

  // 트랙 변경 후 자동 재생
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.currentTime = 0; // 시작점 초기화
      audio.play().catch((err) => {
        console.warn('🔈 자동 재생 실패:', err);
      });
    }
  }, [currentTrackIndex]);

  // 음악 종료 시간 체크
  useEffect(() => {
    if (!audioRef.current) return;

    let animationFrameId: number;

    const checkEndTime = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (audio.currentTime >= currentTrack.endTime) {
        switch (repeatMode) {
          case 'one':
            audio.currentTime = 0;
            audio.play();
            break;
          case 'all':
            setCurrentTrackIndex(getNextIndex());
            break;
          case 'none':
          default:
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
            break;
        }
      }

      animationFrameId = requestAnimationFrame(checkEndTime);
    };

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(checkEndTime);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, currentTrack.endTime, repeatMode, isShuffle]);

  return (
    <MusicContext.Provider
      value={{
        audioRef,
        currentTrackIndex,
        setCurrentTrackIndex,
        isPlaying,
        setIsPlaying,
        togglePlayPause,
        playNextTrack,
        playPrevTrack,
        isShuffle,
        setIsShuffle,
        repeatMode,
        setRepeatMode,
      }}
    >
      <audio ref={audioRef} src={musicList[currentTrackIndex].audioUrl} />
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) throw new Error('useMusic must be used within a MusicProvider');
  return context;
};
