import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;

  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

function App() {
  const x = useMotionValue(0);
  const test = useTransform(x, [-800, 0, 800], [2, 1, 0]);
  // const gradient = useTransform(
  //   x,
  //   [-800, 0, 800],
  //   ["linear-gradient(135deg rgba(0,210,238),rgba(0,83,238)"]
  // );
  useEffect(() => {
    x.on("change", () => console.log(x.get()));
  }, [x]);
  return (
    <Wrapper>
      {/* <button onClick={() => x.set(200)}>click me</button> */}
      <Box style={{ x, scale: test }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
