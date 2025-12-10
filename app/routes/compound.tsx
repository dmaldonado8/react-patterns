import { Card } from '~/components/compound/Card';
import type { Product } from '~/components/compound/product';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Macbook Pro 15',
    description: 'Apple laptop',
    image:
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp14-spaceblack-select-202410_FMT_WHH?wid=892&hei=820&fmt=jpeg&qlt=90&.v=YnlWZDdpMFo0bUpJZnBpZjhKM2M3YnRLQTZRakorT3p3YTRUbVA0N3dnbm9kcmNoRkhVQjllNW44R3VXNVFLNm5EL1p1ZmpNaCtMcDhOa3lIZDhWbWhhU2ZYeWJNaHI5aXZSOWk3dEhoQkx6STlJSlZ4M0pKaFh6c2piamliR2k',
  },
  {
    id: 2,
    name: 'Iphone 14',
    description: 'Apple mobile phone',
    image:
      'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-blue-220907-geo_inline.jpg.large.jpg',
  },
  {
    id: 3,
    name: 'Ipad Air 10',
    description: 'Apple tablet',
    image:
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-blue-wifi?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmM3hxSU9Rc1hENld5ZlZGbisxZU9hWGJrbFd6ZHBvVk05L3d0WWlJMkh3MEU1V0hVSjZLVHJGenZsOFVicTBNclV1ZnhKeHNGWFhISWx4Q0lTRXA4dkY5Q2drLzhtOFgzejV4MENrZ0JFZVBwak9PMXpaSGlQNVErR3pISzM5NVpB&traceId=1',
  },
];

export default function Compound() {
  return (
    <div className="col-3 gap-4 flex flex-wrap justify-center">
      {PRODUCTS.map((product) => (
        <Card product={product} key={product.id}>
          <Card.Title />
          <Card.Image />
          <Card.Description />
        </Card>
      ))}
    </div>
  );
}
