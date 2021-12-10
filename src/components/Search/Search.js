import React from 'react';

export default function Search({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  selectedType,
  setSelectedType,
  type,
}) {
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

      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option calue="desc">Descending</option>
      </select>

      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="all">All</option>
        {type.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
