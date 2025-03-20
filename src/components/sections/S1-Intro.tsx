'use client';

/* Intro 섹션 */

import { styled } from 'styled-components';
import Model3DViewer from '../modules/Model3D-Portfolio';
import SectionLayout from '../layout/SectionLayout';
import { useEffect, useRef } from 'react';

const Intro = () => {
  const lpCoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lpCoverRef.current) {
      lpCoverRef.current.classList.add('lp-cover');
    }
  }, []);

  return (
    <SectionLayout>
      <LpCover ref={lpCoverRef}>
        <Model3D>
          <Model3DViewer />
        </Model3D>
      </LpCover>
    </SectionLayout>
  );
};

export default Intro;

const LpCover = styled.div`
  display: flex;

  opacity: 1;
  transition: opacity 0.5s ease-out; /* ✅ 자연스럽게 사라지는 효과 */

  width: 100%;
  max-width: 833px;
  height: 100%;

  background-image: url('/images/lp-cover-main.png');
  background-size: contain;
`;

const Model3D = styled.div`
  display: flex;
  position: relative;
  padding-top: 10px;

  width: 100%;
  max-width: 1190px;
  height: 100%;
`;
