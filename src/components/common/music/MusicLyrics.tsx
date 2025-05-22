// src/components/common/music/MusicLyrics.tsx

// 노래 가사 보기

/**
 * [TODO]
 * - (디자인)뷰어 bottom부분 opacity 투명도 좀 더 주기
 */

import { useMusic } from '@/context/MusicContext';
import { musicList } from '@/data/musicData';
import { colorGuide } from '@/styles/colorGuide';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

const MusicLyrics = () => {
  const { currentTrackIndex, audioRef } = useMusic();
  const currentTrack = musicList[currentTrackIndex];
  const [currentTime, setCurrentTime] = useState(
    audioRef.current?.currentTime || 0
  );

  const lastValidLyricIndex = useRef(0); // 마지막 유효한 가사 인덱스 (공백 부분에서 유지)
  const lyricsRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const lyricsContainerRef = useRef<HTMLDivElement | null>(null);

  // 현재 재생 시간에 맞는 가사 찾기(타임스탬프 기준)
  const findCurrentLyricIndex = () => {
    for (let i = currentTrack.lyrics.length - 1; i >= 0; i--) {
      if (currentTime >= currentTrack.lyrics[i].time) {
        return i;
      }
    }
    return 0;
  };

  let currentLyricIndex = findCurrentLyricIndex();

  // 공백 부분에서는 이전 가사 유지
  if (currentTrack.lyrics[currentLyricIndex].text === '') {
    currentLyricIndex = lastValidLyricIndex.current;
  } else {
    lastValidLyricIndex.current = currentLyricIndex;
  }

  // 가사 클릭 시 해당 위치 노래 재생
  const handleLyricClick = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      audioRef.current.play();
    }
  };

  // 현재 재생 위치 지속적인 업데이트 진행(requestAnimationFrame을 사용)
  useEffect(() => {
    let animationFrameId: number;

    const updateLyrics = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
      animationFrameId = requestAnimationFrame(updateLyrics);
    };

    if (audioRef.current) {
      updateLyrics(); // 첫 실행
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [audioRef]);

  // 현재 가사가 보이도록 자동 스크롤
  useEffect(() => {
    if (lyricsRefs.current[currentLyricIndex] && lyricsContainerRef.current) {
      const container = lyricsContainerRef.current;
      const activeLyric = lyricsRefs.current[currentLyricIndex];

      // 현재 가사가 <Lyrics/> 중앙에 위치하도록 설정
      if (activeLyric) {
        const containerHeight = container.clientHeight;
        const lyricTop =
          activeLyric.offsetTop - container.offsetTop - containerHeight / 2;

        container.scrollTo({
          top: lyricTop,
          behavior: 'smooth',
        });
      }
    }
  }, [currentLyricIndex]);

  return (
    <Layout ref={lyricsContainerRef}>
      {currentTrack.lyrics.map((lyric, index) =>
        lyric.text === '' ? (
          <br key={index} />
        ) : (
          <LyricLine
            key={index}
            ref={(el) => {
              if (el) lyricsRefs.current[index] = el;
            }}
            $isActive={index === currentLyricIndex}
            onClick={() => handleLyricClick(lyric.time)} // ✅ 클릭 시 해당 타임으로 이동
          >
            {lyric.text}
          </LyricLine>
        )
      )}
    </Layout>
  );
};

export default MusicLyrics;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: pre-line;
  overflow: scroll;

  overflow: scroll;

  line-height: 1.5;
  color: ${({ theme }) => theme.text};
`;

const LyricLine = styled.p<{ $isActive: boolean }>`
  font-size: 16px;
  line-height: 180%;
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '300')};
  color: ${({ $isActive, theme }) =>
    $isActive ? colorGuide.C03_pink_700 : theme.text};
`;
