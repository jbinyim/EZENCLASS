import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "../components/DraggableCard";
import styled from "styled-components";

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

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
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
              <DraggableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
