import { useProductContext } from './ProductContext';

export function CardTitle() {
  const product = useProductContext();
  return <h1 className="text-xl mb-5">{product.name}</h1>;
}
