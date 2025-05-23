import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../redux/themeSlice';
import type { State } from '../../redux/store';

export const Theme = () => {
  console.log('sto rirenderizzando theme?');
  const theme = useSelector((state: State) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <>
      <span>Current Theme: {theme}</span>
      <button
        className="p-5 m-5 bg-orange-600"
        onClick={() => dispatch(toggle())}
      >
        Toggle
      </button>
    </>
  );
};
