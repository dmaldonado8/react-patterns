import { useProductContext } from './ProductContext';

export function CardDescription() {
  const product = useProductContext();
  return <p className="mt-5">About: {product.description}</p>;
}
