"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import * as THREE from "three";

const Model3D = ({ scale }: { scale: number }) => {
  // GLTF 모델 불러오기
  const gltf = useGLTF("/models/PcTabletMobile/PcTabletMobile3DSet.gltf");
  // 재질 수정
  // gltf.scene.traverse((child) => {
  //   if (child instanceof THREE.Mesh) {
  //     if (child.material) {
  //       child.material = new THREE.MeshStandardMaterial({
  //         color: child.material.color || 0xffffff, // 기본 색상 유지
  //         roughness: 0.7, // 표면 거칠기 설정
  //         metalness: 0, // 금속성 제거
  //       });
  //     }
  //   }
  // });
  return <primitive object={gltf.scene} scale={[scale, scale, scale]} />;
};

const ResumeSection = () => {
  const model3DRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState<number>(1); // 3D 모델의 스케일 조정
  const exampleImages = [
    "images/test.png",
    "images/test.png",
    "images/test.png",
    "images/test.png",
    "images/test.png",
  ];

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length > 0) {
        const entry = entries[0];
        const containerWidth = entry.contentRect.width; // 컨테이너 너비 측정
        const newScale = containerWidth / 600; // 기준 너비(600px) 대비 비율 계산
        setScale(newScale);
      }
    });

    if (model3DRef.current) {
      resizeObserver.observe(model3DRef.current);
    }

    return () => {
      if (model3DRef.current) {
        resizeObserver.unobserve(model3DRef.current);
      }
    };
  }, []);

  return (
    <Layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ModelContainer ref={model3DRef}>
        <Title>
          <div>BEEN.IRUDA</div>
          <div>김한빈 포트폴리오 사이트</div>
        </Title>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <PerspectiveCamera makeDefault position={[4.1, 0, 4]} fov={15} />
          <Suspense fallback={null}>
            <OrbitControls
              target={[-2.5, 0.6, 0]}
              maxDistance={10}
              minDistance={10}
              enableZoom={false}
              enableRotate={true}
              enablePan={false}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} intensity={1} />
            <directionalLight position={[9, 5, -5]} intensity={1.5} />
            <directionalLight position={[-5, 0, 10]} intensity={1.5} />
            <Model3D scale={scale * 0.85} />
          </Suspense>
        </Canvas>
      </ModelContainer>
    </Layout>
  );
};

export default ResumeSection;

const Layout = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 120px 0;

  width: 100%;
  height: 100%;

  background: linear-gradient(45deg, #fff 0%, #e2e2e2 100%);
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  & :first-child {
    font-family: "Knewave";
    font-size: 64px;
  }
`;
const ModelContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
