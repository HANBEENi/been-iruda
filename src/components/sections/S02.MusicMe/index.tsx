// src/sections/S02.MusicMe/index.tsx

// MusicMe 섹션

// [TODO: MusicControls가 항상 높이의 가운데 위치하도록 퍼블리싱 리팩토링]

import { MusicControls } from '@/components/common/music/MusicBar';
import MusicLyrics from '@/components/common/music/MusicLyrics';
import MusicTimeLine from '@/components/common/music/MusicTimeLine';
import { ContentsLayout } from '@/components/layout/ContentsLayout';
import { styled } from 'styled-components';

export const S02_MusicMe = () => {
  return (
    <ContentsLayout>
      <MusicViewLayout>
        <Thumbnail>
          <img src="/images/thumbnail-01.png" alt="" />
          <img src="/images/thumbnail-02.png" alt="" />
        </Thumbnail>

        <Title>
          <p>단순히 코드가 아닌 가치를 담아</p>
          <p>Made With Suno</p>
        </Title>

        <Controls>
          <MusicTimeLine />
          <MusicControls isNotHeader />
        </Controls>

        <MusicLyrics />
      </MusicViewLayout>
    </ContentsLayout>
  );
};
export const MusicViewLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 30px;

  aspect-ratio: 480/832;
  height: 100%;

  border-radius: 7px;
  background: ${({ theme }) => theme.background.overlay};

  font-family: 'GmarketSans';
`;

const Thumbnail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 20%;
  aspect-ratio: 1/1;

  & > img {
    width: 100%;
    height: 100%;
  }

  :nth-child(1) {
    z-index: 1;
    border: 2px solid ${({ theme }) => theme.text};
  }

  :nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
    z-index: 0;

    width: 90%;
    height: 90%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;

  line-height: 180%;
  color: ${({ theme }) => theme.text};

  :nth-child(1) {
    font-size: 18px;
    font-weight: 700;
  }
  :nth-child(2) {
    font-size: 12px;
    font-weight: lighter;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
