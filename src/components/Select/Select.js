import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <CustomSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} />
        </IconWrapper>
      </CustomSelect>
    </Wrapper>
  );
};

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto 0;
  height: 24px;
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const CustomSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 16px 12px;
  padding-right: 48px;
  border-radius: 8px;
  font-size: 1rem;

  ${NativeSelect}:focus + & {
    outline: 2px solid black;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
