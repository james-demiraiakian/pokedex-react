import { render } from '@testing-library/react';
import PokemonList from './PokemonList';

test('testing Search', () => {
  const container = render(
    <PokemonList
      pokemon="pokemon"
      currentPage="currentPage"
      setCurrentPage="setCurrentPage"
      setLoading="setLoading"
    />
  );
  expect(container).toMatchSnapshot();
});
