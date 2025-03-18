"use client";

import { styled } from "styled-components";

export default function TestPage() {
  return (
    <Layout>
      <div className="profile-container">
        <img
          src="images/I03_BeenirudaCharacterSet/aboutMe01.png"
          className="profile-image"
          alt="profile preview"
        />
      </div>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .profile-container {
    width: 320px; /* 가로 기준 */
    height: 180px; /* 16:9 비율 */
    overflow: hidden;
    position: relative;
    border: 1px solid #ddd;
  }
  .profile-image {
    width: 100%; /* 정사각형 이미지 맞춤 */
    height: auto;
    position: absolute;
    top: -20%; /* 중앙 기준으로 위/아래 잘림 */
    left: 0;
  }
`;
