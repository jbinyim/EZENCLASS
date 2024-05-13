import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Container>
      <Box>
        <Emoji>😎</Emoji>
      </Box>
      <Emoji>😣</Emoji>
      {/* <Input />
      <Input />
      <Input />
      <Input /> */}
      {/* <Btn>로그인</Btn>
      <Btn as="a" href="https://www.naver.com">
        로그아웃
      </Btn> */}
      {/* <Box bgColor="teal">
        <Text>hello</Text>
      </Box>
      <Circle bgColor="tomato"></Circle> */}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 8px;
  background-color: ${(props) => props.theme};
`;

// const Box = styled.div`
//   background: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Text = styled.span`
//   color: #fff;
// `;

// const Circle = styled(Box)`
//   border-radius: 100%;
// `;

// const Btn = styled.button`
//   background: tomato;
//   color: #fff;
//   border: none;
//   border-radius: 44px;
//   width: 100px;
//   height: 50px;
//   text-decoration: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 18px;
// `;

// const Input = styled.input.attrs({ required: true })`
//   background: tomato;
// `;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 
 50% {
    transform: rotate(360deg);
    border-radius: 200px;
  }
  100% {
    transform: rotate(-360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  animation: ${rotationAnimation} 1s linear infinite;
  width: 200px;
  height: 200px;
  background: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    font-size: 36px;
    transition: all 0.3s;
    &:hover {
      font-size: 50px;
    }
    &.active {
      opacity: 0;
    }
  }
`;
