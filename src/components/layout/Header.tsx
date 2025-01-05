"use client";

import { styled } from "styled-components";

interface Props {
  onScrollTo: (section: string) => void;
}

const Header = ({ onScrollTo }: Props) => {
  return (
    <Layout>
      <Contents>
        <Icon
          style={{ backgroundImage: "url(/images/I01_Header/logo2.png)" }}
          onClick={() => onScrollTo("main")}
        />
        <Menu>
          <Icon
            style={{
              backgroundImage: "url(/images/I01_Header/menuBurger.png)",
            }}
          />
        </Menu>
      </Contents>
    </Layout>
  );
};

export default Header;

const Layout = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1005;

  width: 100%;
  height: 100px;

  /* background: #ffffff12; */
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;

  width: 100%;
  height: 100%;
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
