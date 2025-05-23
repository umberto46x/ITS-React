import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, set } from '../../redux/counterSlice';
import type { State } from '../../redux/store';

export const Counter = () => {
  console.log('sto rirenderizzando counter?');
  const count = useSelector((state: State) => state.counter.value);

  const theme = useSelector((state: State) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <>
      <span>Theme: {theme}</span> <br />
      <span>Counter: {count}</span> <br />
      <button
        className="p-5 m-5 bg-green-600"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="p-5 m-5 bg-red-600"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="p-5 m-5 bg-yellow-600"
        onClick={() => dispatch(set(10))}
      >
        Set 10
      </button>
    </>
  );
};
