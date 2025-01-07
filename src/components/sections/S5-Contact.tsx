import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import gsap from "gsap";

const Dark_Card3D_SizeFeat = dynamic(
  () => import("@/components/sections_modules/Contact3DCard"),
  { ssr: false }
);

const ContactSection = ({ isActive }: { isActive: boolean }) => {
  const [isAction, setIsAction] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  /** BackText 애니메이션 효과 */
  // 각 Text 컴포넌트에 대한 참조를 저장
  const textRefs = useRef<(HTMLElement | null)[]>([]);
  textRefs.current = [];

  // Text 컴포넌트에 Ref를 추가
  const addTextRefs = (el: HTMLElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const handleOpenLink = (Link: string) => {
    window.open(Link, "_blank");
  };
  const handleOpenEmailForm = () => {
    const recipient = "been.iruda@gmail.com"; // 받는 사람 이메일 주소
    const subject = "문의 사항"; // 이메일 제목
    const body = "여기에 내용을 입력하세요."; // 이메일 본문 내용

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    textRefs.current.forEach((text, index) => {
      gsap.fromTo(
        text,
        // from(초기 상태)
        {
          WebkitTextFillColor: "transparent",
          WebkitTextStrokeColor: "#cbcbcb",
        },
        // to(최종 상태)
        {
          WebkitTextFillColor: "#fff",
          delay: index * 0.5,
          duration: 2,
          ease: "power2.inOut",
          clipPath: "inset(0 100% 0 0)",
          onUpdate: function () {
            const progress = this.progress();
            const clipPathValue = `inset(0 ${100 - progress * 100}% 0 0)`;
            (text!.style as any).clipPath = clipPathValue;
            (text!.style as any).WebkitClipPath = clipPathValue;
          },
          onComplete: function () {
            gsap.to(text, {
              WebkitTextStrokeColor: "#b2b2b2", // 테두리 색상을 원래 색상으로 설정
              WebkitTextFillColor: "transparent",
              clipPath: "inset(0 0 0 0)", // 텍스트를 다시 왼쪽에서 오른쪽으로 채우기
              duration: 2,
              ease: "power2.inOut",
            });
          },
        }
      );
    });
  }, [isAction]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAction(true);
          } else {
            setIsAction(false);
          }
        });
      },
      {
        threshold: 0.3, // 섹션의 30%가 보일 때 트리거
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Layout
      style={{ height: "100%", width: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container ref={sectionRef}>
        <Contents>
          <div className="card3D">
            <Dark_Card3D_SizeFeat isAction={isAction} />
          </div>
          {/* <BackText>
            <div ref={addTextRefs} className="backText">
              CONTACT
            </div>
            <div ref={addTextRefs} className="backText">
              INFO
            </div>
          </BackText> */}
          {/* <CompactFooter /> */}
        </Contents>
        {/* <HowContect>
          <div
            onClick={handleOpenEmailForm}
            style={{
              background: "linear-gradient(135deg, #a8e063, #56ab2f)",
              color: "#fff",
            }}
          >
            E-mail
          </div>
          <div
            onClick={() => handleOpenLink("https://github.com/HANBEENi")}
            style={{
              background: "linear-gradient(135deg, #6e6e6e, #3e3e3e)",
              color: "#fff",
            }}
          >
            GitHub
          </div>
          <div
            onClick={() =>
              handleOpenLink(
                "https://www.notion.so/51d4c45165fc46b880a046c345df9fd5?pvs=4"
              )
            }
            style={{
              background: "linear-gradient(135deg, #d5d5d5, #9e9e9e)",
              color: "#fff",
            }}
          >
            Notion
          </div>
          <div
            onClick={() =>
              handleOpenLink("https://open.kakao.com/me/beeniruda")
            }
            style={{
              background: "linear-gradient(135deg, #ffcc00, #ff9900)",
              color: "#fff",
            }}
          >
            OpenKakao
          </div>
        </HowContect> */}
      </Container>
    </Layout>
  );
};

export default ContactSection;
const Layout = styled(motion.div)`
  background: linear-gradient(45deg, #fff 0%, #e2e2e2 100%);
  background-image: url("images/I11_Etc/backgroundVinyl2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  svg {
    display: flex;
  }
`;

const BackText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 55%;
  transform: translateY(-52%);
  width: 100%;
  height: 100%;
  white-space: nowrap;

  -webkit-text-stroke: 1px #5d5d5d;
  -webkit-text-fill-color: "transparent";
  font-size: clamp(290px, 18.2vw, 290px);
  line-height: 100%;
  color: #fff;

  pointer-events: none;
  user-select: none;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1200px;
  width: 100%;
  aspect-ratio: 650/363;

  border-radius: 15px;

  color: #fff;

  & .card3D {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 278.33px);
    height: 100%;
    z-index: 300;
  }
`;

const HowContect = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 10px;

  font-size: 1.25rem;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;

    border-radius: 8px;

    cursor: pointer;
  }
`;
