import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <h1>Trello</h1>
        <List>
          <li>Рабочие пространства</li>
          <li>Недавние</li>
          <li>В избранном</li>
          <li>Шаблоны</li>
          <button>Создать</button>
        </List>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled("div")`
  padding: 1.2rem;
  width: 98%;
  height: 80px;
  display: flex;
  background-color: #414545;
  color: white;
  & > nav {
    display: flex;
  }
`;

const List = styled("ul")`
  display: flex;
  list-style: none;
  gap: 2.2rem;
  align-items: center;
`;
