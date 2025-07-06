// src/components/NavBar.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Full menu data
const MENU = {
  Women: [
    'Sale',
    'Up to 40% off',
    "Summer's last call",
    'Linen',
    'Polo shirts',
    'Shirts',
    'T-shirts',
    'Short sleeved',
    'Sweaters & cardigans',
    'Trousers',
    'Jeans',
    'Bermuda shorts & swimwear',
    'Suits',
    'Jackets & trench coats',
    'Leather jackets',
    'Overshirts & blazers',
    'Shoes',
    'Accessories & homewear',
    'View all',
    'Shop by size'
  ],
  Men: [
    'New in',
    'Linen',
    'Shirts',
    'Polo shirts',
    'T-shirts',
    'Short sleeved',
    'Sweaters & cardigans',
    'Trousers',
    'Jeans',
    'Bermuda shorts & swimwear',
    'Suits',
    'Jackets & trench coats',
    'Leather jackets',
    'Overshirts & blazers',
    'Shoes',
    'Accessories & homewear',
    'View all',
    'Shop by size'
  ]
}

export default function NavBar() {
  const [activeTab, setActiveTab]   = useState(null)   // 'Women' | 'Men'
  const [mobileOpen, setMobileOpen] = useState(false)  // drawer open?

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="text-2xl leading-none"
          aria-label="Open menu"
        >
          ≡
        </button>


        {/* Right group */}
        <div className="flex items-center space-x-8">
          <Link
            to="/search"
            className="uppercase text-sm tracking-wide pb-1 px-25 border-b border-black hover:text-gray-700"
          >
            Search
          </Link>
          <Link
            to="/account"
            className="uppercase text-sm tracking-wide hover:text-gray-700"
          >
            My Account
          </Link>
          <Link
            to="/bag"
            className="uppercase text-sm tracking-wide hover:text-gray-700"
          >
            Bag
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Drawer panel */}
          <div className="w-3/4 max-w-xs bg-white shadow-lg flex flex-col overflow-y-auto">
            {/* Close */}
            <div className="p-4 border-b flex justify-end">
              <button onClick={() => setMobileOpen(false)} className="text-2xl">
                ×
              </button>
            </div>
            {/* Brand */}
            <div className="px-6 py-4 border-b">
              <h1 className="font-serif text-2xl">Brunelli Alta</h1>
            </div>
            {/* Tabs */}
            <div className="px-6 py-4 border-b flex space-x-6">
              {['Women','Men'].map(tab => (
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
            {/* Category list */}
            {activeTab && (
              <ul className="px-6 py-4 space-y-3">
                {MENU[activeTab].map(item => (
                  <li key={item}>
                    <Link
                      to={`/${activeTab.toLowerCase()}`}
                      className="block text-sm hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Backdrop */}
          <div
            className="flex-1 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}
    </>
  )
}
