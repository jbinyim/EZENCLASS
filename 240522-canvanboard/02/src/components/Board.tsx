import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "../components/DraggableCard";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: #424a531f;
  box-shadow: 0px 3px 6px 0px #424a531f;
  border-radius: 5px;
  width: 348px;
  min-height: 588px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1080px) {
    margin: 0 auto;
    width: 350px;
    min-height: 450px;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #000;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Area = styled.div<IAreaProps>`
  background: ${(props) =>
    props.isDraggingOver
      ? "blue"
      : props.isDraggingFromThis
      ? "#fff"
      : "#f5f7fa"};
  flex-grow: 1;
  padding: 10px;
  transition: all 0.3s ease-in-out;
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
    height: 40px;
    padding-left: 10px;
  }
`;

interface IBoardProps {
  toDos: IToDo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoarads) => {
      return {
        ...allBoarads,
        [boardId]: [...allBoarads[boardId], newTodo],
      };
    });
    setValue("toDo", "");
  };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add Task on ${boardId}`}
        />
      </Form>
    </Wrapper>
  );
};

export default Board;
