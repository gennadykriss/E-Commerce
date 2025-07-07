import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { id, size, product } = action.payload;
      const key = `${id}-${size}`;
      const existing = state.items[key];
      const qty = existing ? existing.qty + 1 : 1;
      return {
        ...state,
        items: {
          ...state.items,
          [key]: { ...product, size, qty },
        },
      };
    }
    case 'REMOVE': {
      const newItems = { ...state.items };
      delete newItems[action.key];
      return { ...state, items: newItems };
    }
    case 'UPDATE': {
      const { key, qty } = action;
      return {
        ...state,
        items: {
          ...state.items,
          [key]: { ...state.items[key], qty },
        },
      };
    }
    case 'CLEAR':
      return { items: {} };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: {} });

  const addItem = (product, size) =>
    dispatch({ type: 'ADD', payload: { id: product.id, size, product } });

  const removeItem = (key) => dispatch({ type: 'REMOVE', key });
  const updateQty  = (key, qty) => dispatch({ type: 'UPDATE', key, qty });
  const clearCart  = () => dispatch({ type: 'CLEAR' });

  const total   = Object.values(state.items).reduce((sum, i) => sum + i.sale * i.qty, 0);
  const itemCnt = Object.values(state.items).reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQty, clearCart, total, itemCnt }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
