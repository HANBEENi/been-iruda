"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";
import {
  ArrowSVG,
  BeenirudaTextSVG,
  KimHanbeenTextSVG,
} from "../../../public/svg/EtcSVG";
import { useState } from "react";
import { media } from "@/styles/mediaQuery";

const aboutBeeniruda = ({ setIsSlide01, isSlide01 }: any) => {
  return (
    <AboutLayout>
      <Arrow onClick={() => setIsSlide01(!isSlide01)}>
        <ArrowSVG />
        <div>ABOUT ME</div>
      </Arrow>
      <ImageSet>
        <img src="/images/I11_Etc/beenirudaTextSet.png" alt="BEEN.IRUDA" />
        <div className="beenirudaTextSVG">
          <BeenirudaTextSVG />
        </div>
      </ImageSet>
      <SubTitle>
        <span>BEEN.IRUDA가 무엇인가요?</span>
      </SubTitle>
      <Description>
        제 이름 한빈(BEEN)과 별칭인 '김비니루'를 결합하여 만든 이름입니다.
        <br />
        비니루는 비닐처럼 유연하게 무엇이든 담아낼 수 있다는 의미를 담고
        있습니다.
        <br />
        비니루라고 하면 비닐이 되고 이를 빈, 이루다와 연관하였습니다.
      </Description>
    </AboutLayout>
  );
};
const aboutKimhanbeen = ({ setIsSlide01, isSlide01 }: any) => {
  return (
    <AboutLayout>
      <ImageSet>
        <img
          className="kimhanbeenImg"
          src="/images/I03_BeenirudaCharacterSet/aboutMe01.png"
          alt="KimHanbeen.Character"
        />
        <div className="kimhanbeenTextSVG">
          <KimHanbeenTextSVG />
        </div>
      </ImageSet>
      <SubTitle>
        <span>안녕하세요, 웹 프론트엔드 개발자 김한빈입니다.</span>
      </SubTitle>
      <Description>
        <span className="nonMobile">
          사용자와 서비스 사이를 잇는 직관적이고 아름다운 웹 인터페이스를 만드는
          것을 좋아합니다.
          <br />
          사용자 경험을 우선으로 최신 웹 기술을 적극 활용하여 더욱 뛰어난 가치를
          전달하고싶습니다.
          <br />
          지속적인 학습과 협업을 통해 성장하며, 사용자 중심 개발에 열정을 가지고
          있습니다.
        </span>
        <span className="mobile">
          사용자와 서비스 사이를 잇는 직관적이고 아름다운 <br />웹 인터페이스를
          만드는 것을 좋아합니다.
          <br />
          사용자 경험을 우선으로 최신 웹 기술을 적극 활용하여 <br />
          더욱 뛰어난 가치를 전달하고싶습니다.
          <br />
          지속적인 학습과 협업을 통해 성장하며, <br />
          사용자 중심 개발에 열정을 가지고 있습니다.
        </span>
      </Description>
      <Tag>
        <div onClick={() => setIsSlide01(!isSlide01)}>
          <span>WHAT IS "</span>
          <span style={{ color: "#FF6197 " }}>BEEN.IRUDA</span>
          <span>"? 😁 →</span>
        </div>
        <div>
          <span>MORE ABOUT</span>
          <span style={{ color: "#FF6197 " }}>&nbsp;ME 😁 </span>
          <span>&nbsp; →</span>
        </div>
        <div className="text">
          <span>#개발독서 #취미 #장단점 #서향 #경험</span>
        </div>
      </Tag>
    </AboutLayout>
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
        <div className="contents">
          {isSlide01
            ? aboutKimhanbeen({ setIsSlide01, isSlide01 })
            : aboutBeeniruda({ setIsSlide01, isSlide01 })}
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

const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 30px;

  height: calc(100vh - 240px);
  width: 100%;

  ${media.mobile} {
    gap: 20px;
  }
  ${media.tablet} {
    gap: 20px;
  }
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding-left: 50px;
  padding-top: 70px;

  width: 100%;

  svg {
    width: 40px;
    cursor: pointer;

    ${media.mobile} {
      width: 30px;
    }
  }
  div {
    cursor: pointer;
  }

  ${media.mobile} {
    padding: 0;
  }
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
  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    ${media.mobile} {
      gap: 25px;
    }
  }
`;

const ImageSet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: fit-content;

  img {
    width: 270px;
    ${media.tablet} {
      width: 250px;
    }
  }
  .kimhanbeenImg {
    width: 200px;
    ${media.mobile} {
      margin-top: 70px;
      width: 180px;
    }
  }
  .kimhanbeenTextSVG {
    width: 80px;
    height: 20px;
    position: absolute;
    bottom: 0%;
    right: -30%;
    transform: translate(20%, 0);

    width: 260px;
    & svg {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(20%, -50%);

      width: 200px;

      ${media.mobile} {
        top: 55%;
        right: 35%;
        width: 100px;
      }
    }
  }
  .beenirudaTextSVG {
    position: absolute;
    bottom: -10%;
    right: -45%;

    ${media.mobile} {
      right: 10%;
    }

    & svg {
      width: 200px;

      ${media.mobile} {
        width: 150px;
      }
    }
  }

  span {
    font-size: 16px;
  }
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  white-space: nowrap;

  width: 100%;

  font-family: "Sejong";
  font-size: 28px;
  letter-spacing: 1.5px;

  ${media.tablet} {
    font-size: 25px;
  }
  ${media.mobile} {
    font-size: 16px;
  }
`;

const Description = styled.div`
  white-space: nowrap;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  font-family: "Sejong";

  .mobile {
    display: none;
  }
  ${media.tablet} {
    font-size: 16px;
  }
  ${media.mobile} {
    font-size: 13px;
    line-height: 20px;
    .nonMobile {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  white-space: nowrap;

  width: 100%;

  font-weight: bold;
  font-size: 16px;

  ${media.mobile} {
    flex-direction: column;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;

    border: 2px solid #000;
    border-radius: 30px;

    cursor: pointer;
  }
  .text {
    border: none;
    padding: 10px 0;
    padding-top: 15px;

    ${media.mobile} {
      display: none;
    }
    ${media.tablet} {
      display: none;
    }
  }

  ${media.tablet} {
    font-size: 12px;
  }
  ${media.mobile} {
    font-size: 12px;
  }
`;
