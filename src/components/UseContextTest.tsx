import { createContext, useState } from 'react';
import type { Nationality } from '../models/Nationality';
import { UseContextTest2 } from './UseContextTest2';
import { UseContextTest4 } from './UseContextTest4';
import { UseContextTest3 } from './UseContextTest3';
import type { Theme } from '../models/Theme';

export const NationalityContext = createContext<Nationality>('Italian');
export const ThemeContext = createContext<Theme>('light');

export const UseContextTest = () => {
  const [nationality, setNationality] = useState<Nationality>('Italian');
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <div className="border-10 border-red-700 container ">
      <div className="border-6 border-green-600">
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Change Theme
        </button>
      </div>
      <div className="border-6 border-blue-600">
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Italian')}
        >
          Italian
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('French')}
        >
          French
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('German')}
        >
          German
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Spanish')}
        >
          Spanish
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Portuguese')}
        >
          Portuguese
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('British')}
        >
          British
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('American')}
        >
          American
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Canadian')}
        >
          Canadian
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Mexican')}
        >
          Mexican
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Brazilian')}
        >
          Brazilian
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Argentinian')}
        >
          Argentinian
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Chinese')}
        >
          Chinese
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Japanese')}
        >
          Japanese
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Korean')}
        >
          Korean
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Indian')}
        >
          Indian
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Russian')}
        >
          Russian
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Australian')}
        >
          Australian
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Egyptian')}
        >
          Egyptian
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('Turkish')}
        >
          Turkish
        </button>
        <button
          className="border-4 rounded border-black text-white bg-green-600 p-4 m-5"
          onClick={() => setNationality('South African')}
        >
          South African
        </button>
      </div>
      <NationalityContext.Provider value={nationality}>
        <UseContextTest2>
          <UseContextTest3>
            <UseContextTest4></UseContextTest4>
          </UseContextTest3>
        </UseContextTest2>
      </NationalityContext.Provider>
    </div>
  );
};
