'use client';

/* ----------------------------------------------------------------
 * Next.js SSR Styled-Components 호환성 보장 설정 파일
 *
 * 클라이언트에서 스타일컴포넌트를 사용할 때 서버에서 생성된 스타일과의 불일치를 방지
 * ---------------------------------------------------------------- */

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { ThemeContextProvider } from './ThemeContext';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  useServerInsertedHTML(() => styledComponentsStyleSheet.getStyleElement());

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </StyleSheetManager>
  );
}
