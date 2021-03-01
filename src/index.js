import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GraphContextProvider } from './contexts/GraphData';
import { ClicksContextProvider  } from './contexts/ClicksContext';
import './index.css'


ReactDOM.render(
  <ClicksContextProvider >
    <GraphContextProvider>
      <App />
    </GraphContextProvider>
  </ClicksContextProvider >,
  
  document.getElementById('root')
);
