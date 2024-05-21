import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";

interface IForm {
  toDo: string;
}

const CreateTodo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "To_Do" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form
      onSubmit={handleSubmit(handleValid)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <input
        {...register("toDo", { required: "please write a todo" })}
        type="text"
        placeholder="wirte a todo..."
      />
      <button>Add</button>
    </form>
  );
};

export default CreateTodo;
