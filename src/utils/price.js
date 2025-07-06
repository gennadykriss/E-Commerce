// src/utils/price.js
export const discount = (orig, sale) =>
  `-${Math.round(((orig - sale) / orig) * 100)}%`;
