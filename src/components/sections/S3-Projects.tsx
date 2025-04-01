/* 프로젝트 섹션 */

import { styled } from 'styled-components';
import LpCoverLayout from '../layout/LpCoverLayout';
import SectionLayout from '../layout/SectionLayout';
import Slide from '../ui/Slide';
import ProjectsLpContentsLayout from '../ui/ProjectsLpContentsLayout';

const slideData = [
  { lpCover: '/images/lp-cover-effectsspace.png' },
  { lpCover: '/images/lp-cover-intermatch.png' },
  { lpCover: '/images/lp-cover-photeto.png' },
];

const Projects = () => {
  return (
    <SectionLayout
      middleContents={<LpProjectCover />}
      // rightContents={<Slide />}
    >
      <Slide />
    </SectionLayout>
  );
};
export default Projects;

export const LpProjectCover = () => {
  return (
    <LpCoverLayout backgroundImage="/images/lp-cover-portfolio-back.png">
      <ProjectsLpContentsLayout />
    </LpCoverLayout>
  );
};

export const Slider = () => {
  return (
    <SliderLayout>
      {slideData.map((i, idx) => (
        <SlideItem key={idx} $backgroundImage={i.lpCover}></SlideItem>
      ))}
    </SliderLayout>
  );
};

const SliderLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 70px;
  top: 0;
  z-index: 1004;

  height: 100%;
  width: fit-content;
  border: 1px solid red;
`;

const SlideItem = styled.div<{ $backgroundImage: string }>`
  height: 150px;
  aspect-ratio: 51/50;

  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-size: contain;
`;
