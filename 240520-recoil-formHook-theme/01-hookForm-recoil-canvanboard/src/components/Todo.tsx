import React from "react";
import { IToDo, toDoState, categories } from "./atoms";
import { useSetRecoilState } from "recoil";

// React 에서는 가상돔을 사용하다 보니 target보다는 currentTarget 값을 찾오는것이 보다 효율적

const Todo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      const oldTodo = oldToDos[targetIndex];
      const newToDo = { id, text, category: name as any };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== categories.To_Do && (
        <button name={categories.To_Do} onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== categories.Doing && (
        <button name={categories.Doing} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== categories.Done && (
        <button name={categories.Done} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
