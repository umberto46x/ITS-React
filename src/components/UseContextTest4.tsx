import { useContext } from 'react';
import { NationalityContext } from './UseContextTest';

export const UseContextTest4 = () => {
  const nationality = useContext(NationalityContext);

  return (
    <>
      <p>Nazionalità : {nationality}</p>
    </>
  );
};
