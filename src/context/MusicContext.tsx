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
}

const MusicContext = createContext<MusicContextProps | undefined>(undefined);

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentTrack = musicList[currentTrackIndex];

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % musicList.length);
  };

  const playPrevTrack = () => {
    setCurrentTrackIndex(
      (prev) => (prev - 1 + musicList.length) % musicList.length
    );
  };

  // 음악 종료 시간 체크
  useEffect(() => {
    if (!audioRef.current) return;

    let animationFrameId: number;

    const checkEndTime = (timestamp: number) => {
      if (
        audioRef.current &&
        audioRef.current.currentTime >= currentTrack.endTime
      ) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // 처음으로 되돌리기
        setIsPlaying(false);
      }
      animationFrameId = requestAnimationFrame(checkEndTime);
    };

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(checkEndTime);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, currentTrack.endTime]);

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
