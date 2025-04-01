/* LP 커버 레이아웃 */

import { useTheme } from '@/context/ThemeContext';
import React from 'react';
import { styled } from 'styled-components';

const LpCoverLayout = ({
  backgroundImage,
  children,
}: {
  backgroundImage: string;
  children?: React.ReactNode;
}) => {
  const themeMode = useTheme().themeMode;
  return (
    <Layout $backgroundImage={backgroundImage} $themeMode={themeMode}>
      {children}
    </Layout>
  );
};
export default LpCoverLayout;

const Layout = styled.div<{ $backgroundImage: string; $themeMode: string }>`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  width: fit-content;
  height: 100%;
  aspect-ratio: 838.04/831;

  background-image: url('/images/lp-cover-main.png');
  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-size: contain;
  box-shadow: ${({ $themeMode }) =>
    $themeMode === 'light'
      ? 'inset 0px 0px 10px 0px rgba(0, 0, 0, 0.25), 0 4px 40px rgba(0, 0, 0, 0.25)'
      : 'inset 0px 0px 10px 0px rgba(255, 255, 255, 0.25), 0 4px 40px rgba(255, 255, 255, 0.25)'};
`;
