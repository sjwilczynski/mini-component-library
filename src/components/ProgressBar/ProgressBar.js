/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--border": "none",
  },
  medium: {
    "--height": 12 + "px",
    "--border": "none",
  },
  large: {
    "--height": 24 + "px",
    "--border": `4px solid ${COLORS.transparentGray15}`,
  },
};

const ProgressBar = ({ value, size }) => {
  const normalizedValue = Math.max(0, Math.min(value, 100));
  const sizeStyles = SIZES[size];
  return (
    <>
      <VisuallyHidden id="loadingLabel">Loading progress</VisuallyHidden>
      <Wrapper
        role="progressbar"
        aria-valuenow={normalizedValue}
        aria-labelledby="loadingLabel"
        style={sizeStyles}
      >
        <Content style={{ "--value": normalizedValue + "%" }} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border: var(--border);
  border-radius: 8px;
  overflow: hidden;
`;

const Content = styled.div`
  width: var(--value);
  background-color: ${COLORS.primary};
  height: 100%;
`;

export default ProgressBar;
