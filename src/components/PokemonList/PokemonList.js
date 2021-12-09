import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div className="pokemonList">
      {pokemon.map((poke) => (
        <>
          <p key={poke.id}>{poke.pokemon}</p>
          <img key={poke.url_image} src={poke.url_image} />
          <p key={poke.species_id}>Species ID: {poke.species_id}</p>
          <p key={poke.type_1}>Type: {poke.type_1}</p>
          <p key={poke.generation_id}>Generation: {poke.generation_id}</p>
        </>
      ))}
    </div>
  );
}
