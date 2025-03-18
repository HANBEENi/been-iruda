'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import {
  ArrowSVG,
  BeenirudaTextSVG,
  KimHanbeenTextSVG,
} from '../../../public/svg/EtcSVG';
import { useState } from 'react';
import { media } from '@/styles/mediaQuery';

const ResumeSection = ({ isActive }: { isActive: boolean }) => {
  const [isSlide01, setIsSlide01] = useState<boolean>(true);

  return (
    <Layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Contents>
        <AboutLayout>
          {/**비니루캐릭터이미지셋*/}
          <ImageSet>
            <div
              className="kimhanbeenImg"
              style={{
                backgroundImage:
                  'url(/images/I03_BeenirudaCharacterSet/aboutMe01.png)',
              }}
            />
            <div className="kimhanbeenTextSVG">
              <KimHanbeenTextSVG />
            </div>
          </ImageSet>
          {/**텍스트설명단*/}
          <Descript>
            <p className="first">
              안녕하세요, 웹 프론트엔드 개발자
              <br />
              김한빈입니다.
            </p>
            <p className="second">
              새로운 기술🤖과 도전🚀을 즐기며
              <br />
              기술로 가치💎를 만드는 웹 개발에 매료되어 있습니다.
            </p>
            <p className="third">
              사용자와 서비스 사이를 잇는 직관적이고 아름다운 웹 인터페이스를
              만드는 것을 좋아합니다.
              <br />
              최신 웹 기술 트렌드를 배우며 웹 서비스의 가치를 창출해나가고
              싶습니다.
              <br />
              지속적인 학습과 협업을 통해 성장하며, 사용자 중심 개발에 열정을
              가지고 있습니다.
            </p>
          </Descript>
        </AboutLayout>
        <ButtonSet>
          <li style={{ background: '#000' }}></li>
          <li></li>
          <li></li>
          <li></li>
        </ButtonSet>
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

  background-image: url('images/I11_Etc/backgroundVinyl2.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const AboutLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 30px;

  height: calc(100vh - 100px);
  width: 100%;

  ${media.mobile} {
    gap: 20px;
  }
  ${media.tablet} {
    gap: 20px;
  }
`;

const Contents = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 100px 0;
  gap: 30px;

  width: 100%;
  max-width: 1190px;
  height: 100vh;

  font-family: 'GmarketSans';
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

  width: 300px;
  height: 300px;

  .kimhanbeenImg {
    width: 100%;
    height: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    ${media.mobile} {
      margin-top: 70px;
      width: 180px;
    }
  }
  .kimhanbeenTextSVG {
    position: absolute;
    top: -15%;
    left: 45%;

    & svg {
      width: 160px;
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

const Descript = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  line-height: 150%;
  font-family: 'GmarketSans';
  font-size: 30px;
  .second {
    color: #ff6297;
  }
  .third {
    font-size: 16px;
    line-height: 150%;
    color: #545454;
  }
`;

const ButtonSet = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;

  position: absolute;
  bottom: 100px;

  width: 100%;

  li {
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;
