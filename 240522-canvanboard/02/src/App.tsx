import React from "react";
import styled from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 1066px;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(1, 1fr);
    height: 100%;
  }
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = (info: DropResult) => {
    const { destination, source, draggableId } = info;

    if (destination?.droppableId === source.droppableId) {
      if (!destination) return;
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      if (!destination) return;
      setToDos((oldToDos) => {
        const sourceBoard = [...oldToDos[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...oldToDos[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
