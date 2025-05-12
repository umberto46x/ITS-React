import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Character, ResponseCharacters } from '../models/Character';
import { Loader } from './Loader';
import '../index.css';

export const ExampleWithTextArea = () => {
  console.log('sto rirenderizzando');
  // const maxChars = 30;
  // const [isOver, setIsOver] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await axios.get<ResponseCharacters>(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    })();
  }, [page]);

  return (
    <>
      <button
        className="border-green-500 bg-green-300 p-5"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <span>{page}</span>
      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
      {/* <textarea onChange={(event) => setIsOver(event.target.value.length > maxChars)} />
        {isOver && <p>Il testo non deve superare {maxChars} caratteri </p>} */}
      {isLoading && <Loader></Loader>}
      {!isLoading && characters.map((item) => <p>{item.name}</p>)}
    </>
  );
};
