export interface LyricLine {
  time: number; //해당 가사가 시작하는 시간(초)
  text: string; //가사 내용
}

export interface MusicData {
  id: number;
  title: string;
  thumbnail: string;
  lyrics: LyricLine[];
  audioUrl: string;
  endTime: number;
}

export const musicList: MusicData[] = [
  {
    id: 1,
    title: '프론트엔드의 길',
    thumbnail: '/images/lp-cover-portfolio.png',
    lyrics: [
      { time: 10, text: '도구 아닌 해결책을 만드는 열정' },
      { time: 15, text: '화면 속엔 우리의 고민의 결정' },
      { time: 20, text: '단순히 코드가 아닌 가치를 담아' },
      { time: 24, text: '사용자 마음속에 자리 잡으리라' },
      { time: 27, text: '' },
      { time: 28, text: '‘이 서비스 진짜 좋다!’ 이 말 듣기 위해' },
      { time: 33, text: 'UI UX 모두 다 고민하며 이뤄내' },
      { time: 39, text: '퍼포먼스 높이고 경험의 깊이까지' },
      { time: 43, text: '우릴 기억하리라 모든 이가 진심으로' },
      { time: 47, text: '' },
      { time: 57, text: '픽셀 하나에도 정성을 다하며' },
      { time: 62, text: '속도와 직관에 마음을 담으며' },
      { time: 67, text: '화려함 아닌 필요를 채우는 디테일' },
      { time: 71, text: '사용자 위한 길의 끝은 우리의 배일' },
      { time: 74, text: '' },
      { time: 75, text: '‘이 서비스 진짜 좋다!’ 이 말 듣기 위해' },
      { time: 80, text: 'UI UX 모두 다 고민하며 이뤄내' },
      { time: 85, text: '퍼포먼스 높이고 경험의 깊이까지' },
      { time: 90, text: '우릴 기억하리라 모든 이가 진심으로' },
      { time: 94, text: '' },
      { time: 103, text: '문제를 보며 그냥 넘기지 않아' },
      { time: 107, text: '깊게 이해한 끝엔 해답이 빛나' },
      { time: 113, text: '의미 없던 클릭에 생명을 불어' },
      { time: 118, text: '우리가 만든 세상 속 자유로이 흘러' },
      { time: 126, text: '' },
      { time: 132, text: '‘이 서비스 진짜 좋다!’ 이 말 듣기 위해' },
      { time: 137, text: 'UI UX 모두 다 고민하며 이뤄내' },
      { time: 142, text: '퍼포먼스 높이고 경험의 깊이까지' },
      { time: 147, text: '우릴 기억하리라 모든 이가 진심으로' },
      { time: 151, text: '' },
    ],
    audioUrl: '/sounds/frontend-journey.mp3',
    endTime: 163,
  },
  {
    id: 2,
    title: '도구가 아닌 해결책을 만드는 개발자',
    thumbnail: '/images/lp-cover-beeniruda.png',
    lyrics: [
      { time: 7, text: '코드 위를 걷는 나의 꿈' },
      { time: 12, text: '복잡한 세상 풀어낼 손' },
      { time: 15, text: '빨간 줄에도 멈추지 않아' },
      { time: 20, text: '현실을 바꿀 준비가 됐어' },
      { time: 22, text: '' },
      { time: 23, text: '눈앞에 펼쳐진 수많은 프레임' },
      { time: 27, text: '그 뒤에서 꿈꾸는 유저의 세계' },
      { time: 32, text: '단순히 보이는 그 너머를 보며' },
      { time: 36, text: '더 나은 내일을 디자인해' },
      { time: 39, text: '' },
      { time: 40, text: '도구가 아닌 해결책 만들래' },
      { time: 45, text: '가짜 아닌 진짜를 손에 잡을 때' },
      { time: 49, text: '화려한 빛은 필요 없으니까' },
      { time: 53, text: '변화를 그리는 내가 되고 싶어' },
      { time: 57, text: '' },
      { time: 64, text: '코드는 한 줄에도 담긴 철학' },
      { time: 68, text: '맘속 깊은 곳에서 올라오게' },
      { time: 72, text: '쉬운 길 아닌 진짜 길 찾아' },
      { time: 76, text: '완벽한 해결책을 향해 달려' },
      { time: 80, text: '' },
      { time: 81, text: '멈춤의 순간에도 답을 찾아' },
      { time: 85, text: '화면 넘어 웃음 피어날 그 날' },
      { time: 89, text: '내 코드는 이야기와 같아서' },
      { time: 93, text: '사람들과 이어질 그 순간을 봐' },
      { time: 96, text: '' },
      { time: 97, text: '도구가 아닌 해결책 만들래' },
      { time: 102, text: '가짜 아닌 진짜를 손에 잡을 때' },
      { time: 105, text: '화려한 빛은 필요 없으니까' },
      { time: 110, text: '변화를 그리는 내가 되고 싶어' },
      { time: 115, text: '' },
      { time: 130, text: '도구가 아닌 해결책 만들래' },
      { time: 134, text: '가짜 아닌 진짜를 손에 잡을 때' },
      { time: 138, text: '화려한 빛은 필요 없으니까' },
      { time: 143, text: '변화를 그리는 내가 되고 싶어' },
      { time: 151, text: '' },
      { time: 162, text: '코드는 한 줄에도 담긴 철학' },
      { time: 166, text: '맘속 깊은 곳에서 올라오게' },
      { time: 170, text: '쉬운 길 아닌 진짜 길 찾아' },
      { time: 174, text: '완벽한 해결책을 향해 달려' },
    ],
    audioUrl: '/sounds/developer-creates-solutions-not-just-tools.mp3',
    endTime: 300,
  },
];
