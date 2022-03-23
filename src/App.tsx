import { themeClass, exampleStyle } from './theme.css';
import { Button } from './components';

function App() {
  return (
    <div className={themeClass}>
      <h1 className={exampleStyle}>Hello World</h1>
      <Button variants={{
        color: 'brand',
      }} />
    </div>
  );
};

export default App;
