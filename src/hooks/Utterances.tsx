'use client';

import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useTheme } from '@/context/ThemeContext';
import { media } from '@/styles/mediaQuery';

const Utterances = () => {
  const commentsRef = useRef<HTMLDivElement>(null);
  const { themeMode } = useTheme();

  // 최초 1회: script 삽입
  useEffect(() => {
    if (!commentsRef.current || commentsRef.current.childNodes.length > 0)
      return;

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'HANBEENi/BEEN.IRUDA');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute(
      'theme',
      themeMode === 'dark' ? 'github-dark' : 'github-light'
    );
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    commentsRef.current.appendChild(script);
  }, []);

  // 이후 테마 변경 시 메시지로 테마만 전환
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.utterances-frame'
    );
    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      {
        type: 'set-theme',
        theme: themeMode === 'dark' ? 'github-dark' : 'github-light',
      },
      'https://utteranc.es'
    );
  }, [themeMode]);

  return (
    <Layout>
      <CommentContainer ref={commentsRef} />
    </Layout>
  );
};

export default Utterances;

const Layout = styled.div`
  display: flex;
  flex-direction: column-reverse;
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
