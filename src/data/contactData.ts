export interface ContactData {
  title: string;
  content: string;
  link: string;
}

export const contactData: ContactData[] = [
  {
    title: '이메일',
    content: 'BEEN.IRUDA@GMAIL.COM',
    link: 'mailto:been.iruda@gmail.com?subject=문의드립니다.&body=안녕하세요,%0D%0A%0D%0ABEEN.IRUDA 포트폴리오를 통해 문의드립니다.%0D%0A%0D%0A------%0D%0A%0D%0A',
  },
  { title: '이력서', content: 'RESUME', link: '' },
  { title: '깃허브', content: 'GITHUB', link: 'https://github.com/HANBEENi' },
  {
    title: '블로그',
    content: 'VELOG',
    link: 'https://velog.io/@hanbeeni/posts',
  },
];
