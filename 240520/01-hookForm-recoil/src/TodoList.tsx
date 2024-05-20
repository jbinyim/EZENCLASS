import React, { useState } from "react";
import { useForm } from "react-hook-form";

// event가 발생하면, target도 존재하고 currentTarget
// currentTarget : event 핸들러가 바인딩되어 있는 value값을 찾아오고자 할 떄
// target : 실제 event가 발생된 요소의 value값을 찾아오고자 할 떄
// React.js에서는 currentTarget을 사용해서 value값을 찾을떄에는 Formevent
// target을 사용해서 value값을 찾고자 할 때에는 changeEvent

const TodoList = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(watch());

  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "10px",
        }}
      >
        <input
          {...register(`email`, {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/gm,
              message: "Only naver.com emails allowed",
            },
          })}
          type="email"
          placeholder="email"
        />
        <input
          {...register(`firstname`, { required: true })}
          type="text"
          placeholder="firstname"
        />
        <input
          {...register(`lastname`, { required: true })}
          type="text"
          placeholder="lastname"
        />
        <input
          {...register(`username`, { required: true, minLength: 10 })}
          type="text"
          placeholder="username"
        />
        <input
          {...register(`password`, {
            required: "your ps is too short",
            minLength: {
              value: 5,
              message: "your ps is too short",
            },
          })}
          type="password"
          placeholder="Wpassword"
        />
        <span>{errors.password?.message as string}</span>
        <input
          {...register(`password1`, {
            required: "password is required",
            minLength: {
              value: 5,
              message: "password is required",
            },
          })}
          type="password"
          placeholder="password1"
        />
        <span>{errors.password1?.message as string}</span>
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
