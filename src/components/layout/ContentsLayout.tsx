import { layoutGuide } from '@/styles/colorGuide';
import { media } from '@/styles/mediaQuery';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

export const ContentsLayout = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <Layout style={style}>
      <Contents>{children}</Contents>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* prettier-ignore */
  padding: calc(
      ${layoutGuide.musicBar_height.pc_tablet} + 25px + ${layoutGuide.padding
    .tablet})
    ${layoutGuide.padding.tablet}  calc(${layoutGuide.padding.tablet} + 25px);

  ${media.mobile} {
    /* prettier-ignore */
    margin-top: calc(${layoutGuide.musicBar_height.mobile} + 25px);
    /* prettier-ignore */
    padding: calc(
        ${layoutGuide.musicBar_height.mobile} + 25px +${layoutGuide.padding
      .mobile}
      )
      ${layoutGuide.padding.mobile} calc(${layoutGuide.padding.mobile} + 25px);
  }

  width: 100%;
  height: 100vh;
`;
