"use client";

import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import * as THREE from "three";

// 배경 이미지 배열
const backgroundImages = [
  "/images/backgroundColor/color00.png",
  "/images/backgroundColor/color01.png",
  "/images/backgroundColor/color03.png",
  "/images/backgroundColor/color06.png",
  "/images/backgroundColor/color07.png",
];

const AnimatedModel = () => {
  const gltf = useGLTF("models/beeniruda3D.gltf");
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  // 애니메이션 로직
  useEffect(() => {
    if (gltf.animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);

      gltf.animations.forEach((clip) => {
        const action = mixer.current?.clipAction(clip);
        if (action) {
          action.play();
          action.timeScale = 0.05; // 애니메이션 속도를 0.05배로 줄임 (기본값은 1)
          action.setLoop(THREE.LoopPingPong, Infinity); // 되감기 루프 설정
        }
      });
    }

    // 모델의 재질(Material) 색상 변경
    gltf.scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (
          mesh.material &&
          (mesh.material as THREE.MeshStandardMaterial).color
        ) {
          const material = mesh.material as THREE.MeshStandardMaterial;
          material.color.set("#f6456e"); // 빨간색으로 설정
        }
      }
    });

    return () => {
      mixer.current?.stopAllAction(); // 클린업
      mixer.current = null;
    };
  }, [gltf]);

  useFrame((_, delta) => {
    mixer.current?.update(delta); // 매 프레임 애니메이션 업데이트
  });

  return <primitive object={gltf.scene} />;
};

const DynamicFovCamera = () => {
  const { camera, size } = useThree();

  useEffect(() => {
    const baseFov = 1.7; // 기본 fov
    const scaleFactor = Math.min(size.width / size.height, 1.5); // 화면 비율에 따라 fov 조정
    (camera as THREE.PerspectiveCamera).fov = baseFov / scaleFactor; // 카메라 fov 조정
    camera.updateProjectionMatrix(); // 변경 사항 적용
  }, [camera, size]);

  return null;
};

const MainSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const preloadImage = (url: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
      });
    };

    const transitionImages = async () => {
      setFadeOut(true); // 현재 이미지를 서서히 사라지게 설정
      await preloadImage(
        backgroundImages[(currentImageIndex + 1) % backgroundImages.length]
      );

      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
        setFadeOut(false); // 새 이미지 페이드인
      }, 500); // 페이드아웃 완료 후 이미지 교체
    };

    const interval = setInterval(transitionImages, 2000);
    return () => clearInterval(interval); // 클린업
  }, [currentImageIndex]);

  return (
    <Layout>
      <BackgroundLayer
        $image={backgroundImages[currentImageIndex]}
        $fadeOut={fadeOut}
      />
      <Contents>
        <Title>
          <div>PORTFOLIO</div>
          <div>FRONTEND DEVELOPER</div>
        </Title>
        <Model>
          <Vinyl />
          <Canvas
            style={{ height: "100%", width: "100%" }}
            camera={{ position: [0, 0, 5], fov: 1.55 }}
          >
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={1.55} />
            <Suspense>
              <DynamicFovCamera />
              <OrbitControls
                target={[0.01, -0.02, 0]} // 모델 중심
                maxDistance={10} // 최대 줌아웃 거리
                minDistance={4} // 최소 줌인 거리
                enableZoom={false} // 줌 비활성화
                enableRotate={false} // 회전 비활성화
                enablePan={false} // 이동 비활성화
                makeDefault
              />
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 3, 10]} intensity={10} />
              <AnimatedModel />
            </Suspense>
          </Canvas>
        </Model>

        <SubTitle>
          <div>BEEN.IRUDA: 비니루다 | 빈, 이루다</div>
          <div>© 2024. KIM HANBEEN All Rights Reserved</div>
        </SubTitle>
      </Contents>
    </Layout>
  );
};

export default MainSection;

const Layout = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  overflow: hidden;

  width: 100vw;
  height: 100vh;
`;
const BackgroundLayer = styled.div<{ $image: string; $fadeOut: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${(props) => (props.$fadeOut ? 0 : 1)};
  transition: opacity 1.5s ease-in-out;
  z-index: 0;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 20px;
  z-index: 1;

  max-width: 780px;
  height: calc(100% - 80px);
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  color: #000;
  font-size: 30px;
  white-space: nowrap;
`;
const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  width: 100%;

  color: #ffa6c4;
  font-size: 22px;
`;
const Model = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 65%;
`;
const Vinyl = styled.div`
  display: flex;
  position: absolute;
  z-index: 100;

  width: 100%;
  height: 100%;

  background-image: url("images/vinyl.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
