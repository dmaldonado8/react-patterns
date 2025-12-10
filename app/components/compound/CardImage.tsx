import { useProductContext } from './ProductContext';

export function CardImage() {
  const product = useProductContext();
  return (
    <div>
      <img src={product.image} alt="Product image" />
    </div>
  );
}
