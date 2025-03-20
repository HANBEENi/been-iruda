import { ReactNode } from 'react';
import { styled } from 'styled-components';

const paddingTop = 50;
const SectionLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout $paddingTop={paddingTop}>
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default SectionLayout;

const Layout = styled.div<{ $paddingTop: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${({ $paddingTop }) => `${paddingTop}px`};
  width: 100%;
  height: calc(100vh - 77px - 77px);
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
