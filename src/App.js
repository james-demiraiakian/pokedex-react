import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';
import Search from './components/Search/Search';
import { getPokemon, getType } from './services/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, currentPage, order, selectedType);
      setPokemon(data.results);
    };
    if (loading) {
      fetchData();
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [query, loading, currentPage, order, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getType();
      setType(data);
    };
    fetchData();
  }, []);

  if (loading) return <h1>LOADING</h1>;

  return (
    <div className="App">
      <header className="App-header" />
      <Search
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        order={order}
        setOrder={setOrder}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        type={type}
      />
      <PokemonList
        pokemon={pokemon}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;
