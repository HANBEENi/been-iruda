import { colorGuide } from '@/styles/colorGuide';
import { media } from '@/styles/mediaQuery';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

export const LpCoverLayout = ({
  isHome = false,
  backgroundImageUrl,
  children,
}: {
  isHome?: boolean;
  backgroundImageUrl: string;
  children: ReactNode;
}) => {
  return (
    <Layout style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <Contents $isHome={isHome}>{children}</Contents>
    </Layout>
  );
};

const Layout = styled.div`
  aspect-ratio: 1/1;
  height: 100%;
  /* overflow: auto; */
  overflow: hidden;

  ${media.mobile} {
    width: 100%;
    height: auto;
  }

  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);
  background-image: url('/images/cover-01.png');
`;

const Contents = styled.div<{ $isHome: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: ${({ $isHome }) => ($isHome ? 'none' : '20px 20px 30px 20px')};

  width: 100%;
  height: 100%;

  color: ${colorGuide.C01_white};
  font-family: 'GmarketSans';
  line-height: 120%;

  ${media.mobile} {
    padding: ${({ $isHome }) => ($isHome ? 'none' : '20px')};
  }
`;
