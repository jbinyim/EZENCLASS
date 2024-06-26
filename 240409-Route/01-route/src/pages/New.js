import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editer from "../component/Editer";
import { setPageTitle } from "../util";
import { DiaryDispathContext } from "../App";

const New = () => {
  useEffect(() => {
    setPageTitle("새 일기 쓰기");
  }, []);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { onCreate } = useContext(DiaryDispathContext);

  const onSubmit = (data) => {
    const { date, emoitonId, content } = data;
    onCreate(date, emoitonId, content);
    navigate("/");
  };

  return (
    <div>
      <Header
        leftChild={<Button onClick={goBack} text="뒤로가기" />}
        title="새 일기 쓰기"
      />
      <Editer onSubmit={onSubmit} />
    </div>
  );
};

export default New;
