// src/components/common/Header.tsx

import { styled, useTheme } from 'styled-components';
import Marquee from './Marquee';
import MusicBar from './music/MusicBar';
import { layoutGuide } from '@/styles/colorGuide';
import { media } from '@/styles/mediaQuery';
import ThemeButton from './ThemeButton';

const Header = () => {
  const theme = useTheme();

  return (
    <Layout>
      {/* 상단마퀴 */}
      <Marquee $arrow={'right'} />

      {/* 뮤직바 */}
      <MusicBar />

      {/* 컨텐츠(로고,메뉴바) */}
      <Contents>
        <LogoWrap>
          <Logo src={theme.logo} />
          <ThemeButton />
        </LogoWrap>

        <MenuBar>
          <MenuItem>INTRO</MenuItem>
          <MenuItem>INTRO</MenuItem>
          <MenuItem>INTRO</MenuItem>
          <MenuItem>INTRO</MenuItem>
          <MenuItem>INTRO</MenuItem>
        </MenuBar>
      </Contents>
    </Layout>
  );
};

export default Header;

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  z-index: ${layoutGuide.z_index.Z_01};

  width: 100%;

  ${media.mobile} {
    height: calc(
      ${layoutGuide.musicBar_height.mobile} + 25px
    ); // 뮤직바 높이 + 마퀴 높이
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${layoutGuide.padding.pc};
  ${media.tablet} {
    padding: 0 ${layoutGuide.padding.tablet};
  }
  ${media.mobile} {
    padding: 0 ${layoutGuide.padding.mobile};
  }

  height: ${layoutGuide.musicBar_height.pc_tablet};
  ${media.mobile} {
    height: ${layoutGuide.musicBar_height.mobile};
  }
`;

const LogoWrap = styled.div`
  display: flex;
  gap: 20px;
  z-index: 1005;

  height: 100%;
`;

const Logo = styled.img`
  display: flex;

  padding-top: 10px;

  width: 170px;
  height: fit-content;

  ${media.tablet} {
    width: 150px;
  }
  ${media.mobile} {
    width: 90px;
  }
`;

const MenuBar = styled.ul`
  display: flex;
  gap: 25px;
  z-index: 1005;

  color: ${({ theme }) => theme.text};
`;

const MenuItem = styled.li`
  /* font-family: 'RockSalt'; */
`;
