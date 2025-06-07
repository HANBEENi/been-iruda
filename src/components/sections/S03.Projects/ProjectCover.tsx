// src/components/sections/S3-Projects/ProjectCover.tsx

import styled from 'styled-components';
import { GithubSVG } from '../../../../public/icons/ObjectSVG';
import { SkillForm } from '@/components/common/SkillForm';
import { ProjectData } from '@/data/projectsData';

const ProjectCover = ({
  data,
  active,
}: {
  data: ProjectData;
  active: boolean;
}) => {
  return (
    <Container
      style={{ backgroundColor: data.backgroundColor }}
      $active={active}
    >
      <Wrapper>
        <Header>
          <TitleBlock>
            <h3>{data.title}</h3>
            {data.subtitle.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </TitleBlock>
          <InfoBlock>
            <p>{data.period}</p>
            <p>{data.type}</p>
            {data.siteUrl && (
              <a href={data.siteUrl} target="_blank" rel="noopener noreferrer">
                🔗 사이트 바로가기
              </a>
            )}
            {data.githubUrl && (
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubSVG />
              </a>
            )}
          </InfoBlock>
        </Header>

        <Preview>
          <img src={data.thumbnail} alt={data.title} />
        </Preview>

        <SkillSet>
          {data.skills.map((skill) => (
            <span key={skill}>
              {SkillForm[skill as keyof typeof SkillForm]}
            </span>
          ))}
        </SkillSet>

        <Footer>
          <div># 기획 100% # 디자인 100% # 퍼블리싱 100%</div>
          <Barcode>{data.barcode}</Barcode>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default ProjectCover;

const Container = styled.div<{ $active: boolean }>`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  transition: opacity 0.4s ease-in-out;
`;

const Wrapper = styled.div`
  padding: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleBlock = styled.div`
  h3 {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const InfoBlock = styled.div`
  text-align: right;
  a {
    margin-left: 10px;
    font-size: 12px;
    text-decoration: underline;
  }
`;

const Preview = styled.div`
  margin: 30px 0;
  img {
    max-width: 100%;
    border-radius: 20px;
  }
`;

const SkillSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Barcode = styled.div`
  font-family: 'LibreBarcode128';
  font-size: 48px;
`;
