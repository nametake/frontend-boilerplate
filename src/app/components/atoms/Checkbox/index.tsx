import React from 'react';

type CheckboxProps = { text: string };

export function Checkbox({ text }: CheckboxProps): JSX.Element {
  return <div>template {text}</div>;
}
