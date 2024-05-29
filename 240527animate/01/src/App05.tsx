import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 200vh;
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
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    scrollY.on("change", () =>
      console.log(scrollY.get(), scrollYProgress.get())
    );
  }, [scrollY, scrollYProgress]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  const x = useMotionValue(0);

  useEffect(() => {
    x.on("change", () => console.log(x.get()));
  }, [x]);
  return (
    <Wrapper>
      {/* <button onClick={() => x.set(200)}>click me</button> */}
      <Box style={{ x, scale: scrollYProgress }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
