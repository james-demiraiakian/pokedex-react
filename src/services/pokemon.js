export async function getPokemon(query, currentPage, order, selectedType) {
  const params = new URLSearchParams();

  params.set('pokemon', query);
  params.set('page', currentPage);
  params.set('sort', 'pokemon');
  params.set('direction', order);
  //search and sort params go here
  if (selectedType !== 'all') {
    params.set('type', selectedType);
  }

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
