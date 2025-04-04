'use client';

/* PORTFOLIO 3D 모델 불러오기 */
/*
 * [TODO: 마우스 조작 돌아오기 및 모델 잘림 해결]
 * [TODO: 모델 사이즈 및 조명 조절(피그마 디자인과 맞추기)]
 * 애니메이션 동작 추가
 * 다크모드시 조명 올리기
 */

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { media } from '@/styles/mediaQuery';

/** [1]모델 뷰어 -------------------------------------------------------- */
const Model3DViewer = () => {
  const model3DRef = useRef<HTMLDivElement | null>(null); // 3D 모델을 감쌀 div 요소 참조
  const [scale, setScale] = useState<number>(0.85); // 3D 모델의 스케일
  const MinScale = 1.8; // 최소 스케일 값

  return (
    <Wrapper ref={model3DRef}>
      {/* Three.js 렌더링을 위한 Canvas */}
      <Canvas
        style={{ height: '100%', width: '100%' }} // 3D뷰어 크기
        camera={{ position: [0, 0, 0], fov: 1.5 }} // 기본 카메라 설정
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={1.5} />
        {/* 모델 로딩이 완료될 때까지 기다림 */}
        <Suspense>
          {/*카메라컨트롤설정 */}
          <OrbitControls
            target={[-0.02, 0.03, 0]} // 모델 중심
            maxDistance={10} // 최대 줌아웃 거리
            minDistance={2} // 최소 줌인 거리
            enableZoom={false} // 줌 비활성화
            enableRotate={true} // 회전 비활성화
            enablePan={false} // 이동 비활성화
          />
          {/*전체조명*/}
          <ambientLight intensity={2} />
          {/*방향조명*/}
          <directionalLight position={[1, 1, 0.5]} intensity={5} />
          {/*3D모델불러오기*/}
          <AnimatedModel scale={scale * 0.7} />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

export default Model3DViewer;

/** [2]애니메이션 적용 ---------------------------------------------------- */
const AnimatedModel = ({ scale }: { scale: number }) => {
  const gltf = useGLTF('/models/Model3D-portfolio/portfolio3D.gltf');
  const mixer = useRef<THREE.AnimationMixer | null>(null); //애니메이션위한 mixer

  /* 애니메이션 적용 로직 */
  useEffect(() => {
    if (gltf.animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);

      gltf.animations.forEach((clip) => {
        const action = mixer.current?.clipAction(clip);
        if (action) {
          action.play();
          action.timeScale = 0.05; // 애니메이션 속도를 0.02배로 설정 (기본값은 1)
          action.setLoop(THREE.LoopPingPong, Infinity); // 되감기 루프 설정
        }
      });
    }

    return () => {
      mixer.current?.stopAllAction(); // 클린업(애니메이션정리,메모리누수방지)
      mixer.current = null;
    };
  }, [gltf]);

  /* 애니메이션 업데이트 */
  useFrame((_, delta) => {
    mixer.current?.update(delta); // 매 프레임 애니메이션 업데이트
  });

  /* 모델 렌더링 */
  return <primitive object={gltf.scene} scale={[scale, scale, scale]} />;
};

/** 스타일 -------------------------------------------------------------- */
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1005;

  width: 100%;
  height: 100%;

  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);

  pointer-events: none;

  ${media.tablet} {
    top: 160px;
    height: 80%;
  }
  ${media.mobile} {
    top: 220px;
    height: 50%;
  }
`;
