import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';
import Search from './components/Search/Search';
import { getPokemon } from './services/pkemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      console.log(data.results);
    };
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [query]);

  if (loading) return <h1>LOADING</h1>;

  return (
    <div className="App">
      <header className="App-header" />
      <Search query={query} setQuery={setQuery} setLoading={setLoading} />
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
