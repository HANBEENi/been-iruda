"use client";

import { styled } from "styled-components";
import { TopButtonSVG } from "../../../public/svg/ButtonSVG";

const TopButton = () => {
  return (
    <Layout>
      <TopButtonSVG />
    </Layout>
  );
};

export default TopButton;

const Layout = styled.div`
  display: flex;
  position: fixed;
  bottom: 70px;
  right: 70px;
  transform: translate(12%, 0%);
  justify-content: center;
  align-items: center;
  padding: 17px;
  z-index: 1004;

  width: 60px;
  height: 60px;

  border-radius: 10px;
  background: #f2f2f2b9;

  cursor: pointer;
`;
