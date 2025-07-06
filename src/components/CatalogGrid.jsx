// src/components/CatalogGrid.jsx
import ProductCard from './ProductCard';
import { products } from "../data/products";

export default function CatalogGrid({ query, filters }) {
  const filteredProducts = products.filter(p => {
    const matchesQuery = (p.title + ' ' + p.blurb).toLowerCase().includes(query.toLowerCase());

    const matchesSize = !filters.size || (p.size?.includes(filters.size));
    const matchesMaterial = !filters.material || (p.material === filters.material);
    const matchesColor = !filters.color || (p.color === filters.color);
    const matchesPrice = !filters.maxPrice || (parseFloat(p.price) <= parseFloat(filters.maxPrice));

    return matchesQuery && matchesSize && matchesMaterial && matchesColor && matchesPrice;
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(p => (
            <ProductCard key={p.id} p={p} />
          ))
        ) : (
          <p className="text-gray-500 text-sm col-span-full">No matching products.</p>
        )}
      </div>
    </section>
  );
}
