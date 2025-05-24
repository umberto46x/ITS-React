import { useEffect, useState } from 'react';

export const ExampleWithPagination = () => {
  /* Chiamata http rickandmorty api che restituisce Characters da inserire in
   un array di characters, successivamente inseriti singolarmente in dei componenti 
   attraverso un map, aggiungere due buttons che cambiano la page della chiamata http,
    extra disabilitare i button previous e next quando la variabile di stato page è minore 
    di 1 o maggiore del massimo valore di page (all’interno della risposta.info)
    extra: loading screen 
 */

  const [page, setPage] = useState<number>(1);

  return (
    <>
      <div className=" flex justify-content-center mt-5">
        <div className="row mx-auto ">
          <h2 className="p-5 mx-auto col-auto">RickAndMorty API Exercise</h2>
        </div>
        <div className="row mx-auto ">
          <button
            className="bg-green-400 
              rounded-4xl mx-5 d-block p-5  "
            onClick={() => setPage(page - 1)}
          >
            Previous Page
          </button>
          <button
            className="bg-green-400   rounded-4xl mx-5 d-block p-5  "
            onClick={() => setPage(page + 1)}
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
};
