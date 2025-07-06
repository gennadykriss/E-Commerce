// src/pages/SearchPage.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SearchPage() {
  /* ------------------------------------------------------------
     1.  Grab location.state every time it changes
  ------------------------------------------------------------ */
  const location = useLocation(); // { pathname, search, hash, state, … }

  /* initial query is whatever NavBar sent last (may be undefined) */
  const [query,   setQuery]   = useState(location.state?.initialQuery || '');
  const [results, setResults] = useState(products);

  /* ------------------------------------------------------------
     2.  When NavBar pushes a NEW initialQuery, sync it into state
  ------------------------------------------------------------ */
  useEffect(() => {
    if (location.state?.initialQuery != null) {
      setQuery(location.state.initialQuery);
    }
  }, [location.state?.initialQuery]);

  /* ------------------------------------------------------------
     3.  Filter products whenever query changes
  ------------------------------------------------------------ */
  useEffect(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      setResults(products);
      return;
    }

    setResults(
      products.filter((p) =>
        [
          p.title,
          p.color,
          p.material,
          p.type,
          p.gender,
        ]
          .join(' ')
          .toLowerCase()
          .includes(term)
      )
    );
  }, [query]);

  /* simple setter so <input> stays controlled */
  const handleSearch = (q) => setQuery(q);

  /* ------------------------------------------------------------
     4.  Render
  ------------------------------------------------------------ */
  return (
    <>
      {/* ───── NAVBAR ───── */}
      <Navbar />

      {/* ───── SEARCH BAR STRIP ───── */}
      <header className="border-b">
        <section className="mx-auto max-w-7xl px-4">
          <input
            type="text"
            value={query}
            placeholder="SEARCH IN CLOTHING FOR AN ITEM, COLOR, COLLECTION…"
            onChange={(e) => handleSearch(e.target.value)}
            className="
              w-full bg-transparent
              py-3
              text-[13px] uppercase tracking-wider
              placeholder:text-gray-500
              focus:outline-none
            "
          />
        </section>
      </header>

      {/* helper tagline */}
      <section className="mx-auto max-w-7xl px-4 pt-2 text-right">
        <span className="text-[13px] uppercase tracking-wider">
          You may be interested in
        </span>
      </section>

      {/* ───── RESULTS GRID ───── */}
      <section className="pt-10">
        <div
          className="
            mx-auto max-w-8xl px-4
            grid gap-x-8 gap-y-10
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
          "
        >
          {results.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        {results.length === 0 && (
          <p className="mx-auto max-w-8xl px-4 pt-16 text-sm text-gray-500">
            No items found.
          </p>
        )}
      </section>

      {/* ───── FOOTER ───── */}
      <div className="h-12" />
      <Footer />
    </>
  );
}
