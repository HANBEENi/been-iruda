// src/components/layout/AppLayout.tsx

'use client';

import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { media } from '@/styles/mediaQuery';
import { BackgroundObjectSVG } from '../../../public/icons/ObjectSVG';
import { ContentsLayout } from './ContentsLayout';
import { MiniMusicView } from '../common/music/MiniMusicView';
import { BackVinyl } from '../common/BackVinyl';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      {/* 배경 오브젝트 */}
      <BackgroundObject $center />

      {/* Lp, Lp바늘 */}
      <ContentsLayout>
        <Lp />
        <Stylus />
      </ContentsLayout>

      <Contents>{children}</Contents>

      <MiniMusicView />

      <BackVinyl />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100vw;
  height: 100vh;

  background-image: url(${({ theme }) => theme.background.image});

  & > svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 120%;
    height: 120%;
  }
`;

const Lp = styled.div`
  height: 100%;
  aspect-ratio: 802.79/815.76;
  margin-right: 8px;

  ${media.mobile} {
    width: 100%;
    height: fit-content;
    aspect-ratio: 802.79/815.76;
  }

  background-image: url(${({ theme }) => theme.lp.backgroundImage});
`;

const Stylus = styled.div`
  position: absolute;
  left: 50%;
  bottom: -10%;

  width: 360px;
  aspect-ratio: 537/551;

  background-image: url('/images/stylus.png');
`;

const BackgroundObject = styled(BackgroundObjectSVG)<{ $center?: boolean }>`
  ${({ $center }) =>
    $center &&
    `
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 115%;

      @media (max-width: 768px) {
        width: 150%;
      }
    }
  `}
`;

const Contents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;

  z-index: 1005;
`;
