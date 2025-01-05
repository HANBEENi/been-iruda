"use client";

import { styled } from "styled-components";
import {
  AloneSVG,
  DetailViewSVG,
  FigmaSVG,
  FoodSVG,
  GithubSVG,
  NotionSVG,
  WebTopSVG,
} from "../../../../public/svg/LinkSVG";

const ProjectView = () => {
  return (
    <Layout>
      <TitleWrap>
        <div className="logo" />
        <div className="wrap">
          <div className="title-set">
            <div>BEEN.IRUDA</div>
            <div>김한빈 웹 포트폴리오</div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="link-set">
              <span>사이트바로가기</span>
              <div>
                <FigmaSVG />
              </div>
              <div>
                <NotionSVG />
              </div>
              <div>
                <GithubSVG />
              </div>
            </div>
            <div
              className="detailView"
              style={{
                display: "flex",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  display: "flex",
                  paddingTop: "15px",
                  color: "#1E92FF",
                }}
              >
                프로젝트 소개 더보기
              </span>
              <div style={{ width: "30px", height: "30px" }}>
                <DetailViewSVG />
              </div>
            </div>
          </div>
        </div>
      </TitleWrap>
      <IntroWrap>
        <Intro>
          <div className="top">카테고리</div>
          <div className="middle">
            <FoodSVG />
          </div>
          <div className="bottom">맛집 찾기</div>
        </Intro>
        <Intro>
          <div className="top">협업구성</div>
          <div className="middle">
            <AloneSVG />
          </div>
          <div className="bottom">개인</div>
        </Intro>
        <Intro>
          <div className="top">배포형태</div>
          <div className="middle">반응형 웹</div>
          <div className="bottom">Next.js14</div>
        </Intro>
        <Intro>
          <div className="top">개발기간</div>
          <div className="middle">24.11 - 25.01</div>
          <div className="bottom">3개월</div>
        </Intro>
      </IntroWrap>
      <Contents>
        <PreView>
          <div className="web-top">
            <WebTopSVG />
          </div>
        </PreView>
        <Instruction>
          <div className="title">주요 기능</div>
        </Instruction>
        <Instruction>
          <div className="title">기술 스택</div>
        </Instruction>
      </Contents>
    </Layout>
  );
};

export default ProjectView;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;

  width: 100%;
  height: 100%;

  background: #ffffff;

  font-family: "GmarketSans";
  color: #000;
  text-align: start;
  white-space: nowrap;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const TitleWrap = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;

  width: 100%;

  .logo {
    width: 80px;
    aspect-ratio: 1/1;

    border-radius: 15px;
    background: #d9d9d9;
  }

  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
  }

  .title-set {
    display: flex;
    flex-direction: column;
    gap: 5px;

    :nth-child(1) {
      font-size: 16px;
    }
    :nth-child(2) {
      font-size: 13px;
      color: #d9d9d9;
    }
  }

  .link-set {
    display: flex;
    gap: 10px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 13px;

      border-radius: 20px;
      background: #1e92ff;

      color: #fff;
      font-size: 13px;
      font-family: "GmarketSansTTFLight";

      cursor: pointer;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      aspect-ratio: 1/1;

      border-radius: 100%;
      background: #000;

      cursor: pointer;
    }
    svg {
      width: 60%;
      height: 60%;
    }
  }
`;

const IntroWrap = styled.div`
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
  gap: 10px;

  width: 100%;

  border-top: 1px solid #d9d9d9;

  :last-child {
    border: none;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  height: 50px;

  border-right: 1px solid #d9d9d9;

  .top {
    font-size: 8px;
  }
  .middle {
    font-size: 10px;
  }
  .bottom {
    font-size: 10px;
  }
`;

const Contents = styled.div`
  display: flex;
  gap: 10px;
`;

const PreView = styled.div`
  display: flex;
  flex: 2;
  overflow: hidden;

  height: 200px;

  border-radius: 15px;
  background-image: url("/images/I11_Etc/projectPreView01.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  svg {
    width: 100%;
    height: fit-content;
  }
  .web-top {
  }
`;

const Instruction = styled.div`
  flex: 1;
  overflow: hidden;

  border-radius: 15px;
  background: #d9d9d9;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 20px;

    background: #f7f7f7;

    color: #999999;
    font-size: 13px;
  }
`;
