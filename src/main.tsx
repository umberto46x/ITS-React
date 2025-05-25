import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ExampleWithTextArea } from './components/ExampleWithTextArea/ExampleWithTextArea.tsx';
import { ExampleWithPagination } from './components/ExampleUseEffectAndPaginationApiRequest/ExampleWithPagination.tsx';
import { ExampleToDoList } from './components/Example To Do List/ExampleToDoList.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*     <ExampleWithArray /> */}
    <ExampleWithTextArea></ExampleWithTextArea>
    <ExampleWithPagination></ExampleWithPagination>
    <ExampleToDoList></ExampleToDoList>
    {/*     <ReducerComponentTest></ReducerComponentTest>{' '}
     */}
    {/*   <UseContextTest></UseContextTest> */}
    {/*    <ReduxTest></ReduxTest>{' '} */}
  </StrictMode>
);
