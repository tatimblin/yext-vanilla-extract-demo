import { useState } from 'react';
import { items } from './assets/data.json';
import { SearchForm, SearchResults } from './components';
import { Product } from './components/Card';
import { theme } from './design-system/theme.css';
import logo from './assets/logo.png';

function App() {

  const products: Product[] = items;
  const [filtered, setFiltered] = useState(products);
  const [query, setQuery] = useState<string>('');

  const search = (value: string) => {
    setQuery(value);
    const newFilter = products.filter((item) => {
      return Object.values(item).join(' ').toLowerCase().includes(value.toLowerCase());
    });
    setFiltered(newFilter);
  }

  return (
    <div className={theme}>
      <header className="mb-8 border-b border-gray-200">
        <div className="container mx-auto py-2 flex items-center">
          <a className="mr-4" href="https://www.revlon.com/" target="_blank">
            <img src={logo} alt="Go to homepage" className="w-32" />
          </a>
          <SearchForm onChange={(e: React.ChangeEvent<HTMLInputElement>) => search(e.target.value)} />
        </div>
      </header>
      <section className="container mx-auto">
        <SearchResults results={filtered} />
      </section>
      <footer className="bg-gray-100 mt-8">
        <div className="container mx-auto py-4">
          Copyright © 2022
        </div>
      </footer>
    </div>
  );
};

export default App;
