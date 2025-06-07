// src/components/common/SkillIcons.tsx
import { SkillIconProps, skillIconData } from '@/data/skillIconData';
import { media } from '@/styles/mediaQuery';
import { styled } from 'styled-components';

export const SkillIcon = ({ icon, name }: SkillIconProps) => {
  return (
    <Wrap>
      <Icon>{icon}</Icon>
      <Name>{name}</Name>
    </Wrap>
  );
};

export const SkillForm = Object.entries(skillIconData).reduce(
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

  width: fit-content;

  ${media.mobile} {
    padding: 3px 5px;
  }
`;

const Icon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;

  ${media.mobile} {
    width: 15px;
    height: 15px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: white;

  ${media.mobile} {
    font-size: 10px;
  }
`;
