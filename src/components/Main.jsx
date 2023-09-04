import React, { useState } from "react";
import { Header } from "./Header";
import styled from "styled-components";
import { TodoForm } from "./TodoForm";

export const Main = ({ onLogOut }) => {
  const [value, setValue] = useState("");

  const addTodoCard = (e) => {
    setValue(e.target.value);
    if (setValue.length !== 0) {
      return <TodoForm />;
    }
  };

  return (
    <div>
      <HeaderContainer>
        <Header />
        <button onClick={onLogOut}>Log Out</button>
      </HeaderContainer>
      <main>
        <StyledInput
          type="text"
          placeholder="+ Добавить список"
          value={value}
          onChange={addTodoCard}
        />
      </main>
    </div>
  );
};

const HeaderContainer = styled("header")`
  display: flex;
  align-items: center;
  & > button {
    margin-left: -150px;
    width: 90px;
    height: 30px;
    border-radius: 10px;
    background-color: #a7a7d3;
    color: white;
    border: none;
    padding: 5px 10px;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const StyledInput = styled("input")`
  width: 250px;
  height: 45px;
  border-radius: 8px;
  background-color: #383a3a;
  color: white;
  border: none;
  margin: 1rem;
  padding: 5px 15px;
  font-size: 1rem;
  opacity: 0.5;
`;
