import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const Result = () => {
  const [resultDate, setResultDate] = useState({});
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");

  useEffect(() => {
    const result = ResultData.find((item) => item.best === mbti);
    setResultDate(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>😸예비집사 판별기 결과😸</Header>
      <Contents>
        <Title>예비 집사님과 찰떡궁합인 고양이는?</Title>
        <LogoImage>
          <img
            className="rounded-circle"
            width={350}
            height={350}
            src={resultDate.image}
            alt="catimg"
          />
        </LogoImage>
        <TitleCat>
          <p>{resultDate.best}</p>
          예비 집사님과 찰떡궁합인 고양이는 <p> "{resultDate.name}"</p>
        </TitleCat>
        <Desc>{resultDate.desc}</Desc>
        <Button onClick={handleClick}>테스트 다시하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

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
  font-size: 25px;
  margin-bottom: 20px;
  padding: 10px 20px;
`;

const TitleCat = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 20px;
  border: none;
  padding: 10px 20px;
  border-radius: 0 8px 0 8px;
`;
