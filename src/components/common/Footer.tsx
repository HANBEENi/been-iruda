import { styled } from 'styled-components';
import Marquee from './Marquee';
import { colorGuide, layoutGuide } from '@/styles/colorGuide';
import { media } from '@/styles/mediaQuery';

export const Footer = () => {
  return (
    <Layout>
      <Contents>
        <span>© 2025. KIM HANBEEN All Rights Reserved</span>
        <span>been.iruda@gmail.com</span>
      </Contents>
      <Marquee $arrow="left" />
    </Layout>
  );
};

const Layout = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  z-index: ${layoutGuide.z_index.Z_01};

  width: 100%;

  font-size: 13px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding: 0 ${layoutGuide.padding.pc};
  ${media.tablet} {
    padding: 0 ${layoutGuide.padding.tablet};
  }
  ${media.mobile} {
    padding: 0 ${layoutGuide.padding.mobile};
  }

  :nth-child(1) {
    color: ${colorGuide.C04_pink_100};
  }
  :nth-child(2) {
    color: ${colorGuide.C03_pink_700};
  }
`;
