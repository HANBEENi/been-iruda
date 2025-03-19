import { styled } from 'styled-components';
import Marquee from '../layout/Marquee';

const Intro = () => {
  return (
    <Layout>
      <Marquee arrow={'right'} />
      <></>
    </Layout>
  );
};

export default Intro;

const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vw;
  background: #8d4141;
`;
