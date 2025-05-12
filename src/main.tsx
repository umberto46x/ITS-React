import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ExampleWithTextArea } from './components/ExampleWithTextArea.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*     <ExampleWithArray /> */}
    <ExampleWithTextArea></ExampleWithTextArea>
  </StrictMode>
);
