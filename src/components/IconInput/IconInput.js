import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const inputSizes = {
  small: {
    "--height": 24 / 16 + "rem",
    "--paddingLeft": "24px",
    "--fontSize": 14 / 16 + "rem",
  },
  large: {
    "--height": 36 / 16 + "rem",
    "--paddingLeft": "36px",
    "--fontSize": 18 / 16 + "rem",
  },
};

const iconSizes = {
  small: 16,
  large: 24,
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const inputSize = inputSizes[size];
  const iconSize = iconSizes[size];

  return (
    <Container style={{ ...inputSize, "--width": width + "px" }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={iconSize}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <Input
        style={{ ...inputSize, "--width": width + "px" }}
        type="text"
        {...delegated}
      />
    </Container>
  );
};

const Container = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--paddingLeft);
  font-size: var(--fontSize);
  border: none;
  border-bottom: 2px solid ${COLORS.black};
  color: inherit;

  outline-offset: 4px;

  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  height: ${(p) => p.size}px;
`;

export default IconInput;
