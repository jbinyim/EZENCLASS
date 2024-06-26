import React, { useContext } from "react";
import { DiaryDispathContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Editer from "../component/Editer";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { onUpdate, onDelete } = useContext(DiaryDispathContext);
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다.")) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };
  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { date, emoitonId, content } = data;
      onUpdate(id, date, emoitonId, content);
      navigate("/");
    }
  };
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button onClick={goBack} text="뒤로가기" />}
          title="일기 수정하기"
          rightChild={
            <Button type="negative" text="삭제하기" onClick={onClickDelete} />
          }
        />
        <Editer initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
