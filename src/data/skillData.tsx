// src/data/skillData.ts

import {
  BlanderSVG,
  CSS3SVG,
  FigmaSVG,
  GitHubSVG,
  IllustratorSVG,
  NextJSSVG,
  StyledComponentsSVG,
  ThreeJSSVG,
  TypeScriptSVG,
} from '../../public/icons/SkillISVG';

export interface SkillProps {
  icon: JSX.Element;
  name: string;
}
export const skillData: Record<string, SkillProps> = {
  Nextjs: {
    icon: <NextJSSVG />,
    name: 'Next.js',
  },
  TypeScript: {
    icon: <TypeScriptSVG />,
    name: 'TypeScript',
  },
  CSS: {
    icon: <CSS3SVG />,
    name: 'CSS',
  },
  StyledComponents: {
    icon: <StyledComponentsSVG />,
    name: 'StyledComponents',
  },
  Threejs: {
    icon: <ThreeJSSVG />,
    name: '',
  },
  Illustrator: {
    icon: <IllustratorSVG />,
    name: 'Illustrator',
  },
  Figma: {
    icon: <FigmaSVG />,
    name: 'Figma',
  },
  Blander: {
    icon: <BlanderSVG />,
    name: 'Blander',
  },
  Github: {
    icon: <GitHubSVG />,
    name: 'Github',
  },
};
