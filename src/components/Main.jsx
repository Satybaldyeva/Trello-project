import React from "react";
import { Header } from "./Header";
import styled from "styled-components";

export const Main = ({ onLogOut }) => {
  return (
    <div>
      <HeaderContainer>
        <Header />
        <button onClick={onLogOut}>Log Out</button>
      </HeaderContainer>
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
