"use client";

import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { styled } from "styled-components";
import * as THREE from "three";

const AnimatedModel = () => {
  const gltf = useGLTF("models/Text3D_beeniruda/beeniruda3D.gltf");
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

const MainSlide01 = () => {
  return (
    <Contents>
      <Title>
        <div>PORTFOLIO</div>
        <div>FRONTEND DEVELOPER</div>
        <div className="kimhanbeen"></div>
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
  );
};

export default MainSlide01;

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
  position: relative;
  flex-direction: column;

  width: 100%;

  color: #000;
  font-size: 30px;
  font-weight: bold;
  white-space: nowrap;

  & .kimhanbeen {
    display: flex;
    position: absolute;
    right: -100%;
    transform: translate(-58%, -34%);

    width: 80%;
    aspect-ratio: 521/185;

    background-image: url("images/kimhanbeen.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
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
