/* 섹션 관리 */

'use client';

import { createContext, useContext, useState } from 'react';

type SectionContextType = {
  currentSection: string;
  setCurrentSection: (id: string) => void;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentSection, setCurrentSection] = useState('intro');

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};
