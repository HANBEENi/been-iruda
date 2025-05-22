import { ReactNode } from 'react';
import { styled } from 'styled-components';

export const LpCover = ({
  isHome = false,
  backgroundImageUrl,
  children,
}: {
  isHome?: boolean;
  backgroundImageUrl: string;
  children: ReactNode;
}) => {
  return (
    <Layout
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      $isHome={isHome}
    >
      {children}
    </Layout>
  );
};

const Layout = styled.div<{ $isHome: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ $isHome }) => ($isHome ? 'none' : '20px 20px 30px 20px')};
  aspect-ratio: 833/826;
  height: 100%;

  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);
  background-image: url('/images/cover-01.png');
`;
