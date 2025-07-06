// src/components/CatalogGrid.jsx
import ProductCard from './ProductCard';
import { products } from "../data/products";

export default function CatalogGrid() {
  return (
    <section className="mx-auto max-w-7xl grid gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(p => (
        <ProductCard key={p.id} p={p} />
      ))}
    </section>
  );
}
