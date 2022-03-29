import { Button } from '../my-library';
import { button } from '../design-system/cobalt.css';

export interface Rating {
  count: number
  rate: number
}

export interface Product {
  id: number
  title: string
  price: number
  rating: Rating
  category: string
  description: string
  image: string
}

interface IProps {
  product: Product
}

const Card: React.FC<IProps> = ({ product }) => {
  return (
    <article className="w-full border rounded overflow-hidden">
      <img src={product.image} alt="" />
      <div className="p-4">
        {product.title}
        <Button
          content="Add To Cart"
          className={`mt-4 ${button({
            color: 'light',
            size: 'full',
          })}`}
        />
        <Button
          content="Buy Now"
          className={`mt-4 ${button({
            color: 'dark',
            size: 'full',
          })}`}
        />
      </div>
    </article>
  );
};

export default Card;
