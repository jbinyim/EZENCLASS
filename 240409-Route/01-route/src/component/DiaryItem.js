import React from "react";
import "./DiaryItem.css";
import { getEmotionImgById } from "../util";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const DiaryItem = ({ id, date, emoitonId, content }) => {
  const navigator = useNavigate();
  const goDetail = () => {
    navigator(`/diary/${id}`);
  };
  const goEdit = () => {
    navigator(`/edit/${id}`);
  };
  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={`img_section img_section_${emoitonId}`}
      >
        <img src={getEmotionImgById(emoitonId)} />
      </div>
      <div onClick={goDetail} className="info_section">
        <div className="date_wrapper">
          {new Date(date).toLocaleDateString()}
        </div>
        <div className="content">{content.slice(0, 25)}</div>
      </div>
      <div className="button_section">
        <Button text="수정하기" onClick={goEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;
