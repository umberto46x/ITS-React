import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ExampleWithPagination } from './components/ExampleUseEffectAndPaginationApiRequest/ExampleWithPagination.tsx';
import { ExampleToDoList } from './components/ExampleToDoList/ExampleToDoList.tsx';
import { ExampleTextArea } from './components/ExampleTextArea/ExampleTextArea.tsx';
import { ExampleUseReducer } from './components/ExampleUseReducer/ExampleUseReducer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*     <ExampleWithArray /> */}
    <ExampleTextArea></ExampleTextArea>
    <ExampleWithPagination></ExampleWithPagination>
    <ExampleToDoList></ExampleToDoList>
    <ExampleUseReducer></ExampleUseReducer>
    {/*   <UseContextTest></UseContextTest> */}
    {/*    <ReduxTest></ReduxTest>{' '} */}
  </StrictMode>
);
