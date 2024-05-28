import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  .stop {
    display: block;
    animation: none;
  }
`;

const TextBox = styled.div`
  display: flex;
  gap: 5px;
`;

function App() {
  const [state, setState] = useState(false);
  const [time, setTime] = useState(new Date());
  const onCheck = (e) => {
    setState(e.target.checked);
  };

  useEffect(() => {
    if (state) {
      const animationiteration = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(animationiteration);
    }
  }, [state]);

  return (
    <Container>
      <Spinner
        animation="border"
        variant="light"
        className={!state ? "stop" : ""}
      />

      <div>
        <input type="checkbox" onClick={onCheck} />
        애니메이션 확인
      </div>
      <TextBox>
        <p>animationiteration 발생 : {time.toLocaleTimeString()}</p>
      </TextBox>
    </Container>
  );
}

export default App;
