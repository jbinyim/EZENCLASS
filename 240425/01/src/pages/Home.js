import React from "react";
import styled from "styled-components";
import catImage from "../assets/cat/abyssinian.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fffacd;
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
`;

const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  margin: 10px 0 10px;
`;

const Desc = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 20px;
  border: none;
  padding: 10px 20px;
  border-radius: 0 8px 0 8px;
`;

const Home = () => {
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img
            className="rounded-circle"
            width={350}
            height={350}
            src={catImage}
            alt="catimg"
          />
        </LogoImage>
        <Desc>Mpti 기반으로 하는 고양이 찾기</Desc>
        <Button>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
