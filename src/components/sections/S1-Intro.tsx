'use client';

/* Intro 섹션 */

import SectionLayout from '../layout/SectionLayout';
import LpCover from '../layout/LpCoverLayout';

const Intro = () => {
  return (
    <SectionLayout
      middleContents={<LpCover backgroundImage="/images/lp-cover-main.png" />}
    />
  );
};

export default Intro;
