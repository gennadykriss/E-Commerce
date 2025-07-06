// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';

export default function ProductCard({ p }) {
  return (
    <Link
      to={`/product/${p.id}`}
      className="
        group block overflow-hidden rounded-lg bg-white shadow-sm
        transition hover:-translate-y-1 hover:shadow-md
      "
    >
      <img
        src={p.img}
        alt={p.title}
        className="h-72 w-full object-cover transition group-hover:scale-105"
      />
      <div className="p-4 space-y-1">
        <h3 className="text-sm font-medium">{p.title}</h3>
        <p className="text-xs text-gray-500">{p.price}</p>
      </div>
    </Link>
  );
}
