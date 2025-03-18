'use client';

/**
 * Header & Menubar
 *
 * 로고와 버거메뉴아이콘, 메뉴바를 포함하고 있습니다.
 */

import { css, keyframes, styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { media } from '@/styles/mediaQuery';
import { LogoSVG } from '../../../public/images/I01_Header/LogoSVG';

interface Props {
  onScrollTo: (section: string) => void;
  isToolbarHidden: boolean; //현재 활성화된 섹션 전달받음
}

const Header = ({ onScrollTo, isToolbarHidden }: Props) => {
  const [currentSection, setCurrentSection] = useState<string>('main');

  // 툴바 아이콘 이미지 데이터
  const icons = [
    'images/I01_Header/darkmodeIcon.png',
    'images/I01_Header/luckyIcon.png',
    'images/I01_Header/resumeIcon.png',
    'images/I01_Header/likeIcon.png',
  ];
  // 섹션 데이터
  const sections = [
    { menuName: 'INTRO', sectionName: 'main' },
    { menuName: 'ABOUT ME', sectionName: 'resume' },
    { menuName: 'PROJECTS', sectionName: 'projects' },
    { menuName: 'SKILLS', sectionName: 'skills' },
    { menuName: 'CONTACT', sectionName: 'contact' },
  ];

  return (
    <>
      {/** 헤더 레이아웃 */}
      <Layout>
        <Line>
          <ToolBar isToolbarHidden={isToolbarHidden}>
            {icons.map((i, idx) => (
              <ToolMenu
                key={idx}
                style={{
                  backgroundImage: `url(${i})`,
                }}
              ></ToolMenu>
            ))}
          </ToolBar>
        </Line>
        <Contents>
          <div
            style={{
              width: '150px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => onScrollTo('main')}
          >
            <LogoSVG />
          </div>
          <Menu>
            {sections.map((i, idx) => (
              <MenuItem
                key={idx}
                onClick={() => onScrollTo(i.sectionName)}
                isActive={currentSection === i.sectionName}
              >
                {i.menuName}
              </MenuItem>
            ))}
          </Menu>
        </Contents>
      </Layout>
    </>
  );
};

export default Header;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1005;

  width: 100%;
  height: 100px;
`;

const Line = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 25px;

  background: #000;
`;

const ToolBar = styled.div<{ isToolbarHidden: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-bottom: 10px;

  position: absolute;
  top: ${({ isToolbarHidden }) =>
    isToolbarHidden ? '-30px' : '25px'}; /* ✅ 스크롤 시 숨김 */
  transition: top 0.3s ease-in-out;

  width: 100%;
  height: 55px;

  background-image: url('images/I01_Header/toolBarBackground.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const ToolMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  border-radius: 100%;
  background: #fff;
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);

  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;

  width: 100%;
  height: 60px;

  ${media.tablet} {
    padding: 0 40px;
  }

  ${media.mobile} {
    padding: 0 20px;
  }

  .logo {
    display: flex;
    width: 320px;

    ${media.tablet} {
      width: 250px;
    }
    ${media.mobile} {
      width: 250px;
    }
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  cursor: pointer;

  ${media.mobile} {
    width: 30px;
    height: 30px;
  }
  ${media.tablet} {
    width: 30px;
    height: 30px;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MenuItem = styled.li<{ isActive: boolean }>`
  font-family: ${({ isActive }) =>
    isActive ? 'RockSalt, sans-serif' : 'inherit'};
`;
