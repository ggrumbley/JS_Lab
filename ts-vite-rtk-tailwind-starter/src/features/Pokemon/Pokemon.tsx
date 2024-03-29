import * as React from 'react';
import { useGetPokemonByNameQuery } from '.';

export const Pokemon = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
};
