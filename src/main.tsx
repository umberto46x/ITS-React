import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ExampleWithTextArea } from './components/ExampleWithTextArea.tsx';
import { ReducerComponentTest } from './components/ReducerComponentTest.tsx';
import { UseContextTest } from './components/UseContextTest.tsx';
import { ReduxTest } from './components/ReduxTest.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*     <ExampleWithArray /> */}
    {/* <ExampleWithTextArea></ExampleWithTextArea> */}
    {/*     <ReducerComponentTest></ReducerComponentTest>{' '}
     */}
    {/*   <UseContextTest></UseContextTest> */}
    <ReduxTest></ReduxTest>{' '}
  </StrictMode>
);
