import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

/* Only categories you actually have in data.products */
const MENU = {
  Women: ['Dresses', 'Shirts', 'Knitwear', 'Trousers', 'Footwear', 'Accessories'],
  Men:   ['Blazers', 'Shirts', 'Knitwear', 'Trousers', 'Outerwear', 'Footwear'],
};

/* menu label → search token */
const TOKEN = {
  Blazers:    'blazer',
  Knitwear:   'knitwear',
  Shirts:     'shirt',
  Trousers:   'trousers',
  Outerwear:  'outerwear',
  Footwear:   'footwear',
  Dresses:    'dress',
  Accessories:'accessory',
};

export default function NavBar() {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  // default tab = last gender sent from landing page, else Women
  const initialTab = state?.gender || 'Women';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [mobileOpen, setMobileOpen] = useState(false);

  /** Navigate to /search and pre-fill the query with selected category */
 const goToSearch = (label) => {
  const token = TOKEN[label] || label;          
  navigate('/search', {
    state: { gender: activeTab, initialQuery: token },
  });
  setMobileOpen(false);
};

  return (
    <>
      {/* ------------ TOP BAR ------------ */}
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="text-2xl leading-none"
        >
          ≡
        </button>

        {/* Right-hand links */}
        <div className="flex items-center space-x-8">
          {pathname !== '/search' && (
            <Link
              to="/search"
              className="uppercase text-sm tracking-wide pb-1 border-b border-black hover:text-gray-700"
            >
              Search
            </Link>
          )}
          <Link to="/account" className="uppercase text-sm tracking-wide hover:text-gray-700">
            My Account
          </Link>
          <Link to="/bag" className="uppercase text-sm tracking-wide hover:text-gray-700">
            Bag
          </Link>
        </div>
      </nav>

      {/* ------------ MOBILE DRAWER ------------ */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Panel */}
          <div className="w-3/4 max-w-xs bg-white shadow-lg flex flex-col overflow-y-auto">
            {/* Close button */}
            <div className="p-4 border-b flex justify-end">
              <button onClick={() => setMobileOpen(false)} className="text-2xl">
                ×
              </button>
            </div>

            {/* Brand */}
          <div className="px-6 py-4 border-b">
            <Link
              to="/home"
              onClick={() => setMobileOpen(false)}   /* close drawer */
              className="block font-serif text-2xl"
            >
              Brunelli Alta
            </Link>
          </div>

            {/* Gender tabs */}
            <div className="px-6 py-4 border-b flex space-x-6">
              {['Women', 'Men'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`uppercase text-sm tracking-wide ${
                    activeTab === tab ? 'font-bold' : 'hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Category links */}
            <ul className="px-6 py-4 space-y-3">
              {MENU[activeTab].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => goToSearch(cat)}
                    className="block w-full text-left text-sm hover:underline"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Backdrop */}
          <div className="flex-1 bg-black/30" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  );
}
