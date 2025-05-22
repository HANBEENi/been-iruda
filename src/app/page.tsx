'use client';

import Header from '@/components/common/Header';
import { S01_Intro } from '@/components/sections/S01.Intro';
import { S02_MusicMe } from '@/components/sections/S02.MusicMe';
import { S03_Projects } from '@/components/sections/S03.Projects';
import { styled } from 'styled-components';

const HomePage = () => {
  return (
    <Layout>
      {/* 헤더 */}
      <Header />

      <S01_Intro />
      <S02_MusicMe />
      <S03_Projects />
    </Layout>
  );
};
export default HomePage;

const Layout = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  overflow: scroll;

  width: 100%;
  height: 100vh;
`;
