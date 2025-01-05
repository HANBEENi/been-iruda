"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";
import {
  ArrowSVG,
  BeenirudaTextSVG,
  KimHanbeenTextSVG,
} from "../../../public/svg/EtcSVG";
import { useState } from "react";

const aboutBeeniruda = () => {
  return (
    <>
      <ImageSet>
        <img src="/images/I11_Etc/beenirudaTextSet.png" alt="BEEN.IRUDA" />
        <BeenirudaTextSVG />
        {/* <span>BEEN.IRUDA</span> */}
      </ImageSet>
      <SubTitle>
        <span>What does</span>
        <span>BEEN.IRUDA</span>
        <span>mean?</span>
      </SubTitle>
      <Description>
        제 이름 한빈(BEEN)과 별칭인 '김비니루'를 결합하여 만든 이름입니다.
        <br />
        비니루는 비닐처럼 유연하게 무엇이든 담아낼 수 있다는 의미를 담고
        있습니다.
        <br />
        비니루라고 하면 비닐이 되고 이를 빈, 이루다와 연관하였습니다.
      </Description>
    </>
  );
};
const aboutKimhanbeen = () => {
  return (
    <>
      <ImageSet>
        <img
          className="kimhanbeenImg"
          src="/images/I11_Etc/beenirudaCharacter.png"
          alt="KimHanbeen.Character"
        />
        <div className="kimhanbeenTextSVG">
          <KimHanbeenTextSVG />
        </div>
        {/* <span>KIM HANBEEN</span> */}
      </ImageSet>
      <SubTitle>
        <span>I'm</span>
        <span>FrontEnd Developer</span>
        <span>KimHanbeen</span>
      </SubTitle>
      <Description>
        안녕하세요. 웹 프론트엔드 개발자 김한빈입니다.
        <br />
        사용자와 서비스 사이를 잇는 직관적이고 아름다운 웹 인터페이스를 만드는
        것을 좋아합니다.
        <br />
        사용자 경험을 우선으로 최신 웹 기술을 적극 활용하여 더욱 뛰어난 가치를
        전달하고싶습니다.
        <br />
        지속적인 학습과 협업을 통해 성장하며, 사용자 중심 개발에 열정을 가지고
        있습니다.
      </Description>
    </>
  );
};

const ResumeSection = ({ isActive }: { isActive: boolean }) => {
  const [isSlide01, setIsSlide01] = useState<boolean>(true);

  return (
    <Layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Contents>
        <Arrow onClick={() => setIsSlide01(!isSlide01)}>
          <ArrowSVG />
        </Arrow>
        <div className="title">OVERVIEW</div>
        <div className="contents">
          {isSlide01 ? aboutBeeniruda() : aboutKimhanbeen()}
        </div>
      </Contents>
    </Layout>
  );
};

export default ResumeSection;

const Layout = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-image: url("images/I11_Etc/backgroundVinyl2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);

  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 120px 0;
  gap: 30px;

  width: 100%;
  max-width: 1190px;
  height: 100vh;

  font-family: "GmarketSans";

  .title {
    font-size: 24px;
  }
  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

const ImageSet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 270px;
  }
  .kimhanbeenImg {
    width: 200px;
  }
  .kimhanbeenTextSVG {
    position: absolute;
    bottom: 15%;
    right: -50%;
    transform: translate(30%, 0%);

    width: 260px;
  }
  & svg {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(20%, -50%);

    width: 260px;
  }
  span {
    font-size: 16px;
  }
`;

const SubTitle = styled.div`
  display: flex;
  gap: 5px;

  font-family: "Knewave";
  font-size: 28px;
  letter-spacing: 1.5px;

  :nth-child(2) {
    color: #ff6297;
  }
`;

const Description = styled.div`
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`;
