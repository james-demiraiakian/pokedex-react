export async function getPokemon(query, currentPage) {
  const params = new URLSearchParams();

  params.set('pokemon', query);
  params.set('page', currentPage);
  //search and sort params go here

  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data;
}

export async function getType() {
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
  const data = await resp.json();
  return data.map((item) => item.type);
}

export async function getGen() {}
