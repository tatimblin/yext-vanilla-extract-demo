import { Button, Heading, Price } from '../my-library';
import { button, text, heading } from '../design-system/cobalt.css';

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
        <Heading level={2} className={heading({
          level: '2',
        })}>
          {product.title}
        </Heading>
        <span className={`text-right block ${text({
          size: 'large',
          weight: 'bold',
        })}`}>
          <Price>{product.price}</Price>
        </span>
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
