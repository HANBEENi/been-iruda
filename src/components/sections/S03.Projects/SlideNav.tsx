// src/components/sections/S3-Projects/SlideNav.tsx

import styled from 'styled-components';

interface SlideNavProps {
  projects: {
    id: string;
    thumbnail: string;
  }[];
  current: number;
  onClick: (index: number) => void;
}

const SlideNav = ({ projects, current, onClick }: SlideNavProps) => {
  return (
    <Nav>
      {projects.map((project, idx) => (
        <ThumbWrap
          key={project.id}
          $active={idx === current}
          onClick={() => onClick(idx)}
        >
          <ThumbImage src={project.thumbnail} alt={project.id} />
        </ThumbWrap>
      ))}
    </Nav>
  );
};

export default SlideNav;

const Nav = styled.div`
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1000;
`;

const ThumbWrap = styled.button<{ $active: boolean }>`
  border: ${({ $active }) => ($active ? '3px solid white' : '1px solid gray')};
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  transform: ${({ $active }) => ($active ? 'scale(1.1)' : 'scale(1)')};
  transition: all 0.3s ease-in-out;
`;

const ThumbImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  display: block;
`;
