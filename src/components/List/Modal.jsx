import React from "react";
import styled from "styled-components";

export const Modal = ({ onClose }) => {
  return (
    <ModalContainer>
      <div>
        <p onClick={onClose}>X</p>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled("div")`
  width: 600px;
  height: 400px;
  position: fixed;
  z-index: 2;
  top: 40%;
  left: 40%;
  transform: translate(-35%, -35%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 2px grey;
`;
