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
  @media (max-width: 1280px) {
  }
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  // const onDragEnd = ({ source, destination, draggableId }: DropResult) => {
  //   if (!destination) return;
  //   // setToDos((oldToDos) => {
  //   //   const copyToDos = [...oldToDos];
  //   //   copyToDos.splice(source.index, 1);
  //   //   copyToDos.splice(destination.index, 0, draggableId);
  //   //   return copyToDos;
  //   // });
  // };
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, source, draggableId } = info;

    if (destination?.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        const copyToDos = [...oldToDos[source.droppableId]];
        copyToDos.splice(source.index, 1);
        copyToDos.splice(destination.index, 0, draggableId);
        return { ...oldToDos, [source.droppableId]: copyToDos };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      if (!destination) return;
      setToDos((oldTodos) => {
        const sourceBoard = [...oldTodos[source.droppableId]];
        const destinationBoard = [...oldTodos[destination?.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, draggableId);
        return {
          ...oldTodos,
          [source.droppableId]: sourceBoard,
          [destination?.droppableId]: destinationBoard,
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
