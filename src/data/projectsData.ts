/* 프로젝트 데이터 리스트 */

import {
  CSS3SVG,
  NextJSSVG,
  TypeScriptSVG,
} from '../../public/icons/TechSkillsSVG';

type SkillSet = {
  id: number;
  name: string;
  icon: () => JSX.Element;
};

export interface ProjectsData {
  id: number; //프로젝트ID
  title: string; //프로젝트제목
  descript: string; //프로젝트설명
  type: '개인프로젝트' | '팀프로젝트' | '외주'; //프로젝트타입
  coverImage: string; //LP커버이미지
  backImage: string; //LP뒷면배경
  thumbnail: string; //썸네일(프로필)
  siteUrl: string; //사이트링크
  youtubeUrl: string; //유튜브시연링크
  githubUrl: string; //깃헙링크
  demoVideoUrl: string; //시연영상
  period: string; //개발기간
  skills: SkillSet[]; //스킬셋
  tags: string[]; //기여도관련#태그리스트
}

const projects: ProjectsData[] = [
  {
    id: 1,
    title: '감성 다이어리 서비스',
    descript: '개인 감정을 기록하고, AI 분석을 통해 감정 통계를 제공하는 웹앱',
    type: '개인프로젝트',
    coverImage: '/images/projects/emodi-cover.png',
    backImage: '/images/projects/emodi-back.png',
    thumbnail: '/images/thumbnails/emodi.png',
    siteUrl: 'https://emodi.app',
    youtubeUrl: 'https://youtu.be/example',
    githubUrl: 'https://github.com/username/emodi',
    demoVideoUrl: '/videos/emodi-demo.mp4',
    period: '2023.08 ~ 2023.09',
    skills: [
      { id: 1, name: 'Next.js', icon: NextJSSVG },
      { id: 2, name: 'TypeScript', icon: TypeScriptSVG },
      { id: 3, name: 'Emotion', icon: CSS3SVG },
    ],
    tags: ['# 기획 100%', '# 디자인 100%', '# 퍼블리싱 100%'],
  },
  {
    id: 2,
    title: '팀 프로젝트',
    descript: '팀과 함께 개발한 협업 프로젝트',
    type: '팀프로젝트',
    coverImage: '/images/projects/team-cover.png',
    backImage: '/images/projects/team-back.png',
    thumbnail: '/images/thumbnails/team.png',
    siteUrl: 'https://team-project.app',
    youtubeUrl: '',
    githubUrl: 'https://github.com/team/project',
    demoVideoUrl: '/videos/team-demo.mp4',
    period: '2024.01 ~ 2024.02',
    skills: [
      { id: 1, name: 'React', icon: NextJSSVG },
      { id: 2, name: 'Node.js', icon: NextJSSVG },
    ],
    tags: ['# 기획 100%', '# 디자인 100%', '# 퍼블리싱 100%'],
  },
];
