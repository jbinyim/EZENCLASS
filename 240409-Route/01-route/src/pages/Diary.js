import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";
import { getFormattedDate } from "../util";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다....</div>;
  } else {
    const { date, emoitonId, content } = data;

    const title = `${getFormattedDate(new Date(Number(date)))} 기록`;
    return (
      <div>
        <Header
          leftChild={<Button onClick={goBack} text="뒤로가기" />}
          title={title}
          rightChild={<Button onClick={goEdit} text="수정하기" />}
        />
        <Viewer emoitonId={emoitonId} content={content} />
      </div>
    );
  }
};

export default Diary;
