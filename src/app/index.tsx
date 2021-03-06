import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Input } from '@/app/components/atoms/Input';

const Text = styled.div`
  color: hotpink;
`;

export function App(): JSX.Element {
  // Async test
  useEffect(() => {
    async function p() {
      return Promise.resolve();
    }
    p();
  }, []);
  return (
    <div>
      <Input />
      <Text>Hello World!</Text>
    </div>
  );
}
