import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  box-shadow: 0px 3px 6px 0px #424a531f;
  color: #000;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({ toDo, index }: IDraggableCardProps) => {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
