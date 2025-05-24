import { LpCoverLayout } from '@/components/layout/LpCoverLayout';
import { ContentsLayout } from '@/components/layout/ContentsLayout';
import { styled } from 'styled-components';
import LpCover_Beeniruda from '/public/images/cover-01.png';
import { colorGuide } from '@/styles/colorGuide';
import { GithubSVG } from '../../../../public/icons/ObjectSVG';
import { SkillForm } from '@/components/common/SkillForm';
import { media } from '@/styles/mediaQuery';

export const S03_Projects = () => {
  return (
    <ContentsLayout>
      <LpCoverLayout backgroundImageUrl={LpCover_Beeniruda.src}>
        {/* Header */}
        <Header>
          <Left>
            <Thumbnail />
            <Title>
              <p className="title">BEEN.IRUDA: 비니루다 | 빈,이루다</p>
              <p className="descript">
                <p>김한빈 포트폴리오 웹사이트입니다.</p>
                <p>반응형 웹으로 제작되었습니다.</p>
              </p>
            </Title>
          </Left>
          <Right>
            <Period>
              <p>개발기간</p>
              <p>2025.03 (2개월)</p>
            </Period>
            <LinkSet>
              <span
                className="type"
                style={{ background: colorGuide.C01_white }}
              >
                개인
              </span>
              <span
                className="site-link"
                style={{ background: colorGuide.C05_blue_500 }}
              >
                🔗 사이트 바로가기
              </span>
              <span className="github-link">
                <GithubSVG />
              </span>
            </LinkSet>
          </Right>
        </Header>

        <Body>
          <Preview></Preview>

          <SkillSet>
            {SkillForm.Nextjs}
            {SkillForm.Nextjs}
            {SkillForm.Nextjs}
            {SkillForm.Nextjs}
            {SkillForm.Nextjs}
            {SkillForm.Nextjs}
            {SkillForm.Nextjs}
          </SkillSet>
        </Body>

        {/* Footer */}
        <Footer>
          <MyContribution>
            <span># 기획 100%</span>
            <span># 디자인 100%</span>
            <span># 퍼블리싱 100%</span>
          </MyContribution>
          <Barcode>
            <span>BEENIRUDA</span>
          </Barcode>
        </Footer>
      </LpCoverLayout>
    </ContentsLayout>
  );
};

const Header = styled.div`
  position: relative;
  display: flex;
  padding: 10px 0;
  ${media.mobile} {
    padding: 5px 0;
  }
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  gap: 15px;
  ${media.mobile} {
    gap: 10px;
  }
`;
const Thumbnail = styled.div`
  aspect-ratio: 1/1;
  height: 80px;

  border-radius: 20px;
  border: 2px solid ${colorGuide.C01_white};
  background-image: url('/images/thumbnail-01.png');

  ${media.mobile} {
    height: 60px;
    border-radius: 15px;
    border: 1.5px solid ${colorGuide.C01_white};
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: nowrap;

  padding: 4px 0;

  .title {
    font-size: 14px;
    ${media.mobile} {
      font-size: 12px;
      line-height: 100%;
    }
  }
  .descript {
    font-size: 11px;
    font-weight: 400;
    ${media.mobile} {
      font-size: 10px;
      line-height: 150%;
    }
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  padding: 4px 0;

  flex: 1;

  ${media.mobile} {
    position: absolute;
    right: 0;
    height: 90%;
    /* height: calc(100% - 20px); */
  }
`;
const Period = styled.div`
  text-align: end;
  font-weight: 300;
  font-size: 10px;
  line-height: 150%;

  ${media.mobile} {
    line-height: 120%;
  }
`;
const LinkSet = styled.div`
  display: flex;
  gap: 10px;
  white-space: nowrap;

  * {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    line-height: 100%;
    color: ${colorGuide.C02_black};
    cursor: pointer;
    ${media.mobile} {
      font-size: 10px;
    }
  }
  ${media.mobile} {
    gap: 5px;
  }

  .type,
  .site-link {
    padding: 0 10px;
    border-radius: 30px;
    height: 24px;
    ${media.mobile} {
      height: 20px;
      padding: 0 5px;
    }
  }
  .github-link {
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 50px;
    border: 1px solid #fff;
    & > svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const Preview = styled.div`
  aspect-ratio: 850/413;
  border-radius: 20px;
  width: 100%;

  background: #fff;

  ${media.mobile} {
    border-radius: 15px;
  }
`;

const SkillSet = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;

  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
`;

const MyContribution = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px 10px;

    border-radius: 30px;
    background: ${({ theme }) => theme.text};

    font-size: 11px;
    font-weight: 400;
  }

  ${media.mobile} {
    gap: 5px;
    & > span {
      font-size: 10px;
      padding: 2px 8px;
    }
  }
`;

const Barcode = styled.div`
  display: flex;
  align-items: center;
  font-family: 'LibreBarcode128';
  font-size: 50px;
  padding-top: 15px;

  ${media.mobile} {
    font-size: 30px;
  }
`;
