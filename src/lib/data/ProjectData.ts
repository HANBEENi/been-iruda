/**
 * 프로젝트 정보 데이터
 *
 * 정방형 로고 이미지
 * 프로젝트 제목
 * 프로젝트 한줄 소개
 * 사이트 바로가기 링크
 * 피그마 링크 여부, 링크
 * 노션 링크 여부, 링크
 * 깃헙 링크 여부, 링크
 * 유튭 링크 여부, 링크
 * 협업구성
 * 개발기간
 * 구현형태
 * 미리보기화면
 * 주요기능
 * 사용기술스택
 */

interface Props {
  title: string;
  subtitle: string;
  logo: string;
  link: Link[];
  isTeam: boolean;
  date: string;
  form: string;
}
interface Link {
  linkName: string;
  url: string;
}
export const ProjectData: Props[] = [
  {
    title: "BEEN.IRUDA 김한빈 포트폴리오",
    subtitle: "저의 개인 포트폴리오 사이트입니다.",
    logo: "images/I06_Portfolios/Logo/Beeniruda.png",
    link: [
      { linkName: "site", url: "http://localhost3000" },
      { linkName: "github", url: "naver.com" },
    ],
    isTeam: false,
    date: "24.11-25.01",
    form: "반응형 웹",
  },
];
