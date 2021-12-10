import { render } from '@testing-library/react';
import Search from './Search.js';

test('testing Search', () => {
  const container = render(
    <Search
      query="Query"
      setQuery="setQuery"
      setLoading="setLoading"
      order="order"
      setOrder="setOrder"
      slectedType="selectedType"
      setSelectedType="setSelectedType"
      type={['type', 'other type', 'also some more type']}
    />
  );
  expect(container).toMatchSnapshot;
});
