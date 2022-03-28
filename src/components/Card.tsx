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
      </div>
    </article>
  );
};

export default Card;
