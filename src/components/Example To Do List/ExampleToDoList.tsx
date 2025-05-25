import { useRef, useState } from 'react';
import type { ToDo } from './ToDo';

export const ExampleToDoList = () => {
  const [todos, setToDos] = useState<ToDo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addToDo = () => {
    const now = new Date();
    const fullDateTime = `${now.getDay()}/${now.getMonth()}/${now.getFullYear()} | ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    setToDos([
      ...todos,
      {
        name: inputRef!.current!.value,
        dateCreation: fullDateTime,
        dateCompletion: null,
      },
    ]);
    inputRef!.current!.value = '';
    inputRef!.current!.focus();
  };

  return (
    <>
      <div className="grid mt-5 ">
        <div className="mx-auto mt-5">
          <h2 className="p-5 text-center border border-3 rounded-lg   mb-5 w-50 ">
            ToDo List Exercise
          </h2>
        </div>
        <div className="mx-auto mt-5">
          <input
            disabled={todos.length === 5}
            ref={inputRef}
            type="text"
            placeholder="Add a To Do"
            className="text p-5 border-3 border-black rounded-lg placeholder-black font-bold"
            onKeyDown={(e) => e.key === 'Enter' && addToDo()}
          />
          <button
            className=" p-5 ml-5 border-3 border-black rounded-lg"
            onClick={() => inputRef!.current!.value.length !== 0 && addToDo()}
          >
            Add To Do
          </button>
        </div>
        <div className="mx-auto mt-5">
          <ul>
            {todos.map((todo) => (
              <li>
                Task: {todo.name} Date assignment: {todo.dateCreation}{' '}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
