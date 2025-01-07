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
import { debounce } from "lodash";

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

  // SkillList 컨테이너와 각 스킬 항목의 ref
  const skillListRef = useRef<HTMLDivElement | null>(null);
  const skillRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // SkillList 내 특정 항목으로 스크롤
  const scrollToSkill = (skillName: string) => {
    const skillList = skillListRef.current;
    const target = skillRefs.current[skillName];

    if (skillList && target) {
      // SkillList 내에서의 상대적인 위치 계산
      const offsetTop = target.offsetTop - skillList.offsetTop;

      // 스크롤 이동
      skillList.scrollTo({ top: offsetTop, behavior: "smooth" });

      // 디버깅: 계산된 값 확인
      console.log("target.offsetTop:", target.offsetTop);
      console.log("skillList.offsetTop:", skillList.offsetTop);
      console.log("Calculated offsetTop:", offsetTop);
    }
  };

  return (
    <Layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Title>TECH SKILLS</Title>
        <SkillTag>
          {Object.keys(skillData).map((tag) => (
            <div
              key={tag}
              onClick={() => setActiveTab(tag as SkillCategory)}
              className={activeTab === tag ? "active" : ""}
            >
              {tag}
              <div className="tagLength">10</div>
            </div>
          ))}
        </SkillTag>
        <PreviewSkills>
          {skillData[activeTab].map((skill) => (
            <div
              className="icon"
              key={skill.name}
              onClick={() => scrollToSkill(skill.name)}
            >
              <skill.icon />
              <div className="name">{skill.name}</div>
            </div>
          ))}
        </PreviewSkills>
        <SkillList ref={skillListRef}>
          {skillData[activeTab].map((skill) => (
            <div
              className="set"
              key={skill.name}
              ref={(el) => {
                skillRefs.current[skill.name] = el;
              }}
            >
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

  background-image: url("images/I11_Etc/backgroundVinyl2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

  font-size: 20px;
  font-weight: bold;
`;

const SkillTag = styled.div`
  display: flex;

  background: #fff;
  border-radius: 5px;

  font-size: 15px;

  div {
    padding: 10px 20px;
    position: relative;

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
  .tagLength {
    position: absolute;
    top: -10px;
    right: 10px;
    padding: 2px;

    border-radius: 20px;
    background: #e0e0e0;

    color: #fff;
    font-size: 13px;
  }
`;

const PreviewSkills = styled.div`
  display: flex;
  gap: 30px;
  svg {
    width: 30px;
    height: 30px;

    cursor: pointer;
  }
  .icon {
    position: relative;
    &:hover {
      .name {
        display: unset;
      }
    }
  }
  .name {
    display: none;
    position: absolute;
    bottom: -15px;
    left: 15px;
    padding: 5px 10px;
    z-index: 2;

    background: #fff;
    border-radius: 3px;

    color: #000;
  }
`;

const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(375px, 1fr));
  gap: 16px;
  overflow-y: scroll;
  overflow-x: hidden;

  width: 100%;
  height: 350px;

  /* 스크롤바 항상 표시 */
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #c1c1c1 transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

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
