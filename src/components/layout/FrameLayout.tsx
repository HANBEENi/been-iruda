/* 프레임 레이아웃 */

/**
 * [TODO]
 * - stylus intro에선 없고, musicMe에서 나타나는 애니메이션 효과 적용(자연스러운모션 적용)
 */

import { styled } from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';

import CurrentMusic from '../music/CurrentMusic';
import Header from './Header';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FrameLayout = ({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <Layout>
      <Header />
      <CurrentMusic />
      <Footer />
    </Layout>
  );
};

export default FrameLayout;

/** 전체 레이아웃 */
const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  width: 100vw;
  height: 100vh;
`;
