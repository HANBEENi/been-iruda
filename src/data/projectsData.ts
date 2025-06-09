// src/data/mockProjects.ts

import LpCover_Beeniruda from '/public/images/cover-01.png';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string[];
  period: string;
  type: '개인' | '팀';
  siteUrl?: string;
  githubUrl?: string;
  skills: string[];
  thumbnail: string;
  barcode: string;
  contribution: string[];
  backgroundColor?: string;
  previewVideo: string;
}

export const projectData: ProjectData[] = [
  {
    id: 'been-iruda',
    title: 'BEEN.IRUDA: 비니루다 | 빈,이루다',
    subtitle: [
      '김한빈 포트폴리오 웹사이트입니다.',
      '반응형 웹으로 제작되었습니다.',
    ],
    period: '2025.03 (2개월)',
    type: '개인',
    siteUrl: 'https://beeniruda.com',
    githubUrl: 'https://github.com/username/beeniruda',
    skills: ['Nextjs', 'TypeScript', 'Styled-Components', 'GSAP', 'Responsive'],
    thumbnail: '/images/thumbnail-01.png',
    barcode: 'BEENIRUDA',
    contribution: ['기획 100%', '디자인 100%', '퍼블리싱 100%'],
    previewVideo: '/videos/video-01.mov',
  },
  {
    id: 'millo',
    title: 'MILLO | 밀로',
    subtitle: ['AI 감성 다이어리 서비스', 'Z세대 감성 기반 웹앱'],
    period: '2025.04 (1.5개월)',
    type: '팀',
    siteUrl: 'https://millo.com',
    githubUrl: 'https://github.com/username/millo',
    skills: ['Nextjs', 'TypeScript', 'Styled-Components', 'Recoil', 'Figma'],
    thumbnail: '/images/cover-01.png',
    barcode: 'MILLO',
    backgroundColor: '#15D96B',
    contribution: ['기획 100%', '디자인 100%', '퍼블리싱 100%'],
    previewVideo: '/videos/video-01.mov',
  },
  {
    id: 'been-iruda',
    title: 'BEEN.IRUDA: 비니루다 | 빈,이루다',
    subtitle: [
      '김한빈 포트폴리오 웹사이트입니다.',
      '반응형 웹으로 제작되었습니다.',
    ],
    period: '2025.03 (2개월)',
    type: '개인',
    siteUrl: 'https://beeniruda.com',
    githubUrl: 'https://github.com/username/beeniruda',
    skills: ['Nextjs', 'TypeScript', 'Styled-Components', 'GSAP', 'Responsive'],
    thumbnail: '/images/thumbnail-01.png',
    barcode: 'BEENIRUDA',
    contribution: ['기획 100%', '디자인 100%', '퍼블리싱 100%'],
    previewVideo: '',
  },
  {
    id: 'millo',
    title: 'MILLO | 밀로',
    subtitle: ['AI 감성 다이어리 서비스', 'Z세대 감성 기반 웹앱'],
    period: '2025.04 (1.5개월)',
    type: '팀',
    siteUrl: 'https://millo.com',
    githubUrl: 'https://github.com/username/millo',
    skills: ['Nextjs', 'TypeScript', 'Styled-Components', 'Recoil', 'Figma'],
    thumbnail: '/images/cover-01.png',
    barcode: 'MILLO',
    backgroundColor: '#15D96B',
    contribution: ['기획 100%', '디자인 100%', '퍼블리싱 100%'],
    previewVideo: '',
  },
];
