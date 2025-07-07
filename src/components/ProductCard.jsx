// src/components/ProductCard.jsx
import { useState } from 'react';
import { useCart } from '../context/CartContext';

/* fallback sizes if a product object doesn’t define its own */
const DEFAULT_SIZES = ['XS', 'S', 'M', 'L', 'XL'];

export default function ProductCard({ p }) {
  /* local pop-over toggle */
  const [open, setOpen] = useState(false);
  const [chosen, setChosen] = useState(null);
  const { addItem } = useCart();

  const handleAdd = () => {
    if (!chosen) return;
    addItem(p, chosen);   // add to cart
    setOpen(false);
    setChosen(null);
  };

  return (
    <div
      className="
        group relative flex flex-col overflow-hidden
        w-[270px] cursor-default transition-transform
        hover:-translate-y-1
      "
    >
      {/* ------------ IMAGE ------------ */}
      <div className="relative">
        <img
          src={p.img}
          alt={p.title}
          className="aspect-[3/4] w-full object-cover transition group-hover:scale-105"
        />

        {/* clickable plus badge */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen((o) => !o);
          }}
          className="
            absolute bottom-2 left-2 grid h-6 w-6 place-items-center
            rounded-full border bg-white text-xs font-bold
            hover:bg-black hover:text-white transition
          "
        >
          +
        </button>

        {/* pop-over */}
        {open && (
          <div
            onClick={(e) => e.stopPropagation()} /* prevent card hover flicker */
            className="
              absolute inset-0 z-10 flex flex-col items-center justify-center
              bg-white/95 backdrop-blur
            "
          >
            {/* size buttons */}
            <div className="mb-3 flex gap-2">
              {(p.sizes || DEFAULT_SIZES).map((s) => (
                <button
                  key={s}
                  onClick={() => setChosen(s)}
                  className={`
                    h-8 w-8 text-[11px] border
                    ${chosen === s ? 'bg-black text-white' : 'bg-white'}
                  `}
                >
                  {s}
                </button>
              ))}
            </div>

            <button
              onClick={handleAdd}
              disabled={!chosen}
              className="
                px-4 py-1 text-[11px] uppercase tracking-wide
                border border-black
                enabled:bg-black enabled:text-white
                disabled:opacity-40
              "
            >
              Add to bag
            </button>
          </div>
        )}
      </div>

      {/* ------------ TEXT BLOCK ------------ */}
      <div className="space-y-1 pt-2 text-[11px]">
        {p.isNew && <span className="font-semibold">NEW</span>}

        <h3 className="line-clamp-2 uppercase leading-tight">{p.title}</h3>

        <div className="space-x-1">
          <span className="line-through opacity-50">${p.orig.toFixed(2)}</span>
          <span className="bg-yellow-300 px-1 font-semibold">
            {-Math.round(((p.orig - p.sale) / p.orig) * 100)}% ${p.sale.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
