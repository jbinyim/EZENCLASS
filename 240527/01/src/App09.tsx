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
  justify-content: center;
  align-items: center;
  gap: 200px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  border-radius: 60px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sircle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: #00a5ff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

function App() {
  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };

  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Sircle layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Sircle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;
