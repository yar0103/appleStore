import React from 'react';
import ReactDOM from 'react-dom/client'; //react 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//react 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/appleStore'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
