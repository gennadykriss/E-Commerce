// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import { CartProvider } from './context/CartContext';   // adjust path if different
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>          {/* ⬅️ provides addItem / removeItem / … */}       {/* ⬅️ if App doesn’t already include it */}
        <App />
    </CartProvider>
  </StrictMode>
);
