// src/components/NavBar.jsx
import { useState } from 'react';

export default function NavBar({ query, setQuery, filters, setFilters }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilterDropdown = () => {
    setShowFilters(prev => !prev);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 border-b relative">
        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="text-2xl leading-none"
        >
          ≡
        </button>

        {/* Search and Filters */}
        <div className="flex-1 flex justify-center items-center space-x-4">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full max-w-sm border-b border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-black"
          />
          <button
            onClick={toggleFilterDropdown}
            className="text-sm uppercase tracking-wide border px-3 py-1 hover:bg-gray-100"
          >
            Filters
          </button>

          {/* Dropdown Panel */}
          {showFilters && (
            <div className="absolute top-full mt-2 bg-white shadow-lg border rounded-md p-4 w-[300px] z-50">
              <div className="space-y-4 text-sm text-gray-700">
                {/* Size */}
                <div>
                  <label className="block font-medium mb-1">Size</label>
                  <select
                    value={filters.size}
                    onChange={e => setFilters(prev => ({ ...prev, size: e.target.value }))}
                    className="w-full border-b py-1 focus:outline-none"
                  >
                    <option value="">Any</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>

                {/* Material */}
                <div>
                  <label className="block font-medium mb-1">Material</label>
                  <select
                    value={filters.material}
                    onChange={e => setFilters(prev => ({ ...prev, material: e.target.value }))}
                    className="w-full border-b py-1 focus:outline-none"
                  >
                    <option value="">Any</option>
                    <option>Wool</option>
                    <option>Silk</option>
                    <option>Leather</option>
                  </select>
                </div>

                {/* Color */}
                <div>
                  <label className="block font-medium mb-1">Color</label>
                  <select
                    value={filters.color}
                    onChange={e => setFilters(prev => ({ ...prev, color: e.target.value }))}
                    className="w-full border-b py-1 focus:outline-none"
                  >
                    <option value="">Any</option>
                    <option>Charcoal</option>
                    <option>Ivory</option>
                    <option>Camel</option>
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className="block font-medium mb-1">Max Price (€)</label>
                  <input
                    type="number"
                    value={filters.maxPrice}
                    onChange={e => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                    className="w-full border-b py-1 focus:outline-none"
                    placeholder="e.g. 1000"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right links */}
        <div className="flex items-center space-x-8">
          <a className="uppercase text-sm tracking-wide hover:text-gray-700">My Account</a>
          <a className="uppercase text-sm tracking-wide hover:text-gray-700">Bag</a>
        </div>
      </nav>
    </>
  );
}
