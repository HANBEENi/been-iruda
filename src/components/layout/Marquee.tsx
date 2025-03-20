import { styled } from 'styled-components';

const Marquee = ({ $arrow }: { $arrow: 'right' | 'left' }) => {
  return (
    <MarqueeContainer>
      <MarqueeContent $arrow={$arrow}>
        <MarqueeInner>
          {'REACT • NEXT.JS • TYPESCRIPT • UI/UX DESIGN • BUILDING USER-CENTRIC EXPERIENCES • CODE WITH PASSION, DEPLOY WITH CONFIDENCE • PERFORMANCE OPTIMIZATION • CLEAN CODE • '.repeat(
            5
          )}
        </MarqueeInner>
        <MarqueeInner>
          {'REACT • NEXT.JS • TYPESCRIPT • UI/UX DESIGN • BUILDING USER-CENTRIC EXPERIENCES • CODE WITH PASSION, DEPLOY WITH CONFIDENCE • PERFORMANCE OPTIMIZATION • CLEAN CODE • '.repeat(
            5
          )}
        </MarqueeInner>
      </MarqueeContent>
    </MarqueeContainer>
  );
};
export default Marquee;

const MarqueeContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  z-index: 1004;

  width: 100%;
  height: 25px;

  background: ${({ theme }) => theme.marquee.background};
`;

const MarqueeContent = styled.div<{ $arrow: 'right' | 'left' }>`
  display: flex;
  padding-right: 20px;

  width: max-content;

  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

  /* ✅ 마퀴 애니메이션 */
  animation: ${({ $arrow }) =>
      $arrow === 'right' ? 'marqueeRight' : 'marqueeLeft'}
    /* 40s linear infinite; */ 70s linear infinite;

  @keyframes marqueeLeft {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @keyframes marqueeRight {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

const MarqueeInner = styled.div`
  display: flex;
  white-space: nowrap;
  text-transform: uppercase;
  padding-right: 20px;

  color: ${({ theme }) => theme.marquee.color};
  font-size: 14px;
  font-weight: bold;
`;
