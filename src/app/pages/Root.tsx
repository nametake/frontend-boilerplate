import React, { useCallback, useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { Checkbox } from '@/app/components/ui/Checkbox';
import { Input } from '@/app/components/ui/Input';

const Text = styled.div`
  color: hotpink;
`;

export const Root = function Root(): JSX.Element {
  const [checked1, setChecked1] = useState(false);
  const handleChangeCheckbox1 = useCallback(() => {
    setChecked1((c) => !c);
  }, []);

  const [checked2, setChecked2] = useState(false);
  const handleChangeCheckbox2 = useCallback(() => {
    setChecked2((c) => !c);
  }, []);

  // Async test
  useEffect(() => {
    async function p() {
      return Promise.resolve('ASYNC');
    }
    // finally to pass linter
    p().finally(() => {});
  }, []);
  return (
    <div>
      <Input />
      <div>
        <Checkbox checked={checked2} onChange={handleChangeCheckbox2} />
      </div>
      <div>
        <Checkbox
          label="Label text"
          checked={checked1}
          onChange={handleChangeCheckbox1}
        />
      </div>
      <Text>Hello World!</Text>
    </div>
  );
};
