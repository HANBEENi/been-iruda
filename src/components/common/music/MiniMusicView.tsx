import { layoutGuide } from '@/styles/colorGuide';
import { media } from '@/styles/mediaQuery';
import { useState } from 'react';
import { styled } from 'styled-components';
import MusicLyrics from './MusicLyrics';

export const MiniMusicView = () => {
  const [isLyricsView, setIsLyricsView] = useState<boolean>(false);

  return (
    <Layout>
      <Thumbnail onClick={() => setIsLyricsView(!isLyricsView)}>
        {isLyricsView ? <span>가사닫기</span> : <span>가사보기</span>}
      </Thumbnail>
      {isLyricsView && <MusicLyrics isMini />}

      <Title>
        <span>🎵</span>
        <span>단순히 코드가 아닌 가치를 담아</span>
      </Title>
    </Layout>
  );
};

const Layout = styled.div`
  position: absolute;
  left: ${layoutGuide.padding.pc};
  bottom: ${layoutGuide.padding.pc};

  ${media.tablet} {
    left: ${layoutGuide.padding.tablet};
  }

  ${media.mobile} {
    display: none;
    /* left: ${layoutGuide.padding.mobile}; */
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  z-index: 1005;
`;

const Thumbnail = styled.div`
  position: relative;

  width: 120px;
  aspect-ratio: 1/1;
  background-image: url('/images/thumbnail-01.png');
  border: 3px solid ${({ theme }) => theme.text};
  border-radius: 2px;

  cursor: pointer;

  & > span {
    position: absolute;
    top: -25%;
    left: 50%;
    transform: translateX(-50%);

    display: none;
  }
  &:hover {
    span {
      display: flex;
    }
  }
`;

const Title = styled.div`
  display: flex;
  gap: 5px;
  color: ${({ theme }) => theme.text};
`;
