import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { Modal } from "./Modal";
export const Card = ({ cardInfo }) => {
  const [modalIsValid, setModalIsValid] = useState(false);

  const toggleModalHandler = () => {
    setModalIsValid(false);
  };
  return (
    <>
      <StyledCard onClick={() => setModalIsValid(true)}>
        {cardInfo.title}
      </StyledCard>

      {modalIsValid
        ? ReactDOM.createPortal(
            <Modal onClose={toggleModalHandler} />,
            document.getElementById("modal")
          )
        : null}
    </>
  );
};

const StyledCard = styled("div")`
  background-color: #eae6e1;
  height: 40px;
  padding: 10px;
  border-radius: 6px;
  color: #363434;
  font-size: 1rem;
  box-shadow: 2px 3px 3px gray;
`;
