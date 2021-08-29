import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Input } from '@/app/components/atoms/Input';
import { Checkbox } from '@/app/components/atoms/Checkbox';

const Text = styled.div`
  color: hotpink;
`;

export function App(): JSX.Element {
  const [checked, setChecked] = useState(false);
  const handleChangeCheckbox = useCallback(() => {
    setChecked((c) => !c);
  }, []);

  // Async test
  useEffect(() => {
    async function p() {
      return Promise.resolve('ASYNC');
    }
    // finally to pass linter
    p().finally(() => { });
  }, []);
  return (
    <div>
      <Input />
      <Checkbox checked={checked} onChange={handleChangeCheckbox} />
      <Text>Hello World!</Text>
    </div>
  );
}
