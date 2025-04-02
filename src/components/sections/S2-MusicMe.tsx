/* MusicMe 섹션 */

/**
 * [TODO]
 * - 음악플레이 썸네일 피그마 디자인 반영(슬라이드넘기기 모션)
 * - 음악 재생될 때 레코드 회전시키기
 * - 셔플, 반복 버튼 동작 적용하기
 */

import { styled } from 'styled-components';
import SectionLayout from '../layout/SectionLayout';
import { MusicControls } from '../music/MusicBar';
import MusicLyricsView from '../music/MusicLyricsView';
import { musicList } from '@/data/musicData';
import { useMusic } from '@/context/MusicContext';
import MusicTimeLine from '../music/MusicTimeLine';
import NoticeBanner from '../ui/NoticeBanner';
import { noticeList } from '@/data/noticeData';
import { media } from '@/styles/mediaQuery';

const MusicMe = () => {
  const { currentTrackIndex } = useMusic();
  const currentTrack = musicList[currentTrackIndex];

  return (
    <SectionLayout
      middleContents={
        <MusicPlayWrap>
          <div className="title-wrap">
            <Thumbnail $thumbnail={currentTrack.thumbnail}>
              <div className="thumbnail" />
            </Thumbnail>
            <Title>
              <span>{currentTrack.title}</span>
              <span>Made With Suno</span>
            </Title>
          </div>

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
      }
    >
      <Wrap id="alert-list-wrap">
        <AlertListWrap>
          {noticeList.map((i, idx) => (
            <NoticeBanner key={idx} title={i.title} descript={i.descript} />
          ))}
        </AlertListWrap>
      </Wrap>
      <Background></Background>
    </SectionLayout>
  );
};
export default MusicMe;

/* 그리드랩 ------------------------------------------------------- */
const Wrap = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  &#alert-list-wrap {
    display: flex;
    justify-content: end;
    position: absolute;
    top: 20px;
    right: 70px;

    max-width: 450px;
    z-index: 1004;

    ${media.mobile} {
      right: 50%;
      transform: translate(50%, 0);
    }
  }
`;

/* 뮤직플레이 ------------------------------------------------------ */
const MusicPlayWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 30px 0;

  width: 350px;
  height: 100%;

  background: rgba(0, 0, 0, 0.37);
  border-radius: 20px;

  & .title-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const Thumbnail = styled.div<{ $thumbnail: string }>`
  display: flex;
  padding: 5px;

  border-radius: 2px;
  border: 1.5px solid #fff;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.25);

  width: fit-content;

  .thumbnail {
    aspect-ratio: 833/826;
    height: 110px;

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
    font-size: 16px;
    font-weight: bold;
  }
  :nth-child(2) {
    font-size: 12px;
    font-weight: light;
  }
`;
const MusicControlsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  & .music-controls {
    height: 57px;
  }
`;
const Lyrics = styled.div`
  display: flex;
  overflow: hidden;
`;

/* 알림목록 ------------------------------------------------------- */
const AlertListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
`;

const Background = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1003;

  width: 100vw;
  height: 100vh;

  background: #ffffffe3;

  ${media.tablet} {
    display: flex;
  }
  ${media.mobile} {
    display: flex;
  }
`;
