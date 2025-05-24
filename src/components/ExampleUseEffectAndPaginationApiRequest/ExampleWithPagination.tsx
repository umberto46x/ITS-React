import { useEffect, useState } from 'react';
import { useCharacters } from './useCharacters';
import { Loader } from './Loader';
import { CharacterCard } from './CharacterCard';

export const ExampleWithPagination = () => {
  /* Chiamata http rickandmorty api che restituisce Characters da inserire in
   un array di characters, successivamente inseriti singolarmente in dei componenti 
   attraverso un map, aggiungere due buttons che cambiano la page della chiamata http,
    extra disabilitare i button previous e next quando la variabile di stato page è minore 
    di 1 o maggiore del massimo valore di page (all’interno della risposta.info)
    extra: loading screen 
 */

  const [page, setPage] = useState<number>(1);
  const [characters, totalPages, isLoading] = useCharacters(page);

  return (
    <>
      <div className="grid mt-5 ">
        <div className="mx-auto mt-5">
          <h2 className="p-5 text-center bg-green-400 mb-5 w-50 ">
            RickAndMorty API Exercise
          </h2>
        </div>
        <div className="mx-auto mt-5">
          <button
            className="bg-green-400 
              rounded-4xl mx-5 d-block p-5"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous Page
          </button>
          <span className="bg-green-400 rounded-4xl mx-5 d-block p-5 ">
            {page}
          </span>
          <button
            className="bg-green-400   rounded-4xl mx-5 d-block p-5 "
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next Page
          </button>
        </div>
        <div className="mx-auto grid grid-cols-5  gap-25  mt-5">
          {isLoading && (
            <>
              <Loader></Loader> <Loader></Loader> <Loader></Loader>{' '}
              <Loader></Loader> <Loader></Loader>
              <Loader></Loader> <Loader></Loader> <Loader></Loader>{' '}
              <Loader></Loader> <Loader></Loader>
            </>
          )}

          {!isLoading &&
            characters.map((character) => (
              <CharacterCard character={character} />
            ))}
        </div>
      </div>
    </>
  );
};
