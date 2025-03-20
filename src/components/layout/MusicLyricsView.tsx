import { musicList } from '@/utils/musicData';
import { useState } from 'react';
import { styled } from 'styled-components';

const MusicLyricsView = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const currentTrack = musicList[currentTrackIndex];

  return (
    <Layout>
      {currentTrack.lyrics.map((line, index) =>
        line === '' ? <br key={index} /> : <p key={index}>{line}</p>
      )}
    </Layout>
  );
};

export default MusicLyricsView;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: pre-line;
  line-height: 1.5;
  color: #858585;
`;
