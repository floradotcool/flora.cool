import React from "react";
import VisuallyHidden from "@reach/visually-hidden";
import styled from "styled-components";

import Avatar from "components/Avatar";
import { COLORS } from "constants.js";

const Bubble = ({ dragged, onClick }) => {
  const handleClick = () => !dragged && onClick();

  return (
    <FloatingButton data-draghandle onClick={handleClick}>
      <VisuallyHidden>Open chat</VisuallyHidden>
      <Avatar />
    </FloatingButton>
  );
};

const FloatingButton = styled.button`
  background: none;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: block;
  filter: drop-shadow(2px 4px 8px hsl(0deg 0% 0% / 0.6));
  margin: 0;
  padding: 0;
  pointer-events: initial;
  position: relative;
  transform: translate(-50%, -50%);
  z-index: 2;

  &:focus {
    outline: 2px solid ${COLORS.primaryLight};
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

export default Bubble;
