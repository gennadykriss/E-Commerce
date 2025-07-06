// src/components/SearchBar.jsx
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    const q = e.target.value;
    setQuery(q);
    onSearch(q);
  }

  return (
    <input
      type="text"
      placeholder="Search color, material, type…"
      value={query}
      onChange={handleChange}
      className="
        w-full rounded-lg border px-4 py-2
        focus:outline-none focus:ring-2 focus:ring-black/80
      "
    />
  );
}
