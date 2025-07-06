// src/components/CatalogGrid.jsx
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function CatalogGrid() {
  return (
    <section className="px-4 py-10">
      <div
        className="
          mx-auto max-w-8xl
          grid   
          gap-y-10   
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-6
              "
      >
        {products.map(p => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
