// src/components/common/SkillIcons.tsx
import { SkillProps, skillData } from '@/data/skillData';
import { styled } from 'styled-components';

export const SkillIcon = ({ icon, name }: SkillProps) => {
  return (
    <Wrap>
      <Icon>{icon}</Icon>
      <Name>{name}</Name>
    </Wrap>
  );
};

export const SkillForm = Object.entries(skillData).reduce(
  (acc, [key, value]) => {
    acc[key] = <SkillIcon icon={value.icon} name={value.name} />;
    return acc;
  },
  {} as Record<string, JSX.Element>
);

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
`;

const Icon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: white;
`;
