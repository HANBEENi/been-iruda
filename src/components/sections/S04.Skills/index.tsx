import { ContentsLayout } from '@/components/layout/ContentsLayout';
import { LpCoverLayout } from '@/components/layout/LpCoverLayout';
import LpCover_Beeniruda from '/public/images/cover-01.png';
import { styled } from 'styled-components';
import { colorGuide } from '@/styles/colorGuide';
import { SkillForm } from '@/components/common/SkillForm';
import { media } from '@/styles/mediaQuery';

export const S04_Skills = () => {
  return (
    <ContentsLayout>
      <LpCoverLayout backgroundImageUrl={LpCover_Beeniruda.src}>
        <Layout>
          <Title>SKILLS SET</Title>
          <Contents>
            <Wrap>
              <TrackTitle>
                <span className="track-num">TRACK01</span>
                <span className="track-name">DEVELOPMENT</span>
              </TrackTitle>
              <SkillList>
                {SkillForm.Nextjs}
                {SkillForm.Nextjs}
                {SkillForm.Nextjs}
              </SkillList>
            </Wrap>

            <Wrap>
              <TrackTitle>
                <span className="track-num">TRACK02</span>
                <span className="track-name">DEVELOPMENT</span>
              </TrackTitle>
              <SkillList>
                {SkillForm.Nextjs}
                {SkillForm.Nextjs}
                {SkillForm.Nextjs}
                {SkillForm.Nextjs}
                {SkillForm.Nextjs}
              </SkillList>
            </Wrap>

            <Wrap>
              <TrackTitle>
                <span className="track-num">TRACK03</span>
                <span className="track-name">DEVELOPMENT</span>
              </TrackTitle>
              <SkillList>
                {SkillForm.Nextjs}
                {SkillForm.Nextjs}
                {SkillForm.Nextjs}
              </SkillList>
            </Wrap>

            <Wrap>
              <TrackTitle>
                <span className="track-num">TRACK04</span>
                <span className="track-name">DEVELOPMENT</span>
              </TrackTitle>
              <SkillList>
                {SkillForm.Nextjs}
                {SkillForm.Nextjs}
                {SkillForm.Nextjs}
              </SkillList>
            </Wrap>
          </Contents>
        </Layout>
      </LpCoverLayout>
    </ContentsLayout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;

  font-size: 16px;

  ${media.mobile} {
    gap: 18px;
    font-size: 12px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  padding: 0 10px;

  height: 30px;

  background: ${colorGuide.C03_pink_700};

  color: ${colorGuide.C02_black};

  ${media.mobile} {
    height: 25px;
  }
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-auto-flow: column;
  gap: 30px;
  width: 100%;
  height: 100%;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: 100%;

  ${media.mobile} {
    gap: 15px;
  }
`;

const TrackTitle = styled.div`
  display: flex;
  justify-content: space-between;

  .track-num {
    font-family: 'RockSalt';
    color: ${colorGuide.C03_pink_700};
  }

  .track-name {
    color: ${colorGuide.C04_pink_100};
  }
`;

const SkillList = styled.div`
  display: grid;
  grid-auto-flow: column; // 열 기준 채움
  grid-template-rows: repeat(4, auto); // 한 열에 4개까지만 채움
  gap: 10px;
`;
