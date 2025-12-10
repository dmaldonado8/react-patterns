import React, { use } from 'react';
import type { Product } from './product';

const ProductContext = React.createContext<Product | undefined>(undefined);

const useProductContext = () => {
  const context = use(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export { ProductContext, useProductContext };
