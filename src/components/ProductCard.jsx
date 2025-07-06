// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';
import { discount } from '../utils/price';

export default function ProductCard({ p }) {
  return (
    <Link
      to={`/product/${p.id}`}
      className="group relative flex w-[270px] flex-col"
    >
      {/* image */}
      <div className="relative">
        <img
          src={p.img}
          alt={p.title}
          className="aspect-[3/4] w-full object-cover transition group-hover:scale-105"
        />

        {/* quick-add “plus” */}
        <span className="absolute bottom-2 left-2 grid h-6 w-6 place-items-center rounded-full border text-xs font-bold">
          +
        </span>
      </div>

      {/* text block */}
      <div className="space-y-1 pt-2 text-[11px]">
        {p.isNew && <span className="font-semibold">NEW</span>}

        <h3 className="line-clamp-2 uppercase leading-tight">{p.title}</h3>

        <div className="space-x-1">
          <span className="line-through opacity-50">${p.orig.toFixed(2)}</span>
          <span className="bg-yellow-300 px-1 font-semibold">
            {discount(p.orig, p.sale)} ${p.sale.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}
