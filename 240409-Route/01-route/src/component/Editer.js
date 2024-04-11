import "./Editer.css";
import { getFormattedDate, emotionList } from "../util";
import Button from "./Button";
import EmotionItem from "./EmotionItem";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Editer = ({ initData, onSubmit }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emoitionId: "3",
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(initData.date)),
      });
    }
  }, [initData]);

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };
  const handleChangeEmotion = (emoitionId) => {
    setState({
      ...state,
      emoitionId,
    });
  };
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };
  const handleSubmit = () => {
    onSubmit(state);
  };
  const handleOnGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emoitionId === it.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text="취소하기" onClick={handleOnGoBack} />
        <Button text="작성완료" type="positive" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editer;
