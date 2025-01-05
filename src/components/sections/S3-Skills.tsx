"use client";

import {
  BackendSkills,
  DesignDocsSkills,
  DevOpsSkills,
  FrontendSkills,
  Skill,
} from "@/lib/TechSkillData";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";
import { keyframes, styled } from "styled-components";

type SkillCategory = "Frontend" | "Backend" | "DevOps" | "Design & Docs";

const SkillsSection = ({ isActive }: { isActive: boolean }) => {
  const [isAction, setIsAction] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<SkillCategory>("Frontend");

  const skillData: Record<SkillCategory, Skill[]> = {
    Frontend: FrontendSkills,
    Backend: BackendSkills,
    DevOps: DevOpsSkills,
    "Design & Docs": DesignDocsSkills,
  };

  return (
    <Layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Title>
          <div>SKILLS</div>
          <div>
            프로그래밍 언어부터 프레임워크, 도구까지 경험한 기술과 역량을
            정리하였습니다.
          </div>
        </Title>
        <SkillTag>
          {Object.keys(skillData).map((tag) => (
            <div
              key={tag}
              onClick={() => setActiveTab(tag as SkillCategory)}
              className={activeTab === tag ? "active" : ""}
            >
              {tag}
            </div>
          ))}
        </SkillTag>
        <SkillList>
          {skillData[activeTab].map((skill) => (
            <div className="set" key={skill.name}>
              <div className="title">
                <div className="icon">
                  <skill.icon />
                </div>
                <div className="name">{skill.name}</div>
              </div>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: skill.description }}
              />
            </div>
          ))}
        </SkillList>
      </Container>
    </Layout>
  );
};

export default SkillsSection;
const Layout = styled(motion.div)`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: linear-gradient(45deg, #fff 0%, #e2e2e2 100%);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  gap: 30px;

  max-width: 1190px;
  width: 100%;
  height: 100vh;

  text-align: center;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & :nth-child(1) {
    font-size: 50px;
  }
`;

const SkillTag = styled.div`
  display: flex;

  background: #fff;
  border-radius: 5px;

  font-size: 15px;

  div {
    padding: 10px 20px;

    border-radius: 5px;

    &:hover {
      background: #d9d9d9;
    }
    &.active {
      background: #000;
      color: #fff;
    }

    cursor: pointer;
  }
`;

const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(375px, 1fr));
  gap: 16px;
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;

  width: 100%;
  height: 350px;

  .set {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 20px;

    width: 100%;
    height: 200px;

    border-radius: 10px;
    background: #ffffff;

    text-align: start;

    .title {
      display: flex;
      flex-direction: column;
      gap: 13px;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 30px;
        height: 30px;

        border-radius: 7px;
      }
      .name {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
`;
