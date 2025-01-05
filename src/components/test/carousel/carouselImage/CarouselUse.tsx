"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import * as THREE from "three";
import Carousel from "@/components/test/carousel/carouselImage/CarouselImage";

const ResumeSection = () => {
  const exampleImages = [
    "images/test.png",
    "images/test.png",
    "images/test.png",
    "images/test.png",
    "images/test.png",
  ];

  return (
    <Layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Carousel images={exampleImages} />
      <Title>
        <div>BEEN.IRUDA</div>
        <div>김한빈 포트폴리오 사이트</div>
      </Title>
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
