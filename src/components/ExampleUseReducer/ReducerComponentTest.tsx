import { useReducer } from 'react';
import { useReducerTest } from '../../hooks/useReducerTest';

export const ReducerComponentTest = () => {
  const [reducerArray, setStateReducerArray] = useReducer(useReducerTest, []);

  return (
    <>
      <div className="container ">
        <ul className="p-10">
          {reducerArray.map((item) => (
            <li className="inline p-5">{item}</li>
          ))}
        </ul>
        <br />
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setStateReducerArray({ type: 'add' })}
        >
          Add
        </button>
        <button
          className="border-4 rounded border-black text-white bg-red-600 p-4 m-5"
          onClick={() => setStateReducerArray({ type: 'sub' })}
        >
          Sub
        </button>
        <button
          className="border-4 rounded  border-black bg-transparent p-4 m-5"
          onClick={() => setStateReducerArray({ type: 'clean' })}
        >
          Clean
        </button>
      </div>
    </>
  );
};
