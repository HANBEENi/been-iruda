"use client";

import styled from "styled-components";

interface MenuBarProps {
  activeSection: string;
  onScrollTo: (section: string) => void;
}

const NavBar = ({ activeSection, onScrollTo }: MenuBarProps) => {
  const sections = ["main", "resume", "skills", "projects", "contact"];
  return (
    <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 1009 }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
        {sections.map((section) => (
          <li
            key={section}
            onClick={() => onScrollTo(section)}
            style={{
              cursor: "pointer",
              fontWeight: activeSection === section ? "bold" : "normal",
              color: activeSection === section ? "blue" : "black",
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
