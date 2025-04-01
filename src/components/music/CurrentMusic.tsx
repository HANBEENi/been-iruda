/* 좌측하단 현재노래 표시(+가사on/off) */
/**
 * [TODO]
 * 모바일에서는 보이지 않게 할 것
 * Layout left값 -> 메인레이아웃padding값 반응형에 맞춰서 적용해야함
 * 가사보기 디자인 작업 필요(항상 표시해야하는지도 고민 필요)
 */
import { useState } from 'react';
import { styled } from 'styled-components';

const CurrentMusic = () => {
  const [isLyricsOn, setIsLyricsOn] = useState<boolean>(false);
  return (
    <Layout>
      {!isLyricsOn && (
        <>
          <Cover>
            <div>
              <span>가사보기</span>
            </div>
          </Cover>
          <Title>
            <span>프론트엔드의 길</span>
          </Title>
        </>
      )}
      {isLyricsOn && <Lyrics></Lyrics>}
    </Layout>
  );
};
export default CurrentMusic;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 1006;

  position: absolute;
  bottom: calc(77px);
  left: 70px;

  cursor: pointer;
`;

const Cover = styled.div`
  position: relative;
  padding: 8px;

  aspect-ratio: 833/826;
  /* height: 180px; */
  height: 100px;

  border-radius: 2px;
  border: 3px solid #fff;
  background-image: url('/images/lp-cover-portfolio.png');
  background-size: contain;

  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.25);

  div {
    display: none;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);

    span {
      position: absolute;
      top: -30px;
      color: ${({ theme }) => theme.color};
    }
  }
  &:hover {
    div {
      display: flex;
    }
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const Lyrics = styled.div``;
