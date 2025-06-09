import { styled } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const BackVinyl = () => {
  const [step, setStep] = useState(0);
  const [hideLayout, setHideLayout] = useState(false);

  const handleStart = () => {
    if (step === 0) setStep(1); // Line 이동
  };

  // Line 이동 끝나면 Top/Bottom 사라지게
  const handleLineAnimationComplete = () => {
    if (step === 1) setStep(2);
  };

  // Top/Bottom exit 애니 끝나면 Layout 숨기기
  const handleExitComplete = () => {
    setHideLayout(true);
  };

  if (hideLayout) return null; // 완전히 숨김

  return (
    <Layout onClick={handleStart}>
      {/* Top */}
      <AnimatePresence onExitComplete={handleExitComplete}>
        {step < 2 && (
          <Top
            as={motion.div}
            initial={{ y: 0, scaleY: 1, opacity: 1 }}
            animate={{ y: 0, scaleY: 1, opacity: 1 }}
            exit={{
              y: ['0%', '-14%', '-100%'],
              scaleY: [1, 1.08, 0.95],
              opacity: [1, 1, 0],
            }}
            transition={{
              y: { duration: 1.2, times: [0, 0.15, 1], ease: [0.4, 0, 0.2, 1] },
              scaleY: { duration: 1.5, times: [0, 0.2, 1] },
              opacity: { duration: 1.5, times: [0, 0.4, 1] },
            }}
          />
        )}
      </AnimatePresence>

      {/* Line */}
      <LineWrapper>
        <Line
          as={motion.div}
          initial={{ x: 0, skewX: 0, scaleY: 1 }}
          animate={
            step > 0
              ? {
                  x: '-100vw',
                  skewX: [0, 14, -8, 0],
                  scaleY: [1, 1.04, 0.96, 1.02, 1],
                }
              : { x: 0, skewX: 0, scaleY: 1 }
          }
          transition={{
            x: { duration: 1.7, ease: [0.8, 0.1, 0.2, 1] },
            skewX: { duration: 1.7, times: [0, 0.25, 0.75, 1] },
            scaleY: { duration: 1.7, times: [0, 0.2, 0.5, 0.8, 1] },
          }}
          onAnimationComplete={handleLineAnimationComplete}
        />
      </LineWrapper>

      {/* Bottom */}
      <AnimatePresence>
        {step < 2 && (
          <Bottom
            as={motion.div}
            initial={{ y: 0, scaleY: 1, opacity: 1 }}
            animate={{ y: 0, scaleY: 1, opacity: 1 }}
            exit={{
              y: ['0%', '18%', '100%'],
              scaleY: [1, 1.13, 0.95],
              opacity: [1, 1, 0],
            }}
            transition={{
              y: { duration: 1.9, times: [0, 0.12, 1], ease: [0.4, 0, 0.2, 1] },
              scaleY: { duration: 1.9, times: [0, 0.2, 1] },
              opacity: { duration: 1.9, times: [0, 0.4, 1] },
            }}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  pointer-events: auto;
`;

const Top = styled.div`
  width: 100%;
  height: 20%;
  background: url('/images/background-vinyl-top.png');
  background-size: cover;
`;

const LineWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
`;

const Line = styled.div`
  width: 100vw;
  height: 15px;
  background: url('/images/background-vinyl-line.png');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
`;

const Bottom = styled.div`
  width: 100%;
  flex: 1;
  background: url('/images/background-vinyl-bottom.png');
`;
