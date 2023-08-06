import React, { useEffect, useState } from 'react';

import { useArray } from 'react-hanger';

type DataType = {
  id: string;
  text: string;
};

export const NoReducer = function NoReducer(): JSX.Element {
  const data = useArray<DataType>([]);
  const removeTargets = useArray<string>([]);

  // eslint-disable-next-line no-console
  console.log('data:', data.value);
  // eslint-disable-next-line no-console
  console.log('removeTargets:', removeTargets.value);

  useEffect(() => {
    setTimeout(() => {
      data.setValue([
        { id: '1', text: 'one' },
        { id: '2', text: 'two' },
        { id: '3', text: 'three' },
      ]);
    }, 1000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTextInputFn =
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      return data.setValue((prev) =>
        prev.map((d) => (d.id === id ? { ...d, text: value } : d))
      );
    };

  const handleRemoveButtonFn = (id: string) => () => {
    data.setValue((prev) => prev.filter((d) => d.id !== id));
    removeTargets.push(id);
  };

  const [addInput, setAddInput] = useState<string>('');
  const handleAddInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAddInput(value);
  };

  const handleAddButton = () => {
    const id = Date.now().toString();
    data.push({ id, text: addInput });
    setAddInput('');
  };

  return (
    <div>
      <div>no reducer</div>
      {data.value.map((d) => (
        <div key={d.id}>
          <span>{d.id}</span>
          <input defaultValue={d.text} onChange={handleTextInputFn(d.id)} />
          <button type="button" onClick={handleRemoveButtonFn(d.id)}>
            remove
          </button>
        </div>
      ))}
      <div>
        <input value={addInput} onChange={handleAddInput} />
        <button type="button" onClick={handleAddButton}>
          add
        </button>
      </div>
    </div>
  );
};
