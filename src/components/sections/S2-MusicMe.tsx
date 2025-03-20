/* MusicMe 섹션 */

/**
 * [TODO]
 * - 음악플레이 썸네일 피그마 디자인 반영(슬라이드넘기기 모션)
 */

import { styled } from 'styled-components';
import SectionLayout from '../layout/SectionLayout';
import { MusicControls } from '../layout/MusicBar';
import MusicLyricsView from '../layout/MusicLyricsView';
import { musicList } from '@/utils/musicData';
import { useMusic } from '@/context/MusicContext';
import MusicTimeLine from '../layout/MusicTimeLine';

const MusicMe = () => {
  const { currentTrackIndex } = useMusic();
  const currentTrack = musicList[currentTrackIndex];

  return (
    <SectionLayout>
      {/* 1. 섹션 태그 -------------------- */}
      <Wrap id="section-tag-wrap">
        <SectionTagWrap>
          <span>MUSIC ME</span>
          <span className="line" />
        </SectionTagWrap>
      </Wrap>

      {/* 2. 뮤직 플레이 ------------------- */}
      <Wrap id="music-play-wrap">
        <MusicPlayWrap>
          <Thumbnail $thumbnail={currentTrack.thumbnail}>
            <div className="thumbnail" />
          </Thumbnail>
          <Title>
            <span>{currentTrack.title}</span>
            <span>Made With Suno</span>
          </Title>
          <MusicControlsWrap>
            <MusicTimeLine />
            <div className="music-controls">
              <MusicControls />
            </div>
          </MusicControlsWrap>
          <Lyrics>
            <MusicLyricsView />
          </Lyrics>
        </MusicPlayWrap>
      </Wrap>

      {/* 3. 알림 목록 -------------------- */}
      <Wrap id="alert-list-wrap">
        <AlertListWrap></AlertListWrap>
      </Wrap>
    </SectionLayout>
  );
};
export default MusicMe;

/* 그리드랩 ------------------------------------------------------- */
const Wrap = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  border: 1px solid red;

  &#section-tag-wrap {
  }

  &#music-play-wrap {
    display: flex;
    justify-content: center;
  }

  &#alert-list-wrap {
  }
`;

/* 섹션태그 ------------------------------------------------------- */
const SectionTagWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 100%;

  .line {
    width: 298px;
    height: 0;
    border: 1px solid #000;
  }
`;

/* 뮤직플레이 ------------------------------------------------------ */
const MusicPlayWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 30px;
  padding: 30px 0;

  width: 350px;
  height: 100%;

  background: rgba(0, 0, 0, 0.37);
  border-radius: 20px;
`;

const Thumbnail = styled.div<{ $thumbnail: string }>`
  display: flex;
  padding: 5px;

  border-radius: 2px;
  border: 1.5px solid #fff;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.25);

  .thumbnail {
    height: 110px;
    aspect-ratio: 833/826;

    background-image: ${({ $thumbnail }) => `url(${$thumbnail})`};
    background-size: contain;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;

  :nth-child(1) {
    font-size: 18px;
    font-weight: bold;
  }
  :nth-child(2) {
    font-size: 12px;
    font-weight: light;
  }
`;
const MusicControlsWrap = styled.div`
  & .music-controls {
    height: 60px;
  }
`;
const Lyrics = styled.div`
  display: flex;
  overflow: hidden;
`;

/* 알림목록 ------------------------------------------------------- */
const AlertListWrap = styled.div``;
