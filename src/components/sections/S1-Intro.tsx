'use client';

import { styled } from 'styled-components';
import Model3DViewer from '../modules/Model3D-Portfolio';

const Intro = () => {
  return (
    <Layout>
      <Contents>
        <Model3D>
          <Model3DViewer />
        </Model3D>
      </Contents>
    </Layout>
  );
};

export default Intro;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  display: flex;

  width: 100%;
  max-width: 833px;
  height: 100%;

  background-image: url('/images/lp-main.png');
  background-size: contain;
`;

const Model3D = styled.div`
  display: flex;
  position: relative;
  padding-top: 10px;

  width: 100%;
  max-width: 1190px;
  height: 100%;
`;
