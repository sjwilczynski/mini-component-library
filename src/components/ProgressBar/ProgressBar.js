/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--radius": 4 + "px",
    "--padding": 0,
  },
  medium: {
    "--height": 12 + "px",
    "--radius": 4 + "px",
    "--padding": 0,
  },
  large: {
    "--height": 16 + "px",
    "--radius": 8 + "px",
    "--padding": 4 +"px",
  },
};

const ProgressBar = ({ value, size }) => {
  const normalizedValue = Math.max(0, Math.min(value, 100));
  const sizeStyles = SIZES[size];
  return (
    <>
      <VisuallyHidden id="loadingLabel">Loading progress</VisuallyHidden>
      <Container
        role="progressbar"
        aria-valuenow={normalizedValue}
        aria-labelledby="loadingLabel"
        style={sizeStyles}
      >
        <BarWrapper>
          <Bar
            style={{
              "--value": normalizedValue + "%",
              "--height": sizeStyles["--height"],
            }}
          />
        </BarWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 370px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--radius);
  overflow: hidden;
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  width: var(--value);
  height: var(--height);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
