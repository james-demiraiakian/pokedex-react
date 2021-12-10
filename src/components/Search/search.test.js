import { render } from '@testing-library/react';
import Search from './Search.js';

test('', () => {
  const container = render(
    <div>query, setQuery, setLoading, order, setOrder, selectedType, setSelectedType, type</div>
  );
  expect(container).toMatchSnapshot();
});
