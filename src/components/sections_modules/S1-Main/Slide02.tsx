"use client";

import { media } from "@/styles/mediaQuery";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import * as THREE from "three";

const AnimatedModel = ({ scale }: { scale: number }) => {
  const gltf = useGLTF("models/Text3D_portfolio/portfolio3D.gltf");
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  // 애니메이션 로직
  useEffect(() => {
    if (gltf.animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);

      gltf.animations.forEach((clip) => {
        const action = mixer.current?.clipAction(clip);
        if (action) {
          action.play();
          action.timeScale = 0.03; // 애니메이션 속도를 0.03배로 줄임 (기본값은 1)
          action.setLoop(THREE.LoopPingPong, Infinity); // 되감기 루프 설정
        }
      });
    }

    return () => {
      mixer.current?.stopAllAction(); // 클린업
      mixer.current = null;
    };
  }, [gltf]);

  useFrame((_, delta) => {
    mixer.current?.update(delta); // 매 프레임 애니메이션 업데이트
  });

  return <primitive object={gltf.scene} scale={[scale, scale, scale]} />;
};

const MainSlide02 = () => {
  const model3DRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState<number>(1); // 3D 모델의 스케일

  const MinScale = 1.8;

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length > 0) {
        const entry = entries[0];
        const containerWidth = entry.contentRect.width; // Model3D의 너비 측정
        const calculatedScale = containerWidth / 600; // 기준 너비(600px) 대비 스케일 계산
        const newScale = Math.max(calculatedScale, MinScale);
        setScale(newScale);
      }
    });

    if (model3DRef.current) {
      resizeObserver.observe(model3DRef.current); // DOM 요소 관찰 시작
    }

    return () => {
      if (model3DRef.current) {
        resizeObserver.unobserve(model3DRef.current); // 관찰 종료
      }
    };
  }, []);

  return (
    <Contents>
      <div className="beeniru">
        <div className="title">
          <span>FRONTEND DEVELOPER</span>
          <span>KIM HANBEEN</span>
        </div>
      </div>
      <Model3D ref={model3DRef}>
        <Canvas
          style={{ height: "100%", width: "100%" }}
          camera={{ position: [0, 0, 0], fov: 1.5 }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={1.5} />
          <Suspense>
            <OrbitControls
              target={[-0.035, 0.005, 0]} // 모델 중심
              maxDistance={10} // 최대 줌아웃 거리
              minDistance={2} // 최소 줌인 거리
              enableZoom={false} // 줌 비활성화
              enableRotate={true} // 회전 비활성화
              enablePan={false} // 이동 비활성화
            />
            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 0.5]} intensity={5} />
            <AnimatedModel scale={scale * 0.85} />
          </Suspense>
        </Canvas>
      </Model3D>
      <div className="subTitle">
        <div>BEEN.IRUDA: 비니루다 | 빈, 이루다</div>
        <div>© 2024. KIM HANBEEN All Rights Reserved</div>
      </div>
    </Contents>
  );
};

export default MainSlide02;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  z-index: 1;
  white-space: nowrap;

  width: 100%;
  max-width: 1190px;
  height: calc(100% - 80px);

  ${media.tablet} {
    padding: 40px 0;
    gap: 0px;
  }

  ${media.mobile} {
    gap: 0px;
  }

  & .beeniru {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 590px;
    max-height: 391.7px;

    background-image: url("/images/I03_BeenirudaCharacterSet/beenirudaBlack.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    ${media.mobile} {
      max-height: 201.7px;
    }

    & .title {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      font-family: "RockSalt";
      font-size: clamp(16px, 3vw, 35px);
      color: #000;
      & :first-child {
        color: #ffa6c4;
      }

      ${media.mobile} {
        font-size: clamp(13px, 3vw, 35px);
        bottom: 15%;
      }
    }
  }
  & .subTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    width: 100%;

    ${media.tablet} {
      gap: 5px;
    }

    ${media.mobile} {
      gap: 5px;
    }
  }
`;

const Model3D = styled.div`
  display: flex;

  width: 100%;
  max-width: 1190px;
  aspect-ratio: 1275/256;

  ${media.mobile} {
    aspect-ratio: unset;
    height: 20%;
    margin-left: 30px;
  }
`;
