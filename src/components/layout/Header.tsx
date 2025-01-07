"use client";

/**
 * Header & Menubar
 *
 * 로고와 버거메뉴아이콘, 메뉴바를 포함하고 있습니다.
 */

import { css, keyframes, styled } from "styled-components";
import { useState } from "react";
import { media } from "@/styles/mediaQuery";

interface Props {
  onScrollTo: (section: string) => void;
}

const Header = ({ onScrollTo }: Props) => {
  const sections = ["main", "resume", "skills", "projects", "contact"];
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  return (
    <>
      {/** 헤더 레이아웃 */}
      <Layout>
        <Contents>
          <Icon
            className="logo"
            style={{ backgroundImage: "url(/images/I01_Header/logo3.png)" }}
            onClick={() => onScrollTo("main")}
          />
          <Menu>
            <Icon
              className="burger"
              style={{
                backgroundImage: "url(/images/I01_Header/menuBurger.png)",
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </Menu>
        </Contents>
      </Layout>
      {/** 메뉴 Open 슬라이드 */}
      <MenuBar isOpen={isMenuOpen}>
        <div className="title">MENU</div>
        <ul>
          {sections.map((section, index) => (
            <MenuItem
              key={section}
              index={index}
              isOpen={isMenuOpen}
              onClick={() => {
                onScrollTo(section);
                setIsMenuOpen(false); // 메뉴 클릭 후 닫기
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </MenuItem>
          ))}
        </ul>
        <div></div>
      </MenuBar>
      {/* 배경 오버레이 */}
      {isMenuOpen && <Overlay onClick={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(50px);
  }
`;

const Layout = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1005;

  width: 100%;
  height: 100px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;

  width: 100%;
  height: 100%;

  ${media.tablet} {
    padding: 0 40px;
  }

  ${media.mobile} {
    padding: 0 20px;
  }

  .logo {
    display: flex;
    width: 320px;
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
`;

const Menu = styled.div``;

const MenuBar = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 1s ease;
  z-index: 1006;
  padding: 50px;
  gap: 30px;

  width: 550px;
  height: 100vh;

  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);

  .title {
    color: #ff508a;
    font-size: 13px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    margin: 0;
  }
`;
const MenuItem = styled.li<{ index: number; isOpen: boolean }>`
  margin: 20px 0;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: black;
  transition: color 0.2s;
  opacity: 0;
  transform: translateX(50px);
  ${({ isOpen, index }) =>
    isOpen &&
    css`
      animation: ${slideIn} 1s ease-in-out ${index * 0.1}s forwards;
    `}
  &:hover {
    color: #ff508a;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1005;
`;
