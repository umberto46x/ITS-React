import { useReducer } from 'react';
import { useReducerTest } from '../hooks/useReducerTest';

export const ReducerComponentTest = () => {
  const [reducerArray, setStateReducerArray] = useReducer(useReducerTest, []);

  return (
    <>
      <div className="container ">
        <p>{reducerArray}</p>
        <br />
        <button
          className="btn"
          onClick={() => setStateReducerArray({ type: 'add' })}
        >
          Add
        </button>
        <button
          className="btn"
          onClick={() => setStateReducerArray({ type: 'sub' })}
        >
          Sub
        </button>
        <button
          className="btn"
          onClick={() => setStateReducerArray({ type: 'clean' })}
        >
          Clean
        </button>
      </div>
    </>
  );
};
