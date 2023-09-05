import React from "react";
// import { Card } from "./Card";
import { NewCard } from "./NewCard";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const ListTitle = () => {
  const { todos = [] } = useSelector((state) => state.todo);
  return (
    <>
      <StyledList>
        {todos.map((item) => (
          <NewItem key={item.id}>{item.title}</NewItem>
        ))}
        <div>
          {/* <Card />  */}
          <NewCard />
        </div>
      </StyledList>
    </>
  );
};

const StyledList = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 30px;
`;

const NewItem = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 360px;
  background-color: #b8b3b3;
  border-radius: 10px;
  padding: 1rem;
`;
