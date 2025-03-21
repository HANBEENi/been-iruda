/* LP 커버 레이아웃 */

import { styled } from 'styled-components';

const LpCoverLayout = ({ backgroundImage }: { backgroundImage: string }) => {
  return (
    <Layout $backgroundImage={backgroundImage}>
      <></>
    </Layout>
  );
};
export default LpCoverLayout;

const Layout = styled.div<{ $backgroundImage: string }>`
  display: flex;

  width: 100%;
  height: 100%;
  aspect-ratio: 838.04/831;

  background-image: url('/images/lp-cover-main.png');
  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-size: contain;

  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.25),
    0 4px 40px rgba(0, 0, 0, 0.25);
`;
