import React from 'react';
import styled from '@emotion/styled';

type CheckboxProps = { label?: string } & JSX.IntrinsicElements['input'];

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

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
`;

const StyledCheckbox = styled.div<Pick<CheckboxProps, 'checked'>>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ checked }) => (checked ? 'salmon' : 'papayawhip')};
  border-radius: 3px;
  line-height: 0;
  transition: all 150ms;

  ${/* sc-selector */ HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${/* sc-selector */ Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const LabelText = styled.span`
  margin-left: 4px;
`;

/* eslint-disable react/jsx-props-no-spreading */
export function Checkbox({
  label,
  checked,
  ...props
}: CheckboxProps): JSX.Element {
  return (
    <Label>
      <CheckboxContainer>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20,6 9,17 4,12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      {label && <LabelText>{label}</LabelText>}
    </Label>
  );
}
/* eslint-enable */
