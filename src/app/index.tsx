import React from 'react';
import styled from '@emotion/styled';
import { Input } from '@/app/components/atoms/Input';

const Text = styled.div`
  color: hotpink;
`;

export const App: React.FC = () => {
  return (
    <div>
      <Input />
      <Text>Hello World!</Text>
    </div>
  );
};
