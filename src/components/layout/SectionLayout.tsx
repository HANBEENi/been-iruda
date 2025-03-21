/* 섹션 공용 레이아웃 */

import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  middleContents: ReactNode;
  rightContents?: ReactNode;
}

const SectionLayout = ({ middleContents, rightContents }: Props) => {
  const paddingTop = 50;

  return (
    <Layout $paddingTop={paddingTop} className="global-layout">
      {/* 1. Left Contents --------------------- */}
      <Wrap id="section-tag-wrap">
        <SectionTag>
          <span>MUSIC ME</span>
          <span className="line" />
        </SectionTag>
      </Wrap>

      {/* 2. Middle Contents ------------------- */}
      <Wrap>{middleContents}</Wrap>

      {/* 3. Right Contents -------------------- */}
      <Wrap>{rightContents}</Wrap>

      <LpRecode />
      <LpStylus />
    </Layout>
  );
};

export default SectionLayout;

const Layout = styled.div<{ $paddingTop: number }>`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-content: center;
  padding-top: ${({ $paddingTop }) => `${$paddingTop}px`};

  width: 100%;
  height: calc(100vh - 77px - 77px);

  #section-tag-wrap {
    display: flex;
    align-items: center;

    height: 100%;
  }
`;

const Wrap = styled.div`
  display: flex;
  z-index: 2;

  width: 100%;
  height: 100%;
  min-height: 0; //내부 내용이 넘쳐도 부모의 높이를 초과하지 않도록 함
`;

const SectionTag = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  .line {
    width: 298px;
    height: 0;
    border: 1px solid ${({ theme }) => theme.color};
  }
`;

const LpRecode = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50.2%, -50%);
  margin-top: 25px;
  z-index: 1;

  width: 100%;
  height: calc(100% - 77px - 77px - 55px); //상위paddingTop만큼

  background-image: url('/images/lp-recode.png');
  background-size: contain;

  pointer-events: none;
`;

const LpStylus = styled.div`
  position: fixed;
  bottom: -35px;
  left: 60%;
  z-index: 1;

  width: 360px;
  aspect-ratio: 363/418;

  background-image: url('/images/lp-stylus.png');
  background-size: contain;
`;
