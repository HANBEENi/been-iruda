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
          style={{
            background: `url(${project.thumbnail})`,
            backgroundSize: '120%',
            backgroundPosition: 'center',
          }}
        ></ThumbWrap>
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
  border: ${({ $active }) =>
    $active ? '3px solid white' : '1px solid #383838'};
  border-radius: 7px;
  width: 60px;
  height: 60px;
  overflow: hidden;
  cursor: pointer;
  transform: ${({ $active }) => ($active ? 'scale(1.2)' : 'scale(0.9)')};
  transition: all 0.3s ease-in-out;
  background-size: cover;
  background-position: center;
  opacity: ${({ $active }) => ($active ? '1' : '0.5')};
`;
