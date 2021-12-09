import React from 'react';
import './PokemonList.css';

export default function PokemonList({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const nextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prevState) => --prevState);
      setLoading(true);
    }
  };

  return (
    <div className="pokemon-list">
      {pokemon.map((poke) => (
        <>
          <div className="pokemon-card">
            <p key={poke.id}>{poke.pokemon}</p>
            <img key={poke.url_image} src={poke.url_image} height={100} />
            <p key={poke.species_id}>Species ID: {poke.species_id}</p>
            <p key={poke.type_1}>Type: {poke.type_1}</p>
            <p key={poke.generation_id}>Generation: {poke.generation_id}</p>
          </div>
        </>
      ))}
      <button onClick={previousPage}>Previous Page</button>
      <div>Page: {currentPage}</div>
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
}
