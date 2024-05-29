import React, { useState } from "react";
import styled from "styled-components";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 250px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const box = {
  start: (back: boolean) => ({
    x: back ? -300 : 300,
    opacity: 0,
    scale: 0,
  }),

  ing: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.1 },
  },

  end: (back: boolean) => ({
    x: back ? 300 : -300,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextplease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };

  const prevplease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back} mode="wait">
        {arr.map((i) =>
          i === visible ? (
            <Box
              key={visible}
              variants={box}
              custom={back}
              initial="start"
              animate="ing"
              exit="end"
            >
              {visible}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <Buttons>
        <button onClick={prevplease}>prev</button>
        <button onClick={nextplease}>next</button>
      </Buttons>
    </Wrapper>
  );
}

export default App;
