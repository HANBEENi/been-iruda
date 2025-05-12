/* LP 커버 레이아웃 */

import { useSection } from '@/context/SectionContext';
import { useTheme } from '@/context/ThemeContext';
import { media } from '@/styles/mediaQuery';
import React from 'react';
import { styled } from 'styled-components';

const LpCoverLayout = ({
  backgroundImage,
  children,
  className,
}: {
  backgroundImage: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const themeMode = useTheme().themeMode;

  return (
    <Layout
      $backgroundImage={backgroundImage}
      $themeMode={themeMode}
      className={className}
    >
      {children}
    </Layout>
  );
};
export default LpCoverLayout;

const Layout = styled.div<{ $backgroundImage: string; $themeMode: string }>`
  display: flex;
  z-index: 1003;

  width: fit-content;
  height: 100%;
  aspect-ratio: 838.04/831;

  ${media.mobile} {
    top: 50%;
    transform: translate(-50%, -47%);
    height: 342px;
  }

  background-image: url('/images/lp-cover-main.png');
  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-size: contain;
  box-shadow: ${({ $themeMode }) =>
    $themeMode === 'light'
      ? 'inset 0px 0px 10px 0px rgba(0, 0, 0, 0.25), 0 4px 40px rgba(0, 0, 0, 0.25)'
      : 'inset 0px 0px 10px 0px rgba(255, 255, 255, 0.25), 0 4px 40px rgba(255, 255, 255, 0.25)'};
`;
