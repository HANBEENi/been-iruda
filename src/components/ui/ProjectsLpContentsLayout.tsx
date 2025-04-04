/* LP 컨텐츠단 레이아웃 - PROJECTS섹션 */

/**
 * TODO
 * - 폰트 Gmarket Sans TTF 적용
 */

import { styled } from 'styled-components';
import { GitHubSVG } from '../../../public/icons/TechSkillsSVG';
import { TeamSVG } from '../../../public/icons/SVG';
import { media } from '@/styles/mediaQuery';

const ProjectsLpContentsLayout = () => {
  const skills = [
    'Next.js 14',
    'React 18',
    'TypeScript',
    'Three.js',
    'Styled-Components',
  ];

  return (
    <Layout>
      <Wrap>
        {/* TOP ------------------------------------------------ */}
        <Top>
          {/**타이틀세트*/}
          <TitleWrap>
            <div className="title-set">
              <Thumbnail />
              <Title>
                <p>BEEN.IRUDA : 비니루다 | 빈,이루다</p>
                <p>
                  김한빈 프론트엔드 포트폴리오 웹사이트입니다. <br /> 반응형
                  웹으로 제작되었습니다.
                </p>
              </Title>
            </div>
            <div className="period-set">
              <Period>
                <p>개발 기간</p>
                <p>2025.03 (1개월)</p>
              </Period>
            </div>
          </TitleWrap>
          {/**유형및링크*/}
          <Links>
            <div className="link-wrap">
              <TeamSVG />
              <span style={{ color: '#757575' }}>팀 프로젝트</span>
            </div>
            <div className="link-wrap">
              <span>🔗 사이트 바로가기</span>
              <div>
                <GitHubSVG />
              </div>
            </div>
          </Links>
          {/**미리보기*/}
          <Preview />
        </Top>

        {/* MIDDLE --------------------------------------------- */}
        <Middle>
          {/**스킬셋*/}
          <SkillSet>
            {skills.map((i, idx) => (
              <div key={idx}>{i}</div>
            ))}
          </SkillSet>
        </Middle>

        {/* BOTTOM --------------------------------------------- */}
        <Bottom>
          <span># 기획 100%</span>
          <span># 디자인 100%</span>
          <span># 퍼블리싱 100%</span>
        </Bottom>
      </Wrap>
    </Layout>
  );
};
export default ProjectsLpContentsLayout;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 25px;
  padding-top: 35px;
  white-space: nowrap;

  ${media.mobile} {
    padding: 15px 20px;
    padding-top: 20px;
  }

  width: 100%;
  height: 100%;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.mobile} {
    gap: 10px;
  }

  width: 100%;
  height: 100%;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${media.mobile} {
    gap: 10px;
  }

  width: 100%;
`;
const TitleWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  width: 100%;

  .title-set {
    display: flex;
    gap: 15px;

    width: 100%;
  }
  .period-set {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;

    width: fit-content;
    height: 100%;

    font-size: 12px;

    ${media.mobile} {
      display: none;
    }
  }
`;
const Thumbnail = styled.div`
  display: flex;

  height: 65px;
  aspect-ratio: 1/1;

  ${media.mobile} {
    height: 55px;
  }

  background-image: url('/images/profile-portfolio.png');
  background-size: cover;
  border-radius: 15px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  color: #000;

  :nth-child(1) {
    font-size: 15px;
    font-weight: 700;
  }
  :nth-child(2) {
    font-size: 12px;
    font-weight: 500;
  }
`;

const Period = styled.div`
  color: #8c8c8c;
  font-size: 12px;
  text-align: end;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  font-size: 12px;

  .link-wrap {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      ${media.mobile} {
        width: 15px;
      }
    }
  }
  :nth-child(2) {
    color: #fff;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 7px 15px;

      ${media.mobile} {
        padding: 4px 10px;
      }
      white-space: nowrap;

      height: fit-content;

      border-radius: 30px;
      background: #1e92ff;
    }
    svg {
      ${media.mobile} {
        width: 25px;
      }
    }
  }
`;

const Preview = styled.div`
  width: 100%;
  aspect-ratio: 800/397;

  border-radius: 10px;
  background-image: url('/images/preview-portfolio.png');
  background-size: contain;
`;

const SkillSet = styled.div`
  display: flex;
  gap: 10px;

  width: 100%;

  div {
    display: flex;
    padding: 5px 10px;
    align-items: center;
    justify-content: center;

    border: 1px solid #757575;
    border-radius: 30px;

    font-weight: 300;
    font-size: 12px;
    color: #757575;
  }
`;

const Middle = styled.div`
  ${media.mobile} {
    display: none;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;

  width: 100%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;

    border-radius: 30px;
    background: #000;
    color: #fff;
    font-size: 12px;

    ${media.mobile} {
      padding: 0;
      background: none;
      color: #000;
      font-size: 10px;
    }
  }
`;
