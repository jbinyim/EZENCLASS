import React from "react";
import styled from "styled-components";
import { MovieResult } from "../api";
import { makeImgPath } from "../util";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const ModalBox = styled.div<{ bgPhoto: string }>`
  width: 1280px;
  height: 800px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

interface IItemProps {
  item: MovieResult;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ item, setModal }: IItemProps) => {
  const closeModal = () => [setModal((prev) => !prev)];
  return (
    <Container onClick={closeModal}>
      <ModalBox bgPhoto={makeImgPath(item.backdrop_path)}>
        <h1>{item.title}</h1>
        <p>{item.overview}</p>
      </ModalBox>
    </Container>
  );
};

export default Modal;
