'use client';

/* Intro 섹션 */

import LpCover from '../layout/LpCoverLayout';
import { styled } from 'styled-components';
import Model3DViewer from '../modules/Model3D-Portfolio';
import { useTheme } from '@/context/ThemeContext';

const Intro = () => {
  const { themeMode } = useTheme();

  return (
    <Layout>
      <Wrap>
        <LpCover backgroundImage="/images/lp-cover-main.png" />
      </Wrap>
      <Model3DViewer />
    </Layout>
  );
};

export default Intro;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  width: 100%;
  height: 100%;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 25px;

  width: 100%;
  height: calc(100vh - 77px - 77px - 25px);
`;
