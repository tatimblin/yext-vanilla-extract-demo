import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css';
import { MyContext, config } from './design-system/my-context';

ReactDOM.render(
  <React.StrictMode>
    <MyContext.Provider value={config}>
      <App />
    </MyContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
