import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/qusetion");
  };
  return (
    <Wrapper>
      <Header>연애 내면 테스트</Header>
      <Contents>
        <LogoImage>
          <img
            className="rounded-circle"
            width={350}
            height={350}
            src="https://test-it.co.kr/img_main199.png"
            alt="catimg"
          />
        </LogoImage>
        <Button onClick={handleClick}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background: #ffeded;
`;

const Header = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffa07a;
  padding: 10px 20px;
  border-radius: 8px;
  color: #fff;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  margin: 10px 0 10px;
`;

const Button = styled.button`
  font-size: 20px;
  background: #fff582;
  border: none;
  padding: 10px 20px;
  border-radius: 0 8px 0 8px;
`;
