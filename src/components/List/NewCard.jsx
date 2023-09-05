import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, addCard } from "../../store/slices/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import styled from "styled-components";

export const NewCard = ({ type, parentId }) => {
  const [value, setValue] = useState("");
  const [formIsOpen, setFormIsOpen] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (type) {
      dispatch(
        addCard({
          id: nanoid(),
          title: value,
          parentId: parentId,
        })
      );
    } else {
      dispatch(
        addTodo({
          id: nanoid(),
          title: value,
        })
      );
    }
    closeForm();

    setValue("");
  };

  const updateInputvalue = (e) => {
    setValue(e.target.value);
  };

  const openForm = () => {
    setFormIsOpen(true);
  };

  const closeForm = () => {
    setFormIsOpen(false);
  };

  return (
    <TodoCard>
      <button onClick={openForm}>
        + Добавить
        {type ? " карточку" : " список"}
      </button>

      {formIsOpen && (
        <form onSubmit={submitHandler}>
          <input type="text" value={value} onChange={updateInputvalue} />
          <StyledButton>
            <button onClick={submitHandler}>
              {type ? "Добавить карточку" : "Добавить список"}
            </button>
            <span onClick={closeForm}>X</span>
          </StyledButton>
        </form>
      )}
    </TodoCard>
  );
};

const TodoCard = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  background-color: #b8b3b3;
  border-radius: 10px;
  padding: 1rem;

  & > button {
    border: none;
    border-radius: 10px;
    padding: 6px;
    height: 35px;
    background-color: #b8b3b3;
    color: #f1ebeb;
  }

  & > form > input {
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: none;
  }
`;

const StyledButton = styled("div")`
  margin-top: 20px;
  & > button {
    background-color: #3040f5;
    border: none;
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
  }

  & > span {
    color: #454343;
    font-size: 1.3rem;
    font-weight: 700;
    margin-left: 20px;
  }
`;
