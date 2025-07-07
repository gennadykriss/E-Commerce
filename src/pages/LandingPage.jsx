// src/pages/LandingPage.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import runawayImg from '../assets/runaway.png'

export default function LandingPage() {
  const navigate = useNavigate()

  const [market, setMarket] = useState('Canada')
  const [lang,   setLang]   = useState('English')
  const [collection, setCollection] = useState('')

  const handleContinue = () => {
    navigate('/home', { state: { gender: collection || 'Women' } });
  }

  return (
    <div className="flex h-screen">
      {/* Left image panel */}
      <div
        className="flex-1 bg-contain bg-center relative"
        style={{ backgroundImage: `url(${runawayImg})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="absolute left-20 bottom-70 text-white text-5xl font-serif">
          Brunelli Alta
        </h1>
      </div>

      {/* Right form panel */}
      <div className="flex-1 bg-white flex flex-col justify-center px-16 py-8 relative">
        <div className="space-y-8 w-full max-w-sm mx-auto">
          {/* Market */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">CHOOSE MARKET</label>
            <select
              className="w-full border-b border-gray-300 py-2 focus:outline-none"
              value={market}
              onChange={e => setMarket(e.target.value)}
            >
              <option>Canada</option>
              <option>USA</option>
              <option>UK</option>
              {/* …add more */}
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">CHOOSE YOUR LANGUAGE</label>
            <select
              className="w-full border-b border-gray-300 py-2 focus:outline-none"
              value={lang}
              onChange={e => setLang(e.target.value)}
            >
              <option>English</option>
              {/* …add more */}
            </select>
          </div>

          {/* Gender checkboxes */}
          <div>
            <span className="block text-xs text-gray-500 mb-1">GO TO COLLECTION</span>
            <div className="flex items-center space-x-6">
              {['Women', 'Men'].map((g) => (
                <label key={g} className="flex items-center space-x-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="collection"
                    value={g}
                    checked={collection === g}
                    onChange={() => setCollection(g)}
                    className="
                      appearance-none 
                      h-4 w-4 
                      border border-gray-300 
                      rounded-none 
                      checked:bg-black 
                      checked:border-black 
                      focus:outline-none
                      transition
                    "
                  />
                  <span>{g.toUpperCase()}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            className="w-full py-3 bg-black text-white uppercase tracking-wide hover:bg-gray-800 transition"
          >
            Continue
          </button>
        </div>

        {/* Cookie settings at very bottom */}
        <a
          href="/cookies"
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 hover:underline"
        >
          Cookie Settings
        </a>
      </div>
    </div>
  )
}
