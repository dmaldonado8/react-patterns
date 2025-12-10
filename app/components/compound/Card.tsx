import type React from 'react';
import { CardTitle } from './CardTitle';
import { CardImage } from './CardImage';
import { ProductContext } from './ProductContext';
import type { Product } from './product';
import { CardDescription } from './CardDescription';

function Card({
  children,
  product,
}: {
  children: React.ReactNode;
  product: Product;
}) {
  return (
    <ProductContext.Provider value={product}>
      <div className="p-5 border rounded shadow w-80">{children}</div>
    </ProductContext.Provider>
  );
}

Card.Title = CardTitle;
Card.Image = CardImage;
Card.Description = CardDescription;

export { Card };
