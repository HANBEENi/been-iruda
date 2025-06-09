// src/components/sections/S03.Projects/index.tsx

'use client';

import { useRef, useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { LpCoverLayout } from '@/components/layout/LpCoverLayout';
import { ContentsLayout } from '@/components/layout/ContentsLayout';
import { projectData } from '@/data/projectsData';
import { colorGuide } from '@/styles/colorGuide';
import { GithubSVG } from '../../../../public/icons/ObjectSVG';
import { SkillForm } from '@/components/common/SkillForm';
import { media } from '@/styles/mediaQuery';
import SlideNav from './SlideNav';
import type { RefCallback } from 'react';

export const S03_Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollContainer = scrollRef.current;
      const centerX =
        scrollContainer.scrollLeft + scrollContainer.offsetWidth / 2;
      const distances = cardRefs.current.map((el) =>
        el ? Math.abs(el.offsetLeft + el.offsetWidth / 2 - centerX) : Infinity
      );
      const closest = distances.indexOf(Math.min(...distances));
      setCurrentIndex(closest);
    };

    const container = scrollRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIndex = (idx: number) => {
    const target = cardRefs.current[idx];
    const container = scrollRef.current;
    if (target && container) {
      const scrollPos =
        target.offsetLeft + target.offsetWidth / 2 - container.offsetWidth / 2;
      container.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
  };

  return (
    <ContentsLayout>
      <Wrapper>
        <ScrollContainer ref={scrollRef}>
          {projectData.map((project, idx) => (
            <Slide
              key={project.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              $active={currentIndex === idx}
            >
              <LpCoverLayout
                backgroundImageUrl={project.thumbnail}
                background={project.backgroundColor}
              >
                <Header>
                  <Left>
                    <Thumbnail
                      style={{ backgroundImage: `url(${project.thumbnail})` }}
                    />
                    <Title>
                      <p className="title">{project.title}</p>
                      <p className="descript">
                        {project.subtitle.map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
                      </p>
                    </Title>
                  </Left>
                  <Right>
                    <Period>
                      <p>개발기간</p>
                      <p>{project.period}</p>
                    </Period>
                    <LinkSet>
                      <span
                        className="type"
                        style={{ background: colorGuide.C01_white }}
                      >
                        {project.type}
                      </span>
                      {project.siteUrl && (
                        <span
                          className="site-link"
                          style={{ background: colorGuide.C05_blue_500 }}
                          onClick={() => window.open(project.siteUrl, '_blank')}
                        >
                          🔗 사이트 바로가기
                        </span>
                      )}
                      {project.githubUrl && (
                        <span
                          className="github-link"
                          onClick={() =>
                            window.open(project.githubUrl, '_blank')
                          }
                        >
                          <GithubSVG />
                        </span>
                      )}
                    </LinkSet>
                  </Right>
                </Header>
                <Body>
                  <Preview>
                    {project.previewVideo && (
                      <video
                        src={project.previewVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: 'inherit',
                          background: '#000',
                        }}
                      />
                    )}
                  </Preview>
                  <SkillSet>
                    {project.skills.map((skill, idx) => (
                      <span key={idx}>
                        {SkillForm[skill as keyof typeof SkillForm]}
                      </span>
                    ))}
                  </SkillSet>
                </Body>
                <Footer>
                  <MyContribution>
                    {project.contribution.map((c, idx) => (
                      <span key={idx}># {c}</span>
                    ))}
                  </MyContribution>
                  <Barcode>
                    <span>{project.barcode}</span>
                  </Barcode>
                </Footer>
              </LpCoverLayout>
            </Slide>
          ))}
        </ScrollContainer>
        <SlideNav
          projects={projectData.map((p) => ({
            id: p.id,
            thumbnail: p.thumbnail,
          }))}
          current={currentIndex}
          onClick={scrollToIndex}
        />
      </Wrapper>
    </ContentsLayout>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const ScrollContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
`;

const Slide = styled.div<{ $active: boolean }>`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: scale(${({ $active }) => ($active ? 1 : 0.96)});
  ${media.mobile} {
    padding: 40px;
  }
`;

const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  overflow-x: scroll;
`;

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
    background: ${colorGuide.C02_black};

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
