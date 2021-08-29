import React from 'react';
import styled from '@emotion/styled';

type CheckboxProps = JSX.IntrinsicElements['input'];

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: -1px;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`;

HiddenCheckbox.defaultProps = { type: 'checkbox' };

const StyledCheckbox = styled.div<Pick<CheckboxProps, 'checked'>>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ checked }) => (checked ? 'salmon' : 'papayawhip')};
  border-radius: 3px;
  transition: all 150ms;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

/* eslint-disable react/jsx-props-no-spreading */
export function Checkbox({ checked, ...props }: CheckboxProps): JSX.Element {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked} />
    </CheckboxContainer>
  );
}
/* eslint-enable */
