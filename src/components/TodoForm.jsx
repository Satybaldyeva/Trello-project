import React from "react";
import styled from "styled-components";

export const TodoForm = ({ value }) => {
  return (
    <StyledForm action="">
      <h1>{value}</h1>
    </StyledForm>
  );
};

const StyledForm = styled("form")`
  padding: 1rem;
  width: 28%;
  background-color: black;
  margin: 1rem;
  border-radius: 10px;
`;
