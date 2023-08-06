import React, { useEffect, useReducer } from 'react';

type DataType = {
  id: string;
  text: string;
};

type State = {
  data: DataType[];
  removeTargets: string[];
  addInput: string;
};

const initState: State = {
  data: [],
  removeTargets: [],
  addInput: '',
};

type Action =
  | { type: 'COMPLETED_DATA_FETCH'; data: DataType[] }
  | { type: 'EDIT_INPUT'; id: string; value: string }
  | { type: 'CLICK_REMOVE_BUTTON'; id: string }
  | { type: 'EDIT_ADD_INPUT'; value: string }
  | { type: 'CLICK_ADD_BUTTON' };

const reducer = (prev: State, action: Action): State => {
  switch (action.type) {
    case 'COMPLETED_DATA_FETCH':
      return { ...prev, data: action.data };
    case 'CLICK_REMOVE_BUTTON':
      return {
        ...prev,
        data: prev.data.filter((d) => d.id !== action.id),
        removeTargets: [...prev.removeTargets, action.id],
      };
    case 'EDIT_INPUT':
      return {
        ...prev,
        data: prev.data.map((d) =>
          d.id === action.id ? { ...d, text: action.value } : d
        ),
      };
    case 'EDIT_ADD_INPUT':
      return {
        ...prev,
        addInput: action.value,
      };
    case 'CLICK_ADD_BUTTON':
      return {
        ...prev,
        data: [
          ...prev.data,
          { id: Date.now().toString(), text: prev.addInput },
        ],
        addInput: '',
      };
    default: {
      const exhaustiveCheck: never = action;
      return exhaustiveCheck;
    }
  }
};

export const Reducer = function Reducer(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initState);

  // eslint-disable-next-line no-console
  console.log('state:', state);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'COMPLETED_DATA_FETCH',
        data: [
          { id: '1', text: 'one' },
          { id: '2', text: 'two' },
          { id: '3', text: 'three' },
        ],
      });
    }, 1000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTextInputFn =
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      dispatch({ type: 'EDIT_INPUT', id, value });
    };

  const handleRemoveButtonFn = (id: string) => () => {
    dispatch({ type: 'CLICK_REMOVE_BUTTON', id });
  };

  const handleAddInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch({ type: 'EDIT_ADD_INPUT', value });
  };

  const handleAddButton = () => {
    dispatch({ type: 'CLICK_ADD_BUTTON' });
  };

  return (
    <div>
      <div>use reducer</div>
      {state.data.map((d) => (
        <div key={d.id}>
          <span>{d.id}</span>
          <input defaultValue={d.text} onChange={handleTextInputFn(d.id)} />
          <button type="button" onClick={handleRemoveButtonFn(d.id)}>
            remove
          </button>
        </div>
      ))}
      <div>
        <input value={state.addInput} onChange={handleAddInput} />
        <button type="button" onClick={handleAddButton}>
          add
        </button>
      </div>
    </div>
  );
};
