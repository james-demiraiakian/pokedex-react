import React from 'react';

export default function Search({ query, setQuery, setLoading }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
