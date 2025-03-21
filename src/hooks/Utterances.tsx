/* 깃헙 댓글 Utterances */

import { useEffect, useRef } from 'react';
import { styled, useTheme } from 'styled-components';

const Utterances = () => {
  const commentsRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    if (!commentsRef.current) return;

    // 기존 Utterances iframe이 있으면 중복 삽입 방지
    if (commentsRef.current.childNodes.length > 0) return;
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'HANBEENi/BEEN.IRUDA'); // GitHub 저장소 설정
    script.setAttribute('issue-term', 'pathname'); // 페이지별 댓글 구분 방식
    script.setAttribute(
      'theme',
      theme.mode === 'dark' ? 'github-dark' : 'github-light'
    ); // 테마 설정
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    commentsRef.current.appendChild(script);
  }, [theme]);

  return (
    <Layout>
      <CommentContainer ref={commentsRef} />
    </Layout>
  );
};

export default Utterances;

const Layout = styled.div`
  display: flex;
  flex-direction: column-reverse; //코멘트작성단하단고정스크롤
  overflow-y: auto;
  padding: 0 10px;

  width: 100%;
  height: 100%;
`;
const CommentContainer = styled.div`
  iframe {
    width: 100%;
    height: 100% !important;
  }
`;
