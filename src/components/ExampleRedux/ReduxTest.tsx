import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { Counter } from './Counter';
import { Theme } from './Theme';

export const ReduxTest = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Theme />
    </Provider>
  );
};
