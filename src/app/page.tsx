'use client';

import { Footer } from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { S01_Intro } from '@/components/sections/S01.Intro';
import { S02_MusicMe } from '@/components/sections/S02.MusicMe';
import { S03_Projects } from '@/components/sections/S03.Projects';
import { S04_Skills } from '@/components/sections/S04.Skills';
import { S05_Contact } from '@/components/sections/S05.Contact';
import { styled } from 'styled-components';

const HomePage = () => {
  return (
    <Layout>
      {/* 헤더 */}
      <Header />

      <S01_Intro />
      <S02_MusicMe />
      <S03_Projects />
      <S04_Skills />
      <S05_Contact />

      {/* 푸터 */}
      <Footer />
    </Layout>
  );
};
export default HomePage;

const Layout = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100vw;
  height: 100vh;
`;
