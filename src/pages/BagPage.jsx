import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


export default function BagPage() {
  const { items, total, removeItem, updateQty, clearCart } = useCart();
  const list = Object.entries(items);            // [key, item]

  /* checkout flow state */
  const [stage, setStage] = useState('cart');    // 'cart' | 'form' | 'done'
  const [form, setForm]   = useState({
    fullName: '',
    email: '',
    phone: '',
    line1: '',
    line2: '',
    city: '',
    region: '',
    postal: '',
    country: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // TODO: send to backend
    console.table(form);
    console.table(items);
    clearCart();
    setStage('done');
  };

  /* -------------------------------------------------------------------- */
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* ---------------- CART LIST ---------------- */}
      {stage === 'cart' && (
        <section className="mx-auto max-w-4xl flex-grow px-6 py-12 space-y-8">
          <h1 className="text-2xl font-medium">Your Bag</h1>

          {list.length === 0 && <p>Your bag is empty.</p>}

          {list.length > 0 && (
            <>
              <ul className="space-y-6">
                {list.map(([key, it]) => (
                  <li key={key} className="flex items-center gap-6 border-b pb-6">
                    <img src={it.img} alt="" className="h-24 w-20 object-cover" />

                    <div className="flex-1 text-sm">
                      <p className="uppercase">{it.title}</p>
                      <p className="opacity-60">Size: {it.size}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <label className="text-xs opacity-60">Qty</label>
                        <input
                          type="number"
                          min="1"
                          value={it.qty}
                          onChange={(e) => updateQty(key, +e.target.value)}
                          className="w-16 border px-1 text-center"
                        />
                      </div>
                    </div>

                    <div className="w-24 text-right">
                      ${(it.sale * it.qty).toFixed(2)}
                    </div>

                    <button
                      onClick={() => removeItem(key)}
                      className="text-xl leading-none"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between pt-8 border-t text-lg font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => setStage('form')}
                className="mt-6 w-full bg-black py-3 text-white uppercase tracking-wide hover:bg-gray-800"
              >
                Checkout
              </button>
            </>
          )}
        </section>
      )}

      {/* ---------------- CHECKOUT FORM ---------------- */}
      {stage === 'form' && (
        <section className="mx-auto max-w-xl flex-grow px-6 py-12 space-y-8">
          <h1 className="text-2xl font-medium">Checkout</h1>

          <form onSubmit={handlePlaceOrder} className="space-y-6">
            {/* contact */}
            <div className="space-y-4">
              <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} required />
              <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
              <Input label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
            </div>

            {/* address */}
            <div className="space-y-4">
              <Input label="Address line 1" name="line1" value={form.line1} onChange={handleChange} required />
              <Input label="Address line 2" name="line2" value={form.line2} onChange={handleChange} />
              <Input label="City"   name="city"   value={form.city}   onChange={handleChange} required />
              <Input label="State / Region" name="region" value={form.region} onChange={handleChange} required />
              <div className="flex gap-4">
                <Input label="Postal Code" name="postal" value={form.postal} onChange={handleChange} required className="flex-1" />
                <Input label="Country" name="country" value={form.country} onChange={handleChange} required className="flex-1" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black py-3 text-white uppercase tracking-wide hover:bg-gray-800"
            >
              Place order
            </button>

            <button
              type="button"
              onClick={() => setStage('cart')}
              className="w-full py-3 text-sm underline"
            >
              ‹ Back to bag
            </button>
          </form>
        </section>
      )}

      {/* ---------------- CONFIRMATION ---------------- */}
      {stage === 'done' && (
        <section className="mx-auto max-w-md flex-grow px-6 py-20 text-center space-y-6">
          <h1 className="text-2xl font-medium">Thank you!</h1>
          <p className="text-sm">
            Your order has been placed. A confirmation email will be sent to you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
            onClick={() => setStage('cart')}
            className="flex-1 py-3 bg-black text-white uppercase tracking-wide hover:bg-gray-800 transition"
            >
              Continue Shopping
            </button>
            <Link
              to="/survey"
              className="flex-1 py-3 border border-black text-black text-center uppercase tracking-wide hover:bg-gray-100 transition"
            >
              How Did We Do?
            </Link>
          </div>
        </section>
      )}


      <Footer className="mt-auto" />
    </div>
  );
}

/* Small reusable input component */
function Input({ label, className = '', ...rest }) {
  return (
    <label className={`block text-sm ${className}`}>
      <span className="mb-1 block text-xs text-gray-600 uppercase tracking-wider">
        {label}
      </span>
      <input
        {...rest}
        className="
          w-full border-b border-gray-300 py-2 focus:outline-none
        "
      />
    </label>
  );
}
