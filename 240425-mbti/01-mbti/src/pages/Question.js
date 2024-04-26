import React, { useState } from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";
import { createSearchParams, useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  const [questionNum, setQuestionNum] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const handleClickBtn = (num, type) => {
    const newScore = totalScore.map((item) =>
      item.id === type ? { id: item.id, score: item.score + num } : item
    );
    setTotalScore(newScore);
    if (QuestionData.length !== questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    }
  };

  return (
    <div>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNum / QuestionData.length) * 100}
      />
      <Wrapper>
        <div>
          <Title>{QuestionData[questionNum].title}</Title>
          <ButtonGroup>
            <Button
              onClick={() => handleClickBtn(1, QuestionData[questionNum].type)}
              style={{ width: "400px", height: "200px", fontSize: "18px" }}
            >
              {QuestionData[questionNum].answera}
            </Button>
            <Button
              onClick={() => handleClickBtn(0, QuestionData[questionNum].type)}
              style={{ width: "400px", height: "200px", fontSize: "18px" }}
            >
              {QuestionData[questionNum].answerb}
            </Button>
          </ButtonGroup>
        </div>
      </Wrapper>
    </div>
  );
};

export default Question;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fffacd;
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
