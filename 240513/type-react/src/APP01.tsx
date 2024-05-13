import React, { useState } from "react";
import styled, { Styled } from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  width: 100%;
  height: 100vh;
`;

const APP01 = () => {
  const [value, setValue] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          type="text"
          placeholder="username"
          onChange={onChange}
        />
      </form>
      <p>{value}</p>
    </Container>
  );
};

export default APP01;
