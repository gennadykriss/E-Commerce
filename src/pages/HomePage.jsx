// src/pages/HomePage.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import CatalogGrid from "../components/CatalogGrid";
import Footer from "../components/Footer";

export const HomePage = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    size: '',
    color: '',
    material: '',
    maxPrice: '',
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar query={query} setQuery={setQuery} filters={filters} setFilters={setFilters} />
      <main className="flex-grow">
        <CatalogGrid query={query} filters={filters} />
      </main>
      <Footer />
    </div>
  );
};
