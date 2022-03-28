import Card, { Product } from './Card';

interface Props {
  results: Product[]
}

const SearchResults: React.FC<Props> = ({ results }) => {
  if (results.length) {
      return (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {results.map((item) => {
            return (
              <li className="col-span-1 flex" key={item.id}>
                <Card product={item} />
              </li>
            );
          })}
        </ul>
      );
  } else {
    return (
      <p>Error...</p>
    );
  }
};

export default SearchResults;
