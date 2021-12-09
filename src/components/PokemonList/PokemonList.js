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
        <div key={poke.id} className="pokemon-card">
          <p>{poke.pokemon}</p>
          <img src={poke.url_image} height={100} />
          <p>ID: {poke.id}</p>
          <p>Type: {poke.type_1}</p>
          <p>Generation: {poke.generation_id}</p>
        </div>
      ))}
      <button onClick={previousPage}>Previous Page</button>
      <div>Page: {currentPage}</div>
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
}
