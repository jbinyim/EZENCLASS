import React, { useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./Todoitem.css";

const Todoitem = ({ id, isDone, content, createDate }) => {
  console.log(`${id} todoitem 업데이트`);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onclickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="Todoitem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onclickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default React.memo(Todoitem);
