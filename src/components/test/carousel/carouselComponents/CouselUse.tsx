"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";
import Carousel from "./CarouseComponents";

// 슬라이드에 표시될 컴포넌트들
const Slide1 = () => <SLayout>슬라이드 1의 내용</SLayout>;
const Slide2 = () => <SLayout>슬라이드 2의 내용</SLayout>;
const Slide3 = () => <SLayout>슬라이드 3의 내용</SLayout>;

const ProjectsSection = () => {
  return (
    <Layout
      style={{ background: "#5ad796", height: "100%", width: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Carousel components={[<Slide1 />, <Slide2 />, <Slide3 />]} />
    </Layout>
  );
};

export default ProjectsSection;

const Layout = styled(motion.div)``;

const SLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("images/I11_Etc/notebook.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  width: 100%;
  height: 100%;
`;
