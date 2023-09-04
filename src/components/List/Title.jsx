import React from "react";
import { useState } from "react";
import styled from "styled-components";

export const Title = () => {
  const [open, setOpen] = useState("");
  const [title, setTitle] = useState("");
  return (
    <div>
      {open ? (
        <div>
          <StyledTitle
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={(e) => setOpen(e.preventDefault())}
          />
        </div>
      ) : (
        <div onClick={() => setOpen(!open)}>Todo</div>
      )}
    </div>
  );
};

const StyledTitle = styled("input")`
  background-color: #6a6868;
  border: none;
  width: 200px;
  height: 30px;
  border-radius: 8px;
`;
