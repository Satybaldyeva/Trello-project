import React from "react";
import styled from "styled-components";
import { Title } from "./Title";

export const List = () => {
  return (
    <div>
      <StyledList>
        <Title />
        <p>...</p>
      </StyledList>
    </div>
  );
};

const StyledList = styled("div")`
  width: 250px;
  height: 40px;
  border-radius: 8px;
  background-color: #383a3a;
  color: white;
  border: none;
  margin: 1rem;
  padding: 10px 15px;
  font-size: 1rem;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > p {
    font-size: 1.3rem;
    font-weight: 800;
    margin-left: 150px;
    margin-top: -20px;
  }
`;
