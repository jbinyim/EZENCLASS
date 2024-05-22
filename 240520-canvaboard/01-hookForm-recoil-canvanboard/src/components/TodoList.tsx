import React from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import { toDoState, toDoSelector, categoryState, categories } from "./atoms";
import Todo from "./Todo";

const TodoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>Todo's</h1>
      <hr />
      <CreateTodo />
      <select value={category} onInput={onInput}>
        <option value={categories.To_Do}>ToDo</option>
        <option value={categories.Doing}>Doing</option>
        <option value={categories.Done}>Done</option>
      </select>
      {toDos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
      {/* <h2>ToDo</h2>
      <ul>
        {todo.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul> */}
    </div>
  );
};

export default TodoList;
