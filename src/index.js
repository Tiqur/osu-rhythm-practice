import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GraphContextProvider } from './contexts/GraphData';
import './index.css'


ReactDOM.render(
  <GraphContextProvider>
    <App />
  </GraphContextProvider>,
  
  document.getElementById('root')
);
