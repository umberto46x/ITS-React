import { useReducer } from 'react';
import { useReducerTest } from '../../hooks/useReducerTest';

export const ExampleUseReducer = () => {
  const [reducerArray, setStateReducerArray] = useReducer(useReducerTest, []);

  return (
    <>
      <div className="grid mt-5 ">
        <div className="mx-auto mt-5">
          <h2 className="p-5 text-center border border-black border-3 rounded-lg bg-green-400 mb-5 w-50 ">
            UseReducer Exercise
          </h2>
        </div>

        <div className="mx-auto mt-5">
          <button
            className="border-4 rounded-lg border-black text-white bg-green-600 p-4 m-5"
            onClick={() => setStateReducerArray({ type: 'add' })}
          >
            Add
          </button>
          <button
            className="border-4 rounded-lg border-black text-white bg-red-600 p-4 m-5"
            onClick={() => setStateReducerArray({ type: 'sub' })}
          >
            Sub
          </button>

          <button
            className="border-4 rounded-lg  border-black bg-transparent p-4 m-5"
            onClick={() => setStateReducerArray({ type: 'clean' })}
          >
            Clean
          </button>
        </div>
        <div className="mx-auto mt-5">
          <ul
            className="p-10 grid grid-cols-6 border-4 rounded-lg border-green-500"
            hidden={reducerArray.length === 0}
          >
            {reducerArray.map((item) => (
              <li className="inline p-5 border-4 rounded-lg border-black text-white font-bold bg-black m-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
